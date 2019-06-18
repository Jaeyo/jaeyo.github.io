---
title: "AWS API, IP 기반으로 접근 제한하기"
date: "2018-01-30T17:19:00.000Z"
layout: post
draft: false
path: "/posts/aws-api-ip-based-access-control/"
category: "tech"
tags:
---

EC2 상의 인스턴스나 로드밸런서에 특정 IP 대역만 접근 가능하도록 설정하고 싶다면 Security Group 혹은 ACL을 이용하면 된다. 하지만 그 외의 AWS에서 제공하는 API 들에 대해서 IP 기반으로 접근제한을 걸고 싶다면 Security Group, ACL 로는 불가능하다. 이 부분은 IAM의 Policy로 해결을 봐야 한다.

예를 들어, AWS System Manager의 Parameter Store에 접근해서 데이터를 읽어오는 API를 IP 기반으로 제한하고 싶다고 가정하자. 
그럼 일단 Parameter Store에 대한 기본 Policy 부터 확인해보자.
“AWS IAM -> 정책” 로 들어가서 찾아볼 수 있다.

확인해본 결과 `AmazonSSMReadOnlyAccess` 라는 정책이 있다. 정책 상세값은 아래와 같다.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ssm:Describe*",
                "ssm:Get*",
                "ssm:List*"
            ],
            "Resource": "*"
        }
    ]
}
```
우리는 여기서 IP 기반 조건만 넣어주면 된다.
일단 기본 정책 `AmazonSSMReadOnlyAccess`의 상세 JSON 값을 복사한 후에 새로운 정책을 생성해보자.

“AWS IAM -> 정책 -> 정책 생성”으로 들어가면 정책을 생성하기 위한 도구로써 시각적 편집기와 JSON 입력창이 제공되는데 JSON 입력창을 이용하여 다음의 내용을 입력한다.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ssm:Describe*",
                "ssm:Get*",
                "ssm:List*"
            ],
            "Resource": "*",
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": [
                        "{IP_ADDRESS_TO_ALLOW}"
                    ]
                }
            }
        }
    ]
}
```

처음봤던 기본 조건에 비교하여 달라진 점은 “Condition” 부분이 추가되었다는 것이다. `{IP_ADDRESS_TO_ALLOW}` 부분을 적절하게 Allow 할 IP로 대체하면 된다. 
단, aws api를 요청하는 경우에는 대부분의 경우 source ip가 외부 ip로 찍히게 되므로 사설 ip 대역은 설정해놓으면 안된다.

이런식으로 정책을 설정한 뒤에 특정 계정에게 적용해놓으면 해당 계정을 통해서는 기 설정해놓은 IP 대역대에서만 접근할 수 있다. 

본문에는 “Allow” 기반으로 했는데 “Allow” 대신 “Deny”로 바꾸고 “IpAddress”를 “NotIpAddress”로 바꿔도 동일하게 동작 할 것이다.

IAM 정책상에서 동일 리소스 및 동작에 대해 Allow와 Deny가 같이 존재한다면 Deny가 우선순위를 가진다.


---
title: "Install Docker on Ubuntu 18.04"
date: "2019-08-21T16:18:00.000Z"
template: "cheatsheet"
tags: ["docker", "ubuntu"]
---

- refer: https://blog.cosmosfarm.com/archives/248/우분투-18-04-도커-docker-설치-방법/

```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
```

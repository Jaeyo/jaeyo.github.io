import os
import re

# 파일명에서 '(.*)'로 끝나는 패턴을 찾기 위한 정규 표현식
filename_pattern = re.compile(r"\(.*\)$")
line_pattern = re.compile(r'title: ".*\(.*\)')

# 현재 디렉토리의 모든 md 파일을 확인
for filename in os.listdir("."):
    if filename.endswith(".md"):
        original_filename = filename
        # 확장자를 제외한 파일명과 확장자를 분리
        name, ext = os.path.splitext(filename)

        # 파일명이 '(.*)'로 끝나는지 확인 (확장자를 제외하고 체크)
        if filename_pattern.search(name):
            # '(.*)' 부분을 제거한 새로운 파일명 생성 (strip 적용하지 않음)
            new_name = filename_pattern.sub("", name) + ext
            print(f"Renaming file: {original_filename} -> {new_name}")
            
            # 파일 이름 변경
            os.rename(original_filename, new_name)

            # 파일 내용 수정 (2번 라인의 'title: "...(.*)"' 패턴 제거)
            with open(new_name, "r", encoding="utf-8") as file:
                lines = file.readlines()

            # 2번 라인에서 'title: "...(.*)"' 패턴 제거
            if len(lines) >= 2 and line_pattern.search(lines[1]):
                lines[1] = f'title: "{filename_pattern.sub("", name)}"\n'
                print(f"Modified line 2 in file: {new_name}")

            # 변경된 내용을 다시 파일에 씀
            with open(new_name, "w", encoding="utf-8") as file:
                file.writelines(lines)

print("Processing complete.")




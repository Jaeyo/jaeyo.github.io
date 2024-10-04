import os

def process_md_files():
    # 현재 디렉토리의 모든 파일을 순회
    for filename in os.listdir('.'):
        if filename.endswith('.md'):
            print(f"Processing file: {filename}")
            try:
                # 파일 읽기
                with open(filename, 'r', encoding='utf-8') as file:
                    lines = file.readlines()

                # 6번째 줄에 "```" 추가
                if len(lines) >= 6:
                    lines.insert(5, "```\n")
                else:
                    # 만약 6줄이 안되면 마지막 줄에 추가
                    lines.append("```\n")

                # 마지막 줄에 "```" 추가
                lines.append("```\n")

                # 파일 쓰기 (덮어쓰기)
                with open(filename, 'w', encoding='utf-8') as file:
                    file.writelines(lines)

                print(f"File {filename} updated successfully!")

            except Exception as e:
                print(f"Error processing file {filename}: {e}")

if __name__ == '__main__':
    process_md_files()


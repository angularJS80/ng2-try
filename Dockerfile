FROM nginx:alpine

# 기본 설정 파일을 지우고, 새로운 파일로 대체합니다.

COPY ./ngdist /usr/share/nginx/html

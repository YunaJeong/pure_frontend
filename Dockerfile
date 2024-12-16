# 빌드 스테이지: Node.js를 사용해 애플리케이션 빌드
FROM node:18 AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# 애플리케이션 소스 복사 및 빌드
COPY . .
RUN npm run build

# -------------------------------------------
# 배포 스테이지: Nginx로 빌드 파일 배포
FROM nginx:1.23

# 작업 디렉토리 설정 (Nginx 기본 경로)
WORKDIR /usr/share/nginx/html

# 기존 파일 삭제
RUN rm -rf ./*

# 빌드된 파일 복사
COPY --from=builder /app/dist/ .

# Nginx 설정 파일 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 기본 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]


node {
  git poll: true, url:'https://github.com/yunajeong/pure_frontend.git'
  withCredentials([[$class: 'UsernamePasswordMultiBinding',
    credentialsId: 'docker-hub',
    usernameVariable: 'DOCKER_USER_ID', 
    passwordVariable: 'DOCKER_USER_PASSWORD']]) { 
    stage('Pull') {
      git 'https://github.com/yunajeong/pure_frontend.git' 
    }
    stage('Unit Test') {}
    stage('Build') {
      sh(script: 'docker-compose build app')
    }
    stage('Tag') {
      sh(script: '''docker tag ${DOCKER_USER_ID}/flask \
                    ${DOCKER_USER_ID}/flask:${BUILD_NUMBER}''') }
    stage('Push') {
      sh(script: 'docker login -u ${DOCKER_USER_ID} -p ${DOCKER_USER_PASSWORD}') 
      sh(script: 'docker push ${DOCKER_USER_ID}/flask:${BUILD_NUMBER}') 
      sh(script: 'docker push ${DOCKER_USER_ID}/flask:latest')
    }
    stage('Deploy') {
      sh(script: 'docker-compose up -d production') 
    }
  } 
}

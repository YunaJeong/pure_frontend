pipeline {
    agent any
    
    stages {
        
        stage('github-clone') {
            steps {
                git branch: 'master', credentialsId: 'github_token', url: '{REPOSITORY URL}'
            }
        }
        
   		// stage...
   	}
}

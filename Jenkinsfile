
pipeline {
    environment {
        imagename = "yenigul/hacicenkins"
        dockerImage = ''
    }
    agent any 
    stages {
        stage('Building image') {
            steps{
                script {
                    dockerImage = docker.build imagename
                }
            }
        }
        stage('Run Unit Test') {
            steps{
                sh 'npm run test'
            }
            
        }
    }
}
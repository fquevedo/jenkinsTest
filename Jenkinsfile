
pipeline {
    environment {
        imagename = "yenigul/hacicenkins"
        dockerImage = ''
    }
    agent any 
    stages {
        stage('Building docker image') {
            steps{
                script {
                    dockerImage = docker.build imagename
                }
            }
        }
        stage('Run docker image') {
            steps{
                script {
                    docker.run imagename
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
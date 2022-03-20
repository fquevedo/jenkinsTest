
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
        stage('Run Unit Test') {
            steps{
                script {
                    dockerImage.inside {
                        sh 'npm run test'
                    }
                }
            }
            
        }
    }
}
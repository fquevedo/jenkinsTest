
pipeline {
    checkout scm
    agent any 
    stages {
        stage('Build') { 
            steps {
                def customImage = docker.build("my-image")
            }
        }
        stage('Test') { 
            steps {
                // 
            }
        }
        stage('Deploy') { 
            steps {
                // 
            }
        }
    }
}
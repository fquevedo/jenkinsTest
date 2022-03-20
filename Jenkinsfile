
pipeline {
    agent { label "linux"} 
    stages {
        stage('Building docker image') {
            steps{
                sh """
                    docker build -t hello_there .
                """
            }
        }
        stage('Run docker image') {
            steps{
                sh """
                    docker run --rm hello_there
                """
            }
        }
        stage('Run Unit Test') {
            steps{
                sh 'npm run test'
            }
            
        }
    }
}
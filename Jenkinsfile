pipeline {
    agent any 
    environment {
        //once you sign up for Docker hub, use that user_id here
        registry = "quiev/testapp"
        //- update your credentials ID after creating credentials for connecting to Docker Hub
        registryCredential = '65ac686a-2021-4dbe-9fc4-4be1e5a8362b'
        dockerImage = ''
    }
    
    stages {
        stage('Cloning Git') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'github-fquevedo', url: 'https://github.com/fquevedo/jenkinsTest']]])       
            }
        }
    
    // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry
        }
      }
    }
    
     // Uploading Docker images into Docker Hub
    stage('Upload Image') {
     steps{    
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
            }
        }
      }
    }
    
     // Stopping Docker containers for cleaner Docker run
     stage('docker stop container') {
         steps {
            sh 'docker ps -f name=myappContainer -q | xargs --no-run-if-empty docker container stop'
            sh 'docker container ls -a -fname=myappContainer -q | xargs -r docker container rm'
         }
       }
    
    
    // Running Docker container
    stage('Docker Run') {
     steps{
         script {
            dockerImage.run("-p 3000:3000 --rm --name myappContainer")
         }
      }
    }
  }
}
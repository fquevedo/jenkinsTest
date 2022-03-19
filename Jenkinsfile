node {
    checkout scm

    def customImage = docker.build("my-image")

    customImage.inside {
        sh 'npm start'
    }
}
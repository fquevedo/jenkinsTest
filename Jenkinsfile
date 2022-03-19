node {
    checkout scm

    def customImage = docker.build("my-image", "./dockerfiles/test")

    customImage.inside {
        sh 'npm start'
    }
}
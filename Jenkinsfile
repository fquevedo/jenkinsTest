node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials'){
        def customImage = docker.build("quiev/dockerapp")
        customImage.push()
    }
}
node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_id'){
        def customImage = docker.build("quiev/dockerapp")
        customImage.push()
    }
}
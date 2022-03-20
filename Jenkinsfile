node {
  stage 'Building image'
  def newApp = docker.build "mycorp/myapp"
  stage 'Test image'
  newApp.inside {
    sh 'npm run test'
  }
  stage 'Approve image'
  newApp.push 'latest'
}
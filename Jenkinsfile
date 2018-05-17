pipeline {
  agent any
  stages {
    stage('') {
      steps {
        sh '''cp -R ./ .public
rm -rf ~/public/mirrors
mv .public ~/public/mirrors'''
      }
    }
  }
}
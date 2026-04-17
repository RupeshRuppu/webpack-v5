pipeline {
  agent any
  stages {
    stage("build") {
      steps {
         sh 'npm install'
         sh 'npm run build'
      }
    }
    stage("test") {
      steps {
        echo "fe test"
      }
    }
    stage("deploy") {
      steps {
        echo "fe asset deploy"
      }
    }
  }
}  

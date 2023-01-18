pipeline {
  agent any

  parameters {
    string(name: "DB_HOST", defaultValue: "", description: "Database Host ?")
    string(name: "DB_NAME", defaultValue: "", description: "Database Name")
    string(name: "DB_USERNAME", defaultValue: "", description: "Database Username")
    string(name: "DB_PASSWORD", defaultValue: "", description: "Database Password")
    string(name: "APP_PORT", defaultValue: "", description: "Running on port ?")
  }

  options {
    disableConcurrentBuilds()
    timeout(time: 1, unit: 'HOURS')
  }

  stages {
    stage('Prepare Environment') {
        steps {
            sh "echo DB_HOST=${params.DB_HOST} >> .env" 
            sh "echo DB_NAME=${params.DB_NAME} >> .env" 
            sh "echo DB_USERNAME=${params.DB_USERNAME} >> .env" 
            sh "echo DB_PASSWORD=${params.DB_PASSWORD} >> .env" 
            sh "echo APP_PORT=${params.APP_PORT} >> .env" 
        }
    }
    stage('Build Containers') {
      stages {
        stage('Build') {
          steps {
            sh "docker-compose up -d --build --remove-orphans"
          }
        }
      }
    }
    stage('Test Instance') {
      steps {
        sleep 10
        sh "curl http://localhost:${params.APP_PORT}"
      }
    }
  }
}
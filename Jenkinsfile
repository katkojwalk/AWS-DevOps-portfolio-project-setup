pipeline {
  agent any
  environment {
    IMAGE = "${env.JOB_NAME ?: 'portfolio'}:${env.BUILD_NUMBER ?: 'latest'}"
    REGISTRY = "ghcr.io"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test -- --run'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Docker Build & Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh "echo $DOCKER_PASS | docker login ${REGISTRY} -u $DOCKER_USER --password-stdin"
          sh "docker build -t ${REGISTRY}/${GIT_URL?.tokenize(':')[-1].replace('.git','')}:$BUILD_NUMBER . || true"
          sh "docker push ${REGISTRY}/${GIT_URL?.tokenize(':')[-1].replace('.git','')}:$BUILD_NUMBER || true"
        }
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'dist/**', fingerprint: true
    }
  }
}

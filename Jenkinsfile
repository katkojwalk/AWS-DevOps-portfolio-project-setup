pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "portfolio-website"
        CONTAINER_NAME = "my-portfolio"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                checkout scm
                echo "Source code checked out successfully."
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image using the Dockerfile in the root directory
                sh "docker build -t ${DOCKER_IMAGE}:latest ."
                echo "Docker image built successfully."
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                // Check if a container with the same name exists and stop/remove it
                script {
                    try {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                        echo "Old container stopped and removed."
                    } catch (Exception e) {
                        echo "No old container found to stop."
                    }
                }
            }
        }

        stage('Run New Container') {
            steps {
                // Run the new container on port 80
                sh "docker run -d --name ${CONTAINER_NAME} -p 80:80 ${DOCKER_IMAGE}:latest"
                echo "Portfolio website is now running on port 80."
            }
        }

        stage('Verify Deployment') {
            steps {
                // Wait a few seconds and then check if the container is running
                sleep 5
                sh "docker ps | grep ${CONTAINER_NAME}"
                echo "Deployment verified successfully!"
            }
        }
    }

    post {
        always {
            echo "Pipeline finished execution."
        }
        success {
            echo "Build and Deployment was SUCCESSFUL!"
        }
        failure {
            echo "Pipeline FAILED. Check logs for details."
        }
    }
}

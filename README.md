# AWS DevOps Portfolio Project

Welcome to your production-ready portfolio website! This project is designed to showcase your skills in Frontend Development and DevOps by deploying a modern, responsive website using Docker, Jenkins, Kubernetes, and AWS.

## 🚀 Project Overview

- **Frontend**: Modern Glassmorphism UI (HTML/CSS/JS)
- **CI/CD**: Automated pipeline with Jenkins
- **Containerization**: Docker & Docker Compose
- **Orchestration**: Kubernetes (Deployment & Service)
- **Deployment**: AWS EC2 (Ubuntu)

---

## 🛠 AWS Deployment Guide (Step-by-Step)

### 1. Launch AWS EC2 Instance
- **OS**: Ubuntu 22.04 LTS
- **Instance Type**: t2.medium (Recommended for Jenkins/K8s)
- **Security Group**: Open ports 22 (SSH), 80 (HTTP), 8080 (Jenkins), and 30080 (K8s Service).

### 2. Connect to EC2
```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

### 3. Install Docker
```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
newgrp docker
```

### 4. Install Jenkins
```bash
sudo apt install openjdk-17-jre -y
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update
sudo apt install jenkins -y
sudo systemctl start jenkins
```

### 5. Install Kubernetes (Minikube for Beginners)
```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
sudo apt install conntrack -y
minikube start --driver=none
```

### 6. Clone the Repository
```bash
git clone https://github.com/your-username/aws-devops-portfolio.git
cd aws-devops-portfolio
```

### 7. Build and Run with Docker
```bash
# Build the image
docker build -t portfolio-website .

# Run the container
docker run -d -p 80:80 --name my-portfolio portfolio-website
```

### 8. Deploy to Kubernetes
```bash
# Apply deployment
kubectl apply -f deployment.yaml

# Apply service
kubectl apply -f service.yaml

# Check status
kubectl get pods
kubectl get svc
```

### 9. Configure Jenkins Pipeline
1. Open Jenkins at `http://your-instance-ip:8080`.
2. Create a "New Item" -> "Pipeline".
3. Under "Pipeline Script from SCM", select Git and paste your repo URL.
4. Run the build!

---

## 📖 Useful Commands

### Git
- `git status`: Check modified files.
- `git add .`: Stage all changes.
- `git commit -m "update"`: Save changes.

### Docker
- `docker ps`: List running containers.
- `docker images`: List built images.
- `docker-compose up -d`: Run with Compose.

### Kubernetes (kubectl)
- `kubectl get all`: View all resources.
- `kubectl logs <pod-name>`: Debug pod issues.

---

## 📄 License
This project is for educational purposes. Feel free to modify and use it for your own portfolio!

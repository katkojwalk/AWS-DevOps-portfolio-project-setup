variable "region" {
  type    = string
  default = "us-east-1"
}

variable "env" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "prefix" {
  description = "Resource name prefix"
  type        = string
  default     = "devops-portfolio"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "public_subnets" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnets" {
  type    = list(string)
  default = ["10.0.101.0/24", "10.0.102.0/24"]
}

variable "service_desired_count" {
  type    = number
  default = 2
}

variable "container_image" {
  type    = string
  default = "ghcr.io/katkojwalk/aws-devops-portfolio-project-setup:latest"
}

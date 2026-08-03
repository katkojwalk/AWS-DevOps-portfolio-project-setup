provider "aws" {
  region = var.region
}

module "vpc" {
  source        = "./modules/vpc"
  prefix        = var.prefix
  vpc_cidr      = var.vpc_cidr
  public_subnets  = var.public_subnets
  private_subnets = var.private_subnets
}

module "ecs" {
  source        = "./modules/ecs"
  prefix        = var.prefix
  cluster_name  = "${var.prefix}-cluster"
  vpc_id        = module.vpc.vpc_id
  public_subnets = module.vpc.public_subnets
  private_subnets = module.vpc.private_subnets
  desired_count = var.service_desired_count
  container_image = var.container_image
}

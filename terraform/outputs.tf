output "vpc_id" {
  value       = module.vpc.vpc_id
  description = "VPC ID"
}

output "ecs_cluster_id" {
  value       = module.ecs.cluster_id
  description = "ECS cluster id"
}

output "alb_dns" {
  value       = module.ecs.alb_dns
  description = "ALB DNS name"
}

output "cluster_id" { value = aws_ecs_cluster.this.id }
output "alb_dns" { value = aws_lb.alb.dns_name }
output "ecr_repo" { value = aws_ecr_repository.app.repository_url }

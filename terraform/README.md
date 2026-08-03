Terraform infrastructure for AWS (phase 3)

Overview
- VPC module: multi-AZ VPC with public and private subnets, IGW, NAT Gateway(s), route tables
- ECS module: ECR repo, ECS Cluster (Fargate), Task Definition, Service behind ALB, Auto Scaling, CloudWatch log groups
- IAM roles: task execution and task roles with least-privilege policies
- Remote state: S3 backend + DynamoDB locking (bootstrap script provided)

Usage
1. Ensure AWS CLI is configured with appropriate credentials and region.
2. Create Terraform backend (one-time):
   ./terraform/bootstrap-backend.sh --bucket my-unique-tfstate-bucket --region us-east-1 --lock-table my-tf-lock
3. Edit terraform/terraform.tfvars to set values (region, env, prefix).
4. Initialize: terraform init
5. Validate and plan: terraform validate && terraform plan -out plan.tfplan
6. Apply: terraform apply "plan.tfplan"

Notes
- The bootstrap script requires awscli installed and permissions to create S3 and DynamoDB.
- The S3 bucket name must be globally unique.
- Replace placeholder image references with your published container image (ECR/GHCR).

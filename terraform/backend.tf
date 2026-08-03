# Remote state backend (S3 + DynamoDB). Fill backend bucket name via -backend-config or create with bootstrap script.
terraform {
  backend "s3" {}
}

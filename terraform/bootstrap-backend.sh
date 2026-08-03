#!/usr/bin/env bash
set -euo pipefail

BUCKET=""
REGION="us-east-1"
LOCK_TABLE=""

usage() {
  echo "Usage: $0 --bucket BUCKET_NAME --region REGION --lock-table LOCK_TABLE_NAME"
  exit 1
}

while [[ $# -gt 0 ]]; do
  case $1 in
    --bucket) BUCKET="$2"; shift 2;;
    --region) REGION="$2"; shift 2;;
    --lock-table) LOCK_TABLE="$2"; shift 2;;
    *) usage;;
  esac
done

if [[ -z "$BUCKET" || -z "$LOCK_TABLE" ]]; then
  usage
fi

echo "Creating S3 bucket: $BUCKET in $REGION"
aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
  --create-bucket-configuration LocationConstraint=$REGION || true

echo "Enabling versioning on $BUCKET"
aws s3api put-bucket-versioning --bucket "$BUCKET" --versioning-configuration Status=Enabled

echo "Creating DynamoDB table for locks: $LOCK_TABLE"
aws dynamodb create-table --table-name "$LOCK_TABLE" \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST --region "$REGION" || true

echo "Backend bootstrap completed. Configure terraform backend with:"
cat <<EOF
terraform {
  backend "s3" {
    bucket = "$BUCKET"
    key    = "terraform.tfstate"
    region = "$REGION"
    dynamodb_table = "$LOCK_TABLE"
    encrypt = true
  }
}
EOF

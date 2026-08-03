variable "prefix" { type = string }
variable "cluster_name" { type = string }
variable "vpc_id" { type = string }
variable "public_subnets" { type = list(string) }
variable "private_subnets" { type = list(string) }
variable "desired_count" { type = number }
variable "container_image" { type = string }
variable "region" { type = string default = "us-east-1" }
variable "tags" { type = map(string) default = {} }

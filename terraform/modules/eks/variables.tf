variable "prefix" { type = string }
variable "cluster_name" { type = string }
variable "region" { type = string }
variable "vpc_id" { type = string }
variable "public_subnets" { type = list(string) }
variable "private_subnets" { type = list(string) }
variable "node_group_instance_types" { type = list(string) default = ["t3.medium"] }
variable "desired_capacity" { type = number default = 2 }
variable "min_size" { type = number default = 1 }
variable "max_size" { type = number default = 3 }
variable "tags" { type = map(string) default = {} }

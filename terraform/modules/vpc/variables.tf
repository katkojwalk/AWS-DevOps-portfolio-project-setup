variable "prefix" { type = string }
variable "vpc_cidr" { type = string }
variable "public_subnets" { type = list(string) }
variable "private_subnets" { type = list(string) }
variable "tags" { type = map(string) default = {} }

data "aws_availability_zones" "available" {
  state = "available"
}

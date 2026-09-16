########################################################################

block_type "block_label" "block_label" {
  first_arg  = "expression or value"
  second_arg = "expression or value"
  third_org  = "expression or value"
}

########################################################################

# (Example 1 of syntax)

resource<type_of_block> "aws_vpc <kind_of_resources>" "vpc <name_of_resource>" {
    cidr_block = var.vpc_cidr
    tags = {
        Name        = var.vpc_name
        Environment = "demo_environment"
        Terraform   = "true"
    }
}




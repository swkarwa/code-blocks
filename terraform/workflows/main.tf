terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }

    github = {
      source = "integrations/github"
    }

    local = {
      source = "hashicorp/local"
    }
  }
}

resource "local_file" "name" {
  filename = "${path.module}/files/hello.txt"
  content  = "I love terraform"
}

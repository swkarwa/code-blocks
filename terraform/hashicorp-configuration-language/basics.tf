terraform {
  required_providers {
    github = {
      source = "integrations/github"
    }
  }
}

variable "github_token" {
  type      = string
  sensitive = true
}

provider "github" {
  token = var.github_token
}

resource "github_repository" "production-repo" {
  name        = "terraform-repo"
  description = "repo created by terraform script"
  visibility  = "private"
}
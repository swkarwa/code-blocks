provider "github" {
  token = var.github_token
}

resource "github_repository" "demo" {
  name        = "terraform-created-repo"
  description = "created via terraform script"
  visibility  = "public"
  auto_init   = "true"
}

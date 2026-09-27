# Terraform Workflow

Terraform is an Infrastructure as Code (IaC) tool. It allows you to define, provision, and manage infrastructure using configuration files.

## Terraform Workflow Overview

Terraform commonly follows these four stages:

1. Write the Terraform configuration.
2. Initialize Terraform with `terraform init`.
3. Preview the changes with `terraform plan`.
4. Apply the changes with `terraform apply`.

```text
Configuration → Init → Plan → Apply
```

Terraform may feel difficult at first because each cloud platform has different providers and resources. However, it makes infrastructure provisioning repeatable, consistent, and easier to manage.

---

## 1. Write Terraform Configuration

Terraform configuration files use the HashiCorp Configuration Language (HCL).

Terraform files normally use the `.tf` extension.

Example:

```hcl
resource "local_file" "example" {
  filename = "${path.module}/hello.txt"
  content  = "Hello from Terraform!\n"
}
```

This configuration creates a local file named `hello.txt`.

Terraform configurations can also define resources from cloud providers such as:

- AWS
- Microsoft Azure
- Google Cloud Platform
- Cisco
- Kubernetes

---

## 2. Terraform Init

The `terraform init` command prepares the working directory for Terraform operations.

It performs tasks such as:

- Downloads required providers.
- Downloads required modules.
- Configures the backend for storing Terraform state.
- Creates or updates the Terraform provider lock file.

Run:

```bash
terraform init
```

### Terraform Providers

Providers allow Terraform to communicate with external platforms.

Examples:

```text
hashicorp/aws
hashicorp/azurerm
hashicorp/google
hashicorp/kubernetes
hashicorp/local
```

### Terraform Lock File

Terraform creates a file named:

```text
terraform.lock.hcl
```

This file records:

- Selected provider versions.
- Provider checksums.
- Dependency information.

The lock file should usually be committed to version control so that Terraform uses consistent provider versions across different machines and platforms.

### When to Run Terraform Init

Run `terraform init` when:

- A new provider is added.
- A provider version is changed.
- A new module is added.
- A module version is changed.
- Backend configuration changes.
- The Terraform working directory is cloned or copied to another machine.

### Ignoring Local Terraform CLI Configuration

Sometimes a local Terraform CLI configuration file contains a provider mirror or custom settings.

To ignore the local CLI configuration for one command, run:

```bash
TF_CLI_CONFIG_FILE=/dev/null terraform init
```

`/dev/null` is an empty system file. Terraform treats it as an empty CLI configuration file.

This command is useful when a machine-specific provider mirror is unavailable or should not be used.

---

## 3. Terraform Plan

The `terraform plan` command previews the changes Terraform intends to make.

It compares:

- The desired infrastructure defined in the Terraform configuration.
- The current infrastructure recorded in the Terraform state.
- The actual infrastructure available from the provider.

Terraform then identifies resources that must be:

- Created.
- Updated.
- Replaced.
- Destroyed.

`terraform plan` is commonly called a **dry run** because it does not make changes.

Run:

```bash
terraform plan
```

### Save a Terraform Plan

You can save the plan to a file:

```bash
terraform plan -out=planned-changes.tfplan
```

The saved plan can later be applied:

```bash
terraform apply planned-changes.tfplan
```

Saving a plan is useful when you want to review the exact changes before applying them.

---

## 4. Terraform Apply

The `terraform apply` command applies the proposed changes.

Run:

```bash
terraform apply
```

Terraform displays the proposed changes and asks for confirmation.

Type:

```text
yes
```

to allow Terraform to make the changes.

You can also apply a previously saved plan:

```bash
terraform apply planned-changes.tfplan
```

### Automatic Approval

For automation or testing, you can skip the confirmation prompt:

```bash
terraform apply -auto-approve
```

Use `-auto-approve` carefully because Terraform will apply changes without asking for confirmation.

---

## Complete Example

### Terraform Configuration

Create a file named `main.tf`:

```hcl
terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
}

provider "local" {}

resource "local_file" "example" {
  filename = "${path.module}/hello.txt"
  content  = "Hello from Terraform!\n"
}
```

### Initialize Terraform

```bash
terraform init
```

### Format the Configuration

```bash
terraform fmt
```

### Validate the Configuration

```bash
terraform validate
```

### Preview the Changes

```bash
terraform plan
```

### Apply the Changes

```bash
terraform apply
```

### Verify the Created File

```bash
cat hello.txt
```

Expected output:

```text
Hello from Terraform!
```

### Destroy the Resource

To remove the file created by Terraform:

```bash
terraform destroy
```

---

## Resource Graph

Terraform automatically creates a dependency graph for resources.

For example, a subnet depends on a VPC:

```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "main" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}
```

Terraform understands that:

1. The VPC must be created first.
2. The subnet depends on the VPC.
3. The subnet can be created after the VPC exists.

Terraform can create independent resources in parallel, which can speed up provisioning.

---

## Types of Dependencies

Terraform supports two types of dependencies:

1. Implicit dependencies.
2. Explicit dependencies.

### 1. Implicit Dependency

An implicit dependency is created automatically when one resource references another resource.

```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "main" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}
```

The reference below creates the dependency:

```hcl
aws_vpc.main.id
```

Terraform automatically understands that the subnet depends on the VPC.

### 2. Explicit Dependency

An explicit dependency is declared using `depends_on`.

Use it when Terraform cannot determine the dependency from a resource reference.

```hcl
resource "aws_iam_role_policy_attachment" "example" {
  role       = aws_iam_role.example.name
  policy_arn = aws_iam_policy.example.arn
}

resource "aws_instance" "app" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"

  depends_on = [
    aws_iam_role_policy_attachment.example
  ]
}
```

Explicit dependencies are optional and should only be used when necessary.

---

## Useful Terraform Commands

| Command | Description |
|---|---|
| `terraform init` | Initializes the Terraform working directory |
| `terraform fmt` | Formats Terraform configuration files |
| `terraform validate` | Validates the configuration syntax |
| `terraform plan` | Previews infrastructure changes |
| `terraform apply` | Applies infrastructure changes |
| `terraform destroy` | Removes managed infrastructure |
| `terraform show` | Displays the current state or saved plan |
| `terraform state list` | Lists resources in the Terraform state |
| `terraform output` | Displays Terraform outputs |
| `terraform version` | Displays the Terraform version |

---

## Recommended Workflow

```bash
terraform fmt
terraform validate
terraform init
terraform plan
terraform apply
```

For production changes, save and review the plan:

```bash
terraform plan -out=planned-changes.tfplan
terraform apply planned-changes.tfplan
```

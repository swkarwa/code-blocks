# Terraform

Pre-req:
1. terraform require cloud account (AWS/GCP/Azure) to setup
2. create an IAM user, with admin access or VPCFullAccess, which does not charge anything
3. create PAT for AWS IAM user and github and store it in env for terraform to use
4. comes in 3 flavors
   1. terraform community : cli based, free to use
   2. 'HCP terraform', previously called 'Terraform cloud'  : SaaS platform
   3. Terraform Enterprise -> self hosted & Managed (onPrem)

# Introduction

1. Hasicorp created terraform as part of its infra tool
2. Uses Declerative apporach
   - focuses on describing what needs to be done
3. Based on HCL (Hasicorp configuration language)
   - Humnan readable language used in terraform to define infrastructure resources in clear, structured, and reusable way
   - consider this IaC (Infrastructure in code)
     * codify your infra, rather than clicking on console, create a repeatable versioned workflow to provision and manage resources
     * Standardize workflow, use single tool or code to manage all infra from multiple clouds
     * same code can be used in multiple cloud accounts (AWS/Azure/GCP/Kubernetes/Github...)
     * provides flexibility to scale up or down infra

# Structure of HCL (hashicorp configuration language)

   1. example
      ```bash
      # single line comment
      block_type 'block_label' 'block_label' {
         first_argument = expression or value
         .
         .
         .
      }
      attribute_abc='value_abc'
      attribute_2=''
      ```

   2. any terraform configuration should be placed in a file with .tf extension

      * exmaple : main.tf
      ```bash
         # data block
         data 'aws_availablity_zones' 'availabled' {}
         data 'aws_regions' 'current' {}

         # resource block
         resource 'aws_vpc' 'vpc' {
            cidr_block = var.vpc_cidr

            tags = {
               Name = var.vpc_name
               Enviroment = 'demo_environment'
               Terraform = 'true
            }
         }
      ```

# Block syntax

   syntax

   ```bash
      <block-type> <resource-type> <name-of-block> {
         cidr_block = var.vpc_cidr
      }
   ```
   1. block type : waht type of block it is
   2. resource-type : this is coming from provider
   3. block-name : can be any name, but should be unique

# Resource referencing
1. should create more dynamic configurations
   * exmple :
   ```text
   ┌───────────────────────────────────────┐               
   │                                       │               
   │      Network config and subnets        │               
   │                                       │               
   └───────────────────────────────────────┘               
         ▲                      ▲                         
         │                      │                         
         │                      │                         
         │                      │                         
         │                      │                         
         │                      │                         
         │                      │                         
   ┌──────┴───────┐         ┌────┴─────────┐               
   │              │         │              │               
   │  firewalls    │         │   VM's       │               
   │              │         │              │               
   └──────────────┘         └──────────────┘
   ```
   firewalls and VM's have a dependecy on network config, terraform detects and creates network configuration first

# Core components

   ## Terraform core
      1. cli tool that provisions and manages infrrastructure resources as defined in terraform configuration file
   
   ## Providers
      1. Extends the functionality of terraform for specific platforms, such as public cloud providers, SaaS offerings, etc.
   
   ## Resources
      1. Infrastructure components or services that are managed by terraform
   
   ## State
      1. how terraform maps the desired configuration with real world on the target platform
      2. It is like a terraform memory, to track what resources has created, what is present and what is not present
   
   ## Modules:
      1. Resusable and shareable block of code that can be called over and over again
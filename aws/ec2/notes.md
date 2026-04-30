# EC2 (Elastic compute cloud)

1. It is infrasturcture as a service
2. capablity:
   - renting virtual machines (ec2)
   - storing data on virtual drives (ebs)
   - distributing load across mchines (elb)
   - scale services using an auto scaling group (asg)
3. Ec2 sizing and config options
    - operating systems
        - linux
        - windows
        - MAC
    - power and cores (CPU)
    - RAM
    - storage space
      - network attached (EBS & EFS)
      - hardware (EC2 Instance)
    - Network card: speed of the card, Public IP address
    - Firewall rules: security group
    - Bootstrap script (configure at first launch)

# Launching EC2 instance

1. User Data:
   - scripts provided in user data will run as root user on boot strap(start of instance) only once
   - Restarting instance, may change public IP while private IP remain same

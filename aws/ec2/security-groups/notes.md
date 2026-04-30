# Security Group
  - 
  - are fundamentas of network in AWS
  - the control how traffic is allowed in or out of EC2
  - securtity group contain only allow rules, rest all are deny
  - can refer to IP addresses or by security group
  - act as a fire wall to ec2 instance
  - regulates
  - Access to port
  - authorises IP ranges ipv4 and ipv6
  - controll inbound network (from other to instance)
  - controll to outbond network (from instance to other)
  - contains:
  - type : (http/https/ssh)
  - protocol : (tcp)
  - port range
  - source (ip address) (0.0.0.0 - anything)
  - can be attached to multiple instances
  - are region specific
  - does live outside ec2 - if traffic is blocked ec2 instance won't see it
  - recommended to seperate groups based on protocol
  - ex , in bound security group for ssh , for http , for https
  - security group can be attached to other security group
    - example:
        ``` bash
        security group : G
        security group : G1 (ssh port 22)
        security group : G2 (ssh port 22)
        security group : G3 (ssh port 22)
            instance1 (*G allows G1 & G2)
            instance1 (*G1) -> can access instance1 only with ssh
            instance2 (*G2) -> can access instance1 only with ssh
            instance3 (*G3) -> can't access instance1 by either of protocols (http/https/ssh)
        ```
# TIP
    - anytime we see a timeout, look out for security groups
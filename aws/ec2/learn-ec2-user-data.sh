#!/bin/bash
set -xe

yum update -y
yum install httpd

systemctl start httpd
systemctl enable httpd
echo '<h1> Hello, World ! I am running inside an EC2 $(hostname -f)</h1>' > /var/www/html/index.html
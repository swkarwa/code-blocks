# IAM (identity access management)

- It is a global service
- Used to create users with diff privileges
- Groups contains only users
- A user can belong to multiple groups

## Groups 

- groups can be assigned permissions, called policies (in a JSON format)
    * example
    ```JSON
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": "ec2:Describe*",
                    "Resource": ""
                },
                {
                    "Effect": "Allow",
                    "Action": "elasticloadbalancing:Describe",
                    "Resource": ""
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "cloudwatch:ListMetrics",
                        "cloudwatch:GetMetricStatistics",
                        "cloudwatch:Describe"
                    ],
                    "Resource": "*"
                }
            ]
        }
    ```


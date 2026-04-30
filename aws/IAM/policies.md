# Policies

- If a policy is attached at group level, it will be affected to all memebers in a group
- Policy created and attached directly to user without group is called in line policy
- If a user is part of multiple groups, all policies of each group will be assigned to a user
- Explicit deny of policy always wins, rest all policies applied via groups/roles/users wins

## Policy structure

```YAML
Version: date of policy
Id: policy id
Statement:
    -   Sid : action id
        Effect : allow / deny
        principal : which account/user/role this policy will be applied to 
            AWS : [account/user/role]

        action: [ list of action policy allows/denies ]
        resources : [resources policy applied to]
    
```
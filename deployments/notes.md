## Deployments

    - A Deployment allows defining the desired number of pod replicas
    - A Deployment does not directly create Pods
    - It creates and manages a ReplicaSet
    - The ReplicaSet is responsible for creating Pods
    - Replicas should be managed only by the Deployment
    - Manually managing ReplicaSets is not recommended, as changes will be reverted
    
#### Stretergy:
    RollingUpdate : this will update pods in batches
    Recreate: this will kill all pods at once , and create a new for all

### creating a deployment

``` bash
kubectl create deploy <deployment-name> --image=<image-name> --replicas=<total-replicas>
```
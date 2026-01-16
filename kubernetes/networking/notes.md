# Kubernetes networking

## Networking with Pods
    - connect to pods by default, i.e can access all pods from IP's regardless if pods are on any cluster/node on the server, this can be managed using network policies
    - multiple containers in pods connect to each other using local host
    - each pod gets its own IP address

    above is managed by
    - CNI plugin ( container network interafce plugin )
    - 
Services
Pods can be replaced, and their IP addresses can change. A Service gives you a stable way to reach a group of pods. It uses labels to find the right pods and sends traffic to them.
1. ClusterIP
A ClusterIP Service has an internal address that works inside the cluster. You can’t access it directly from outside the cluster.

2. NodePort
   everything clusterIP does, plus opens a specific port in range(30000-32767) and every nodes own IP, so traffic enter from outside the cluster.

3. LoadBalancer:
   LB = nodeport + and externalIP
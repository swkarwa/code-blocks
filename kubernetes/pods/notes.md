# 🧱 Pods (Kubernetes)

## 📌 Overview
- A **Pod** is the **smallest deployable unit** in a Kubernetes cluster
- A Pod can contain **one or more containers**
- In most real-world scenarios, a Pod usually runs **a single container**

## 🔗 Shared Characteristics (Multi-Container Pods)
All containers in the same Pod:
- Share the **same volumes**
- Share the **same IP address**
- Share the **same environment**
- Share the **same network namespace**
- Are **created and destroyed together**

## 🧩 Common Pod Commands

### List all Pods across all namespaces
```bash
kubectl get pods --all-namespaces
```

### gets a specific pod
```bash
kubectl get pod <pod-name> -n <namespace>
```

### get pod yaml structure
```bash
kubectl run <pod-name> --image=<image-name> --dry-run=client -o yaml
```

### create a p[od via YAML
```bash
kubectl create -f <file-path>
```
  - this will just create a pod from yaml file , but if changes are made in a file, it is not reflected in a pod
  
```bash
kubectl apply -f <file-path>
```
  - this will create a pod, however if there are any changes made to yaml file it will be reflected in a pod

### exec inside a pod

```bash
kubectl exec pod -it <pod-name> -- <command>
```

A Note on Editing Existing Pods
In any of the practical quizzes, if you are asked to edit an existing POD, please note the following:

If you are given a pod definition file, edit that file and use it to create a new pod.

If you are not given a pod definition file, you may extract the definition to a file using the below command:

```bash 
kubectl get pod <pod-name> -o yaml > pod-definition.yaml
```

Then edit the file to make the necessary changes, delete, and re-create the pod.

To modify the properties of the pod, you can utilize the 
```bash
kubectl edit pod <pod-name>
```
command. Please note that only the properties listed below are editable.

spec.containers[*].image

spec.initContainers[*].image

spec.activeDeadlineSeconds

spec.tolerations

spec.terminationGracePeriodSeconds
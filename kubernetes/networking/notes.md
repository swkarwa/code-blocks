# 🌐 Kubernetes Networking – Complete Guide

This document explains how **networking works in Kubernetes**, how Pods communicate,
and how Services expose applications inside and outside the cluster.

---

## 🧱 Pod Networking Fundamentals

### Key Concepts

- Every **Pod gets its own IP address**
- Pods can communicate with **any other Pod by default**
  - Even if Pods are on different Nodes
  - Even across Namespaces (unless restricted)
- This open communication model can be restricted using **NetworkPolicies**
- **All containers inside a Pod share the same network namespace**
  - Containers communicate using **localhost**
- Pods are **ephemeral**
  - IPs change when Pods restart
  - Never rely directly on Pod IPs in production

---

## 🔌 Container Network Interface (CNI)

Pod-to-Pod networking is implemented using **CNI plugins**.

### What CNI Does
- Assigns IP addresses to Pods
- Ensures Pod-to-Pod connectivity across Nodes
- Integrates with Kubernetes networking model

### Popular CNI Plugins
- Calico
- Flannel
- Cilium
- Weave Net

---

## 🧭 Kubernetes Services

Pods are short-lived. **Services provide a stable networking endpoint**.

### What Services Do
- Provide a stable IP (ClusterIP)
- Load-balance traffic across matching Pods
- Route traffic using **label selectors**

---

## 🧩 Service Types Explained

### 1️⃣ ClusterIP (Default)
- Internal-only access
- Accessible only within the cluster

```text
Pod → Service → Pod
```

### 2️⃣ NodePort
- Exposes Service on every Node’s IP
- Port range: 30000–32767
```text
Browser → NodeIP:NodePort → Service → Pod
```

### 3️⃣ LoadBalancer
- Exposes Service using a cloud provider load balancer
- Supported on AWS, GCP, Azure, etc.

```text
Browser → LoadBalancer → Service → Pod
```

### ▶️ Creating Resources (Commands)

- Create a Pod with an exposed container port
```bash

kubectl run <pod-name> \
  --image=<image-name> \
  --port=<container-port> \
  --dry-run=client -o yaml

```
Example:
```bash

kubectl run nginx-pod \
  --image=nginx \
  --port=80 \
  --dry-run=client -o yaml
```

- Create a Service for a Pod

```bash

kubectl expose pod <pod-name> \
  --port=<service-port> \
  --target-port=<container-port> \
  --type=ClusterIP|NodePort|LoadBalancer \
  --dry-run=client -o yaml

```
Example:
```bash

kubectl expose pod nginx-pod \
  --port=8080 \
  --target-port=80 \
  --type=NodePort \
  --dry-run=client -o yaml
```

- Port-forward to a Pod

```bash
kubectl port-forward pod/<pod-name> <local-port>:<container-port>
```
Example:
```bash
kubectl port-forward pod/nginx-pod 8080:80
```

---

## 🔁 Port Forwarding (Local Development & Debugging)

Port forwarding allows you to access applications **without exposing them externally**.
This is useful for debugging and local testing.

### Port-forward to a Pod
```bash
kubectl port-forward pod/<pod-name> <local-port>:<container-port>
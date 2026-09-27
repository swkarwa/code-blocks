# HELM

1. helm is package manager for kubernetes, akin to apt for debian, yum for ReadHar, brew for MACOS, or npm or NodeJS
2. it allows to define, install, and upgrade apdplication containing multiple kubernetes resources with a single command.

## We can

1. Packge multiple kubernetes manifests(called templates) into a single charts.
2. Deploy, update, and manage all the manifests from a chart with a single command
3. Thoroughlu customize the templates with Go templating fetaures and custom values in files
4. create and leveraghe reusable charts avail;able either publicly nor priivately
5. leverage charts for versionbing your application
6. Easily automate testinbg your charts with helm ghooks and helm cli

## Kubernetes vs Desktop only applications
    

| Desktop app | Kubernetes app |
|:-------------|----------------:|
| It runs on one computer | It runs on multiple computers, known as nodes |
| programs are knows as apps/processes | Runs containers |
| manages application | start/scale-up/scale-down containers |
| configured through menu | configured via menifestation |

Menifestation:
    1. these are yaml files, which creates infra(run or configure) containers
    pods | deployments | services | ingress | configmap | secrets | pvc's .. etc


## Problems with kubernetes

- use yaml menifests, to configure/or create k8s stack
- 
#!/bin/bash

keep1="bitnami"
keep2="prometheus-community"

helm repo list -o json | jq -r '.[].name' |
while read -r repo; do
    case "$repo" in 
        "$keep1" | "$keep2" ) ;;
        *) helm repo remove "$repo" ;;
    esac
done
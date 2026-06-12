#!/bin/sh
identifier=$1

LB_NAME="${identifier}-cont-es-ec"

LB_EXIST=$(aws --profile e2e-test-account elb describe-load-balancers \
    --load-balancer-names "$LB_NAME" \
    --query "LoadBalancerDescriptions[0].LoadBalancerName"
    --output text 2>/dev/null)

if [ -z "$LB_EXIST" ] || [ "$LB_EXIST" = "None" ]; then
    echo "Load balancer not found : $LB_NAME"
    exit 0
fi

#check if port 8181 exists
LISTENER_EXISTS=$( aws --profile e2e-test-account \
    elb describe-load-balancers \
    --load-balancer-names "$LB_NAME" \
    --query LoadBalancerDescriptions[0].ListenerDescriptions[?Listener.LoadBalancerPort==\`8181\`] \
    --output text)

if [ -z "$LISTENER_EXISTS" ]; then
    echo "8181 listener does not exist on LB : $LB_NAME"
fi

echo "Deleting existing listener on port 8181"

aws --profile e2e-test-account \
    elb delete-load-balancer-listeners \
    --load-balancer-name "$LB_NAME" \
    --load-balancer-ports 8181

echo "Creating new listener which listens on port 8181 via TCP protocol"

aws --profile e2e-test-account \
    elb create-load-balancer-listeners \
    --load-balancer-name "$LB_NAME" \
    --listeners Protocol=TCP,LoadBalancerPort=8181,InstanceProtocol=TCP,InstancePort=8181

echo "TCP listener port created on port 8181"

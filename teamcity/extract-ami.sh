#!/bin/sh

BRANCH="$1"

BUILD_ID=$(curl \
-H "Authorization: Bearer eyJ0eXAiOiAiVENWMiJ9.SjRzWmV3QTV3RW94Wnh4ME5WVVpzUTZXSFJi.N2Q3YWFlNjAtMDBkYS00ZmI2LTk0YjAtYTllODQ5ODk0MDMw" \
-H "Accept: application/json" \
"https://teamcity.corp.appdynamics.com/app/rest/builds/?locator=buildType:AppD_OnPrem_Platform_Build_AMI,branch:${BRANCH},count:1" \
| jq -r '.build[0].id')

AMI=$(curl \
-H "Authorization: Bearer eyJ0eXAiOiAiVENWMiJ9.SjRzWmV3QTV3RW94Wnh4ME5WVVpzUTZXSFJi.N2Q3YWFlNjAtMDBkYS00ZmI2LTk0YjAtYTllODQ5ODk0MDMw" \
"https://teamcity.corp.appdynamics.com/downloadBuildLog.html?buildId=${BUILD_ID}" | grep -o "s3://[^ ]*.ami" | tail -1
)

echo "${AMI}"



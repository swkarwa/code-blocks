curl \
-H 'Authorization: Bearer eyJ0eXAiOiAiVENWMiJ9.SjRzWmV3QTV3RW94Wnh4ME5WVVpzUTZXSFJi.N2Q3YWFlNjAtMDBkYS00ZmI2LTk0YjAtYTllODQ5ODk0MDMw' \
-H "Accept: application/json" \
"https://teamcity.corp.appdynamics.com/app/rest/builds/?locator=buildType:AppD_OnPrem_Platform_Build_AMI,branch:release/25.10.next" | jq -r ".build[0].id"

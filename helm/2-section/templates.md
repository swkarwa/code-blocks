templates + values = Manifest

manifest file 
```yaml
apiVersion: v1
data:
  APP_ENV: development
kind: ConfigMap
metadata:
  name: app-config
```

actions in helm
```yaml
apiVersion: v1
data:
  APP_ENV: {{ .values.input }}
kind: ConfigMap
metadata:
  name: app-config
```
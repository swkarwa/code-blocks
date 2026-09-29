# HELM

## Commands

creating a full helm skeleton for helm project

```bash
helm create <release-name>
```

view helm template for current helm project

```bash
helm template <release-name>
```

set `ingress.yaml=true` for release

```bash
helm template <release-name> --set ingress.enabled=true
```

## Notes

- release name prefix onto every resouce name.
- only 4 resources are rendered, -no (ingress,hpa.httproute), even tough these files exist in templates.
- `-` (like in {{- and -}}) means `trim white spaces`, purely cosmetic
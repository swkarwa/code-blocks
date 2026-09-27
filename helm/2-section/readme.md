## HELM charts anatomy

1. Templates
    `templates` directory holds template files that helm will render into kubernetes manifest

2. Charts
   `charts` directory holds subcharts and dependencies for the top level helm charts

3. Charts.yml
   `charts.yml` file holds metadata about charts as well as list of its dependecies

4. Values
   `values.yml` file is used to allow configuration of charts through modifiable YAML document

5. .helmignore
   specify files that should not be considered for helm process

6. NOTES.txt
   NOTES.txt allows chars authors to show notes about the chart to the user
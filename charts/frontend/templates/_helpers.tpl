{{- define "frontend.name" -}}
{{- default .Chart.Name .Values.nameOverride -}}
{{- end -}}

{{- define "frontend.fullname" -}}
{{- printf "%s-%s" (include "frontend.name" .) .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "frontend.serviceAccountName" -}}
{{- if .Values.serviceAccount.name }}
{{- .Values.serviceAccount.name }}
{{- else }}
{{- printf "%s-%s" (include "frontend.name" .) .Release.Name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end -}}

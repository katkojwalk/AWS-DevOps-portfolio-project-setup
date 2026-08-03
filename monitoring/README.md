Monitoring and Logging (Phase 6)

This folder contains manifests and instructions to deploy a production-ready monitoring and centralized logging stack on EKS.

Overview
- Prometheus + Grafana: Use the kube-prometheus-stack (Prometheus Operator) Helm chart to deploy a full Prometheus/Grafana stack. This manages ServiceMonitors, Alertmanager, and node exporters.
- Fluent Bit: DaemonSet to collect container logs and forward to CloudWatch Logs (or other sinks).
- ServiceMonitor: Example ServiceMonitor to scrape a metrics endpoint at /metrics if your app exposes Prometheus metrics.

Quick install (EKS, with kubectl configured):
1. Install kube-prometheus-stack:
   helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
   helm repo update
   helm install kube-prom-stack prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace --values monitoring/prometheus-values.yaml

2. Install Grafana (comes with the chart) and retrieve admin password:
   kubectl get secret -n monitoring kube-prom-stack-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

3. Deploy Fluent Bit (example forwards to CloudWatch):
   kubectl apply -f monitoring/fluentbit/fluentbit-configmap.yaml
   kubectl apply -f monitoring/fluentbit/fluentbit-serviceaccount.yaml
   kubectl apply -f monitoring/fluentbit/fluentbit-daemonset.yaml

Notes and AWS considerations
- Fluent Bit CloudWatch output requires permissions to create log groups/streams and put log events. Prefer using IRSA (IAM Roles for Service Accounts) — attach a minimal policy to the ServiceAccount.
- Prometheus Operator will create CRDs (ServiceMonitor, Prometheus, etc.). Ensure your cluster allows CRDs.
- For production, configure Alertmanager receivers and configure Grafana dashboards as code (provisioning or Grafana API).

Files:
- prometheus-values.yaml: opinionated values for kube-prometheus-stack
- fluentbit/: Fluent Bit config and DaemonSet example
- servicemonitor.yaml: Example ServiceMonitor for frontend app

Security: avoid embedding AWS credentials in manifests. Use IRSA or Kubernetes secrets with least privilege.

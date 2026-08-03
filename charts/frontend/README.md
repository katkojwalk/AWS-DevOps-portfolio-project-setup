Frontend Helm chart

Usage
1. Add the chart (local):
   helm install portfolio ./charts/frontend --namespace devops-portfolio --create-namespace --set ingress.host=app.example.com

2. To uninstall:
   helm uninstall portfolio -n devops-portfolio

Notes for EKS
- To use AWS ALB ingress, install AWS Load Balancer Controller in the cluster and set ingress.annotations accordingly.
- Ensure the container image (values.image.repository:tag) is pushed to a registry accessible by the cluster (ECR/GHCR). Add imagePullSecrets if needed.
- The chart includes HPA, liveness/readiness probes, resource requests/limits and a ServiceAccount.

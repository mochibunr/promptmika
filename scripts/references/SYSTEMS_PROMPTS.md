# Systems Prompts — Architecture, DevOps, and Infrastructure

## Domain-Specific Context to Inject
When refining a system design, devops, or infrastructure prompt, automatically include context that users forget to mention.

### Scale and Load Context
- Expected concurrent users, requests per second, and data volume.
- Growth projections: ten times in one year, steady state, seasonal spikes.
- Geographic distribution: single region, multi-region, global edge, data sovereignty requirements.
- Latency requirements: p50, p95, p99 targets for different operation types.

### Reliability Context
- Uptime target: two nines, three nines, four nines, five nines.
- Recovery time objective: maximum acceptable downtime after failure.
- Recovery point objective: maximum acceptable data loss after failure.
- Disaster recovery strategy: hot standby, warm standby, cold backup, multi-active.
- Chaos engineering requirements: regular failure injection, game days, automated recovery testing.

### Infrastructure Context
- Cloud provider and services: Amazon Web Services, Google Cloud Platform, Azure, private data center.
- Container orchestration: Kubernetes, Amazon Elastic Container Service, Docker Swarm, Nomad.
- Serverless versus serverful strategy and boundaries between them.
- Networking: virtual private cloud topology, subnet design, load balancer strategy, content delivery network.
- Storage: object storage, block storage, file systems, databases, caches, archival.

### Operational Context
- Observability stack: metrics, logs, traces, alerts, dashboards.
- Incident response: on-call rotation, escalation paths, runbooks, post-mortem process.
- Deployment strategy: blue-green, canary, rolling, feature flags, trunk-based.
- Rollback strategy: automated, manual, database migration reversibility.
- Cost constraints: budget ceiling, cost per user, reserved instance strategy, spot instance tolerance.

## Cross-Skill Injection for Systems
When the user's prompt involves infrastructure, architecture, or DevOps, automatically inject:

### From Security Handbook
- Zero trust: authenticate every request, every microservice, every time.
- Mutual TLS for all service-to-service communication.
- Firewall default deny. Explicit allow rules only.
- Rate limiting per IP and per user. Content delivery network for DDoS absorption.
- Secrets in hardware security modules, trusted platform modules, or vault services. Never hardcoded.
- Container security: minimal base images, no root user, read-only filesystems, capability dropping.
- Network policies: default deny inter-pod traffic. Explicit allow per namespace.
- Encryption at rest and in transit. TLS minimum one point three.
- Audit logging for all authentication, authorization, and data access events.
- Vulnerability scanning in continuous integration. Dependency audits continuous.

### From Context Engine
- Track all architecture decisions, infrastructure choices, and open issues across conversation.
- Quote exact service names, resource identifiers, and configuration keys from previous messages.
- If user changes architecture decision, encode permanently. Old decision obsolete.
- Maintain mental state map: cloud provider, regions, services, network topology, data flow.
- Before answering, scan last ten exchanges. Search full history for relevant context.
- If uncertain about previous infrastructure choice, ask clarification rather than guessing.

## Systems Prompt Enhancement Patterns

### Pattern One: From Service Request to Architecture Brief
User input: build a microservice for user notifications.
Refinement additions:
- Define the notification types: email, push, in-app, SMS, webhook.
- Define the delivery guarantees: at-most-once, at-least-once, exactly-once.
- Define the priority classes: critical alerts versus marketing messages versus digest summaries.
- Define the throughput: peak notifications per second, burst handling, queue depth limits.
- Define the failure modes: retry strategy, dead letter queue, alert on accumulation.
- Inject Build-Test-Loop: build notification service, test with load suite, detect delivery failures, loop until clean, verify end-to-end delivery latency.

### Pattern Two: From Deployment Request to Pipeline Specification
User input: set up continuous deployment.
Refinement additions:
- Define the stages: build, unit test, integration test, security scan, performance gate, staging deploy, production deploy.
- Define the gating criteria: code coverage threshold, vulnerability severity limit, performance regression limit.
- Define the approval workflows: automatic for patch versions, manual for minor, committee for major.
- Define the environment parity: staging must mirror production in data shape, not data volume.
- Define the secret injection: build-time versus run-time, vault integration, rotation policy.
- Inject Build-Test-Loop: build pipeline, test with dummy deployment, detect stage failures, loop until clean, verify rollback capability.

### Pattern Three: From Scaling Request to Capacity Plan
User input: make this handle more traffic.
Refinement additions:
- Define the bottleneck: CPU bound, memory bound, input-output bound, network bound, database bound.
- Define the scaling strategy: vertical scaling limits, horizontal scaling mechanics, auto-scaling triggers.
- Define the state handling: shared state, stateless replicas, sticky sessions, distributed caching.
- Define the database scaling: read replicas, sharding, partitioning, connection pooling, query optimization.
- Define the cost trade-off: scaling cost versus engineering cost versus user experience cost.
- Inject Build-Test-Loop: implement scaling changes, test under load, detect bottlenecks, loop until clean, verify cost per request.

### Pattern Four: From Security Request to Threat Model Brief
User input: secure this application.
Refinement additions:
- Define the threat actors: script kiddies, organized crime, nation states, insider threats.
- Define the asset inventory: data classification, critical paths, single points of failure.
- Define the compliance requirements: industry standards, regional regulations, customer contractual obligations.
- Define the security layers: network, application, data, identity, endpoint, physical.
- Define the monitoring: intrusion detection, anomaly detection, audit logging, forensics readiness.
- Inject Build-Test-Loop: implement security controls, test with penetration suite, detect vulnerabilities, loop until clean, verify compliance checklist.

## Anti-Patterns to Forbid in Systems Prompts
- Do not request scalability without defining the target metrics and growth assumptions.
- Do not request high availability without defining the acceptable downtime and data loss windows.
- Do not request security without defining the threat model and compliance scope.
- Do not request cost optimization without defining the budget constraints and trade-off appetite.
- Do not request automation without defining the failure handling and manual override paths.

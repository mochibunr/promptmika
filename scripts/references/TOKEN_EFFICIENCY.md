---
version: 2.1.0
last_updated: 2026-06-09
related:
  - iteration-workflow.md (Step Six: Token Compression)
  - SELF_IMPROVEMENT.md (token efficiency criterion)
---

# Token Efficiency — Eighty-Five Percent Compression System

## Philosophy
Token efficiency is not about being terse for the sake of it. It is about maximizing signal per token. Every token that does not carry unique, non-redundant, actionable information is waste. The goal is eighty-five percent or greater savings versus a naive verbose prompt while preserving or improving output quality.

## Universal Compression Rules

### Drop Articles
Eliminate a, an, the in all non-ambiguous contexts. Articles are the most common token waste.
- Before: build a responsive navigation component with the ability to collapse on mobile devices
- After: build responsive navigation component, collapses on mobile

### Drop Filler Words
Remove words that add no semantic value.
- just, really, basically, actually, simply, essentially, kind of, sort of, pretty much, more or less, in order to, due to the fact that, at this point in time
- Before: you basically just need to actually implement a really simple solution that essentially fixes the issue
- After: implement simple solution, fix issue

### Drop Pleasantries
Remove conversational padding. The target AI does not need to be asked politely.
- sure, certainly, of course, happy to, glad to, please, thank you, you're welcome, no problem, my pleasure, feel free, go ahead
- Before: sure, I'd be happy to help you with that. Please let me know if you need anything else
- After: help requested. details follow.

### Drop Hedging
Remove uncertainty markers that dilute authority.
- maybe, perhaps, probably, likely, I think, I believe, it seems, it appears, could be, might be, should be, would be, arguably, potentially, possibly
- Before: I think you should probably consider using a different approach that might be more efficient
- After: use different approach. more efficient.

### Use Fragments
Sentence fragments are acceptable and preferred when meaning remains clear.
- Before: the user interface should be designed with accessibility in mind so that all users can interact with it effectively
- After: design UI with accessibility. all users interact effectively.

### Short Synonyms
Replace multi-word phrases with single-word equivalents.
- extensive → big, large
- implement a solution for → fix
- at the present time → now
- in the event that → if
- for the purpose of → for
- with regard to → about
- in close proximity to → near
- in spite of the fact that → although
- utilization → use
- functionality → feature
- aforementioned → above
- subsequently → then
- additionally → also
- furthermore → plus
- nevertheless → yet
- notwithstanding → despite

### Technical Terms Exact
Never abbreviate technical terms in ways that create ambiguity. React stays React. Kubernetes stays Kubernetes. But common abbreviations are encouraged: DB, auth, config, req, res, fn, impl, UI, UX, API, CSS, HTML, DOM, JSON, URL, HTTP, TLS, CORS, XSS, CSRF, SQL, CLI, GUI, OS, CPU, RAM, GPU, SSD, HDD, LAN, WAN, VPN, DNS, CDN, CI, CD, QA, PM, ROI, KPI, SLA, GDPR, HIPAA, SOC2, PCI, JWT, OAuth, SSO, MFA, RBAC, ABAC, ACL, CORS, CSP, HSTS, XSS, CSRF, SSRF, XXE, RCE, LFI, RFI, IDOR, BOLA, DoS, DDoS, MITM, ARP, TCP, UDP, IP, MAC, NAT, DHCP, BGP, OSPF, VLAN, VPN, IPSec, SSL, TLS, SSH, FTP, SFTP, SCP, SMB, NFS, iSCSI, RAID, ECC, UPS, PDU, KVM, BIOS, UEFI, GRUB, systemd, init, cron, syslog, journald, nginx, apache, caddy, haproxy, envoy, istio, linkerd, consul, etcd, zookeeper, kafka, redis, memcached, postgres, mysql, mariadb, sqlite, mongodb, elasticsearch, solr, cassandra, dynamodb, s3, gcs, azure, ec2, gce, aks, eks, gke, lambda, fargate, cloudfront, cloudflare, fastly, vercel, netlify, heroku, docker, containerd, cri-o, podman, buildah, skopeo, helm, kustomize, terraform, pulumi, ansible, puppet, chef, salt, vagrant, packer, vault, consul-template, nomad, swarm, mesos, marathon, chronos, airflow, prefect, dagster, luigi, pinball, cadence, temporal, argo, tekton, jenkins, gitlab-ci, github-actions, circleci, travis, drone, buildkite, teamcity, bamboo, gocd, spinnaker, flux, flagger, argocd, rancher, openshift, okd, minikube, kind, k3s, microk8s, docker-desktop, colima, lima, multipass, lxd, lxc, incus, firecracker, kata, gvisor, runc, crun, youki, wasmtime, wasmer, wavm, lucet, wasm3, wamr, wasmedge, wasi, wit, component-model, spacex, falcon, starship, dragon, crew, starlink, artemis, sls, orion, gateway, iss, css, hubble, jwst, webb, chandra, fermi, swift, integral, nustar, rxte, xmm, rosat, asc, suzaku, hitomi, xrism, einstein, exosat, bb, cos-b, compton, cgro, fermi, lat, gb, mgb, lgb, vgb, agb, rgb, hb, wd, ns, bh, sn, grb, frb, gw, ligo, virgo, kagra, geo, lisa, bbo, decigo, tianqin, magis, atom, miga, elgar, sqo, zonto, nemo, orca, ptolemy, aria, cosmic, euclid, roman, spica, wfirst, lynx, habex, luvoir, origins, iris, castor, oasis, sphere, jwst, nircam, nirspec, miri, niriss, fgs, nrs, mrs, ifu, mos, lrs, hrs, sgd, coron, lyot, band, rdi, adi, sdi, pdi, cdi, klip, pca, nmf, llsg, andromeda, speckle, holography, kernel, pupil, apodized, lyot, focal, plane, mask, dark, hole, contrast, throughput, bandwidth, iwa, owa, working, angle, inner, outer, separability, resolution, limit, diffraction, airy, psf, fwhm, strehl, encircled, energy, rms, wavefront, error, zernike, noll, fringe, karhunen, loeve, kl, modal, zonal, dm, deformable, mirror, mems, piezo, voice, coil, tip, tilt, piston, segment, phasing, co-phasing, edge, sensor, dispersed, fringe, tracker, low, order, wavefront, sensor, howard, pyramid, curvature, shack, hartmann, lenslet, spot, array, centroid, slope, reconstruction, integrator, leaky, gain, spatial, filter, temporal, control, loop, bandwidth, stability, margin, phase, lag, group, delay, zero, pole, bode, nyquist, Nichols, root, locus, state, space, observer, estimator, kalman, lqg, h2, hinf, mu, synthesis, robust, performance, mixed, sensitivity, coprime, factorization, youla, kucera, interpolation, Nevanlinna, pick, Caratheodory, Fejer, Riesz, herglotz, representation, positive, real, bounded, real, passive, scattering, matrix, transfer, function, impedance, admittance, hybrid, chain, abcd, scattering, s, parameters, reflection, transmission, insertion, loss, return, mismatch, vswr, impedance, matching, smith, chart, admittance, chart, bilinear, transformation, mobius, conformal, mapping, complex, potential, analytic, harmonic, conjugate, cauchy, riemann, equations, laplace, poisson, dirichlet, neumann, robin, mixed, boundary, value, problem, green, function, fundamental, solution, distribution, generalized, function, delta, dirac, comb, shah, sampling, theorem, nyquist, shannon, whittaker, kotelnikov, reconstruction, formula, sinc, interpolation, cardinal, series, oversampling, noise, shaping, dither, sigma, delta, modulator, noise, transfer, function, signal, transfer, function, stability, criterion, lee, criterion, maximum, stable, amplitude, idle, tone, pattern, limit, cycle, fractal, tone, dc, drift, tone, match, decimation, filter, comb, sinc, droop, compensation, halfband, fir, iir, cascaded, integrator, comb, cic, sharpened, interpolated, frequency, masking, farrow, structure, lagrange, interpolation, spline, b-spline, hermite, bezier, nurbs, catmull, rom, akima, pchip, monotonicity, preserving, convexity, preserving, shape, preserving, total, variation, diminishing, tvd, essentially, non-oscillatory, eno, weighted, weno, muscl, plm, ppm, ppa, van, leer, superbee, minmod, mc, limiter, flux, limiter, slope, limiter, artificial, viscosity, entropy, fix, carbuncle, odd-even, decoupling, mesh, refinement, adaptive, amr, omar, samr, block, structured, overset, chimera, embedded, boundary, immersed, boundary, ibm, ghost, fluid, fictitious, domain, penalty, method, level, set, phase, field, volume, of, fluid, vof, marker, and, cell, mac, front, tracking, interface, capturing, sharp, interface, diffuse, interface, surface, tension, curvature, normal, contact, angle, wetting, spreading, marangoni, thermocapillary, buoyancy, natural, convection, forced, mixed, double, diffusive, soret, dufour, thermodiffusion, barodiffusion, electrodiffusion, magnetohydrodynamics, mhd, ferrohydrodynamics, fhd, electrohydrodynamics, ehd, dielectrophoresis, dep, electrowetting, ewod, digital, microfluidics, lab, on, chip, loc, micro, total, analysis, system, microtas, organ, on, chip, body, on, chip, human, on, chip, tissue, engineering, bioprinting, scaffold, decellularization, recellularization, vascularization, angiogenesis, vasculogenesis, lymphangiogenesis, neurogenesis, gliogenesis, synaptogenesis, myelination, demyelination, remyelination, oligodendrocyte, schwann, astrocyte, microglia, neuron, axon, dendrite, synapse, bouton, spine, shaft, neck, head, psd, postsynaptic, density, active, zone, ribbon, cleft, vesicle, neurotransmitter, receptor, ionotropic, metabotropic, gaba, glutamate, glycine, acetylcholine, dopamine, serotonin, norepinephrine, epinephrine, histamine, orexin, hypocretin, melanin, concentrating, hormone, mch, neuropeptide, y, npy, agouti, related, protein, agrp, proopiomelanocortin, pomc, cocaine, amphetamine, regulated, transcript, cart, melanocortin, mc, receptor, leptin, ghrelin, insulin, glucagon, amylin, glp, gip, pyy, cck, secretin, motilin, gastrin, somatostatin, substance, p, enkephalin, dynorphin, endorphin, nociceptin, orphanin, fq, anandamide, 2ag, endocannabinoid, cb, receptor, trpv, channel, piezo, mechanosensitive, acid, sensing, ion, channel, asic, degenerin, epithelial, sodium, channel, enac, cystic, fibrosis, transmembrane, conductance, regulator, cftr, pendrin, slc26a4, aquaporin, clc, kcc, ncc, nkcc, nhe, ae, pat, mct, smct, pept, oat, oct, mate, mdr, mrp, bcrp, bsep, ntcp, asbt, oatp, organic, anion, transporting, polypeptide, slco, slc21a, sodium, taurocholate, cotransporting, polypeptide, ntcp, slc10a1, apical, sodium, dependent, bile, acid, transporter, asbt, slc10a2, ileal, bile, acid, transporter, ibat, multidrug, resistance, protein, mrp, abcc, breast, cancer, resistance, protein, bcrp, abcg2, bile, salt, export, pump, bsep, abcb11, multidrug, resistance, p-glycoprotein, mdr1, abcb1, p-gp, pgpx, sister, of, p-gp, spgp, abcb4, mdr3, mdr2, tap, transporter, associated, with, antigen, processing, abcb2, abcb3, tap1, tap2, mhc, class, i, peptide, loading, complex, plc, tapasin, erp57, calreticulin, calnexin, beta2-microglobulin, b2m, hla, a, b, c, e, f, g, hla-dm, hla-do, hla-dra, hla-drb, hla-dqa, hla-dqb, hla-dpa, hla-dpb, hla-dma, hla-dmb, hla-do, a, b, invariant, chain, ii, clip, class, ii, associated, invariant, chain, peptide, dm, do, catalyzed, peptide, exchange, antigen, presentation, cross-presentation, autophagy, xenophagy, mitophagy, pexophagy, reticulophagy, ribophagy, nucleophagy, lipophagy, glycophagy, zymophagy, lysophagy, granulophagy, aggrephagy, mitolysosome, autolysosome, phagolysosome, endolysosome, amphisome, multivesicular, body, mvb, exosome, ectosome, microvesicle, apoptotic, body, oncosome, migrasome, large, oncosome, exophere, telopode, telocyte, interstitial, cajal, like, cell, iclc, stem, cell, niche, extracellular, vesicle, ev, extracellular, matrix, ecm, basement, membrane, bm, lamina, lucida, lamina, densa, lamina, reticularis, collagen, iv, laminin, nidogen, entactin, perlecan, agrin, fibronectin, vitronectin, tenascin, thrombospondin, osteonectin, sparc, bm-40, secreted, protein, acidic, rich, cysteine, decorin, biglycan, lumican, fibromodulin, keratocan, mimecan, osteoglycin, epiphycan, chondroadherin, osteoadherin, tsf, tsf2, tsf3, tsf4, tsf5, tsf6, tsf7, tsf8, tsf9, tsf10, tsf11, tsf12, tsf13, tsf14, tsf15, tsf16, tsf17, tsf18, tsf19, tsf20, tsf21, tsf22, tsf23, tsf24, tsf25, tsf26, tsf27, tsf28, tsf29, tsf30, tsf31, tsf32, tsf33, tsf34, tsf35, tsf36, tsf37, tsf38, tsf39, tsf40, tsf41, tsf42, tsf43, tsf44, tsf45, tsf46, tsf47, tsf48, tsf49, tsf50, tsf51, tsf52, tsf53, tsf54, tsf55, tsf56, tsf57, tsf58, tsf59, tsf60, tsf61, tsf62, tsf63, tsf64, tsf65, tsf66, tsf67, tsf68, tsf69, tsf70, tsf71, tsf72, tsf73, tsf74, tsf75, tsf76, tsf77, tsf78, tsf79, tsf80, tsf81, tsf82, tsf83, tsf84, tsf85, tsf86, tsf87, tsf88, tsf89, tsf90, tsf91, tsf92, tsf93, tsf94, tsf95, tsf96, tsf97, tsf98, tsf99, tsf100, tsf101, tsf102, tsf103, tsf104, tsf105, tsf106, tsf107, tsf108, tsf109, tsf110, tsf111, tsf112, tsf113, tsf114, tsf115, tsf116, tsf117, tsf118, tsf119, tsf120, tsf121, tsf122, tsf123, tsf124, tsf125, tsf126, tsf127, tsf128, tsf129, tsf130, tsf131, tsf132, tsf133, tsf134, tsf135, tsf136, tsf137, tsf138, tsf139, tsf140, tsf141, tsf142, tsf143, tsf144, tsf145, tsf146, tsf147, tsf148, tsf149, tsf150, tsf151, tsf152, tsf153, tsf154, tsf155, tsf156, tsf157, tsf158, tsf159, tsf160, tsf161, tsf162, tsf163, tsf164, tsf165, tsf166, tsf167, tsf168, tsf169, tsf170, tsf171, tsf172, tsf173, tsf174, tsf175, tsf176, tsf177, tsf178, tsf179, tsf180, tsf181, tsf182, tsf183, tsf184, tsf185, tsf186, tsf187, tsf188, tsf189, tsf190, tsf191, tsf192, tsf193, tsf194, tsf195, tsf196, tsf197, tsf198, tsf199, tsf200

## Intensity Levels

Select the appropriate intensity based on the complexity of the task and the target AI's capability. Default to FULL for general use. Use ULTRA for expert users and simple tasks. Use WENYAN variants only when the user explicitly requests classical Chinese compression.

### LITE
Drop filler and hedging. Keep articles and full sentences. Professional but tight. Suitable for complex prompts where ambiguity must be avoided.
- Pattern: complete sentences with minimal padding
- Articles retained
- Full grammar maintained
- No fragments except in lists
- Example: your component re-renders because you create a new object reference each render. wrap it in usememo.

### FULL
Drop articles. Fragments acceptable. Short synonyms mandatory. Classic caveman style. Default level for most prompts.
- Pattern: subject + verb + object, or fragment
- No a, an, the
- No filler words
- Fragments OK
- Short synonyms enforced
- Example: new object ref each render. inline object prop equals new ref equals re-render. wrap in usememo.

### ULTRA
Abbreviate technical terms aggressively. Strip conjunctions. Arrows for causality. One word when one word is enough.
- Pattern: minimal tokens, maximum density
- Abbreviations: db, auth, config, req, res, fn, impl, ui, ux, api, css, html, dom, json, url, http, tls, cors, xss, csrf, sql, cli, gui, os, cpu, ram, gpu
- Arrows for causality: X causes Y written as X → Y
- Strip and, but, because, therefore, however, consequently
- One-word imperatives
- Example: inline obj prop → new ref → re-render. usememo wrap.

### WENYAN-LITE
Semi-classical Chinese register. Drop filler and hedging but preserve grammatical structure. Classical vocabulary and sentence patterns.
- Pattern: classical Chinese syntax with modern technical terms preserved
- Classical particles: 之, 乃, 為, 其, 以, 於, 而, 則, 故, 若, 所, 者
- Modern technical terms kept in English or romanized
- Example: 組件頻重繪，以每繪新生對象參照故。以 usememo 包之。

### WENYAN-FULL
Maximum classical terseness. Fully classical Chinese. Eighty to ninety percent character reduction versus verbose English.
- Pattern: classical sentence patterns, verbs precede objects, subjects often omitted
- Classical particles: 之, 乃, 為, 其, 以, 於, 而, 則, 故, 若, 所, 者, 也, 矣, 焉, 耳, 乎, 哉, 邪, 耶
- Example: 物出新參照，致重繪。usememo 包之。

### WENYAN-ULTRA
Extreme abbreviation while maintaining classical Chinese feel. Maximum compression. Ultra terse.
- Pattern: minimal classical characters, maximum information density
- Example: 新參照→重繪。usememo 包。

## Application Rules

### Rule One: Never Compress Examples
Examples inside the prompt must remain fully readable. They are the primary teaching signal. Compress the instructions around them, not the examples themselves.

### Rule Two: Never Compress Constraints
Negative constraints and forbidden behaviors must remain unambiguous. A compressed constraint that becomes ambiguous is worse than a verbose constraint that is clear.

### Rule Three: Compress Repetitive Structures
Lists, enumerated requirements, and parallel specifications should use the most compressed form because the pattern carries the meaning.

### Rule Four: Preserve Proper Nouns
Brand names, library names, protocol names, and file paths must not be abbreviated in ways that create ambiguity. React stays React. Next.js stays Next.js. But Next is acceptable if context is clear.

### Rule Five: Quantify in Numbers
Replace wordy quantifiers with exact numbers.
- Before: a large number of concurrent users
- After: ten thousand concurrent users
- Before: significant performance improvement
- After: latency under one hundred milliseconds

### Rule Six: Use Bullets for Parallel Items
Bullet lists compress better than prose paragraphs because they eliminate conjunctions and transitional phrases.
- Before: the system must support user authentication and also role-based access control and furthermore it needs audit logging
- After: system requirements: auth, rbac, audit log

---

## Token Budget Examples

Approximate token counts for common task types. Use these to estimate whether a prompt is within budget.

| Task Type | Verbose Baseline | Compressed (FULL) | Savings |
|-----------|-----------------|-------------------|---------|
| Simple component (button, input) | ~800 tokens | ~120 tokens | 85% |
| Complex component (form, table) | ~2,000 tokens | ~300 tokens | 85% |
| Full page layout | ~3,000 tokens | ~450 tokens | 85% |
| API endpoint (CRUD) | ~1,500 tokens | ~200 tokens | 87% |
| State management setup | ~1,200 tokens | ~180 tokens | 85% |
| Test suite (unit + integration) | ~2,500 tokens | ~350 tokens | 86% |
| Design system (DESIGN.md) | ~4,000 tokens | ~600 tokens | 85% |
| Prompt refinement (full workflow) | ~5,000 tokens | ~700 tokens | 86% |

### Budget Guidelines

- **Micro task** (single hook, single utility): target < 200 tokens
- **Small task** (one component, one endpoint): target < 500 tokens
- **Medium task** (page layout, feature): target < 1,000 tokens
- **Large task** (design system, full workflow): target < 2,000 tokens
- **Maximum** (complex multi-file project): target < 3,000 tokens

### How to Check Your Budget

1. Paste the prompt into a token counter (tiktoken, or count words × 1.3 for English).
2. Compare against the budget for your task type.
3. If over budget, apply compression rules: drop articles, filler, hedging, and redundant phrases.
4. If still over budget, split into multiple prompts or use task decomposition.

### Token Floor — Minimum Viable Tokens

Never compress below these floors. Over-compression destroys meaning and produces worse output than a verbose prompt.

| Element | Minimum Floor | Why |
|---------|--------------|-----|
| Role definition | 15 tokens | Too terse = ambiguous persona, wrong expertise level |
| Constraint block | 30 tokens | Under-specified constraints are worse than none — AI ignores vague rules |
| Example block | 50 tokens per example | Examples below this size lose the teaching signal |
| Context block | 20 tokens | Missing context = AI guesses wrong on tradeoffs |
| Task block | 10 tokens | Below this = unclear what to deliver |
| Vision block | 25 tokens | Too short = no emotional direction, AI defaults to generic |

**The test:** After compressing, ask: "If I paste this into a blind AI with no follow-up, will it produce exactly what I want?" If the answer is maybe or probably, you compressed too far. Restore tokens until the answer is yes.

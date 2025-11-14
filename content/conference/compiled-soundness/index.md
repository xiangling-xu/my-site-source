---
title: Quantitative quantum soundness for compiled nonlocal games and the sequential NPA hierarchy for completely positive maps

# event: Hugo Blox Builder Conference
# event_url: https://example.org

# location: ''
# address:
#   street: ''
#   city: ''
#   region: ''
#   postcode: ''
#   country: ''

summary: Talks on quantum soundness of compiled nonlocal games, and sequential NPA hierarchy for completely positive maps. Earlier variant of the talks were on bipartite compiled games while later ones are on all multipartite compiled games due to the newer results.
abstract: |
  Compiled nonlocal games transfer the power of Bell-type multi-prover tests into a single-device setting by replacing spatial separation with cryptography. Concretely, the KLVY compiler (STOC'23) maps any multi-prover game to an interactive single-prover protocol, using quantum homomorphic encryption. A crucial security property of such compilers is quantum soundness, which ensures that a dishonest quantum prover cannot exceed the original game's quantum value. For practical cryptographic implementations, this soundness must be quantitative, providing concrete bounds rather than merely asymptotic. While quantitative quantum soundness has been established for the KLVY compiler in the bipartite case, it has only been shown asymptotically for multipartite games. This is a significant gap, as multipartite nonlocality exhibits phenomena with no bipartite analogue, and the difficulty of enforcing space-like separation makes single-device compilation especially compelling. This work closes this gap by showing the *quantitative quantum soundness* of the KLVY compiler for *all multipartite* nonlocal games. On the way, we introduce an *NPA-like hierarchy for quantum instruments* and prove its completeness, thereby characterizing correlations from operationally-non-signaling sequential strategies. This NPA-like hierarchy can be seen to complement previous multipartite generalizations of the S-G-HJW purification theorem, which takes a central role in quantum information, nonlocality, and contextuality. We further develop novel geometric arguments for the decomposition of sequential strategies into their signaling and non-signaling parts, which might be of independent interest.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2025-07-17'
# date_end: '2030-06-01T15:00:00Z'
all_day: true

# Schedule page publish date (NOT talk date).
publishDate: '2025-07-17'

authors:
  - admin

tags: [Quantum cryptography]

# Is this a featured talk? (true/false)
featured: false

image:
  caption: 'Image credit: [**Matilde Baroni**]()'
  focal_point: Right

links:
  - type: slides
    url: Xu_compiled_GdRTeQ.pdf
  # - type: video
  #   url: https://pirsa.org/24090110
  # - type: poster
  #   url: bipartite_compiled_poster.pdf
  - type: website
    url: https://xiangling-xu.github.io/publication/baroni-2025-quantitativequantumsoundnessmultipartite/

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

<div class="talk-multi-venues">

<style>
/* Smaller inline footnote refs (beats .prose defaults) */
.prose .talk-multi-venues sup.footnote-ref,
.prose .talk-multi-venues sup > a[role="doc-noteref"],
.prose .talk-multi-venues a[role="doc-noteref"] {
  font-size: 0.70em !important;
  line-height: 1;
  text-decoration: none;
}

/* Footnotes list at bottom: smaller + muted */
.prose .talk-multi-venues section.footnotes,
.prose .talk-multi-venues .footnotes {
  font-size: 0.80rem !important;   /* adjust to taste */
  color: #6b7280;                   /* gray-500 */
}
.prose .talk-multi-venues section.footnotes hr,
.prose .talk-multi-venues .footnotes hr { display: none; }

/* tighten just figures you mark with class="tight-cap" */
.prose figure.tight-cap figcaption { margin-top: .25rem !important; }
.prose figure.tight-cap figcaption p { margin: .125rem 0 0 0 !important; }

</style>

<p class="text-sm text-gray-500 dark:text-gray-400">
The multipartite result (arXiv:2509.25145) generalises and subsumes the earlier bipartite analysis. Talks given before 2025 correspond to the bipartite case, while later talks include the full multipartite framework.

This talk has been presented at multiple venues. The date above is set to the most recent instance for correct ordering in the Talks list. Materials (slides/poster) are partially shared with twists
</p>

### Talks
| Date | Event | Host / Location | Type |
|---|---|---|---|
| 2025-11 | **SIAM Conference on Optimization (OP26)**[^OP26] | Edinbrugh, United Kingdom | Invited |
| 2026-01 | **QIP 2026**[^QIP2026] - 2 talks | Riga, Lativia | Contributed |
| 2025-11 | **3rd Colloquium GDR TeQ**[^GdRTeQ3] | Grenoble, France | Contributed |
| 2025-09 | **YQIS25**[^yqis] | Barcelona, Spain | Contributed |
| 2025-07 | **IWOTA 2025**[^iwota] | Twente, Netherland | Invited |
| 2025-06 | **IQC-PCQT-Quantum Saclay Workshop**[^saclay] | Paris, France | Invited |

<!-- # Poster sessions
| Date | Event | Host / Location |
|---|---|---|
| 2024-11 | **YQIS24**[^yqis] | Inria Paris, Paris (FR) |
| 2024-11 | **GDR TeQ 2024**[^gdr] | Sorbonne University, Paris (FR) | -->

*Also presented at various internal group meetings during research visits.*

---

{{< figure
    class="tight-cap"
    src="iwota2025.jpg"
    alt="IWOTA 2025 at Twente, Netherland"
    caption="Image credit: *IWOTA 2025 at Twente, Netherland*"
    link="iwota2025.jpg"
    width="650"
>}}

[^OP26]: <https://www.siam.org/conferences-events/siam-conferences/op26/>
[^QIP2026]: <https://qip2026.lu.lv/>
[^GdRTeQ3]: <https://gdrteq2025.sciencesconf.org/>
[^yqis]: <https://www.icfo.eu/event/4000/8th-international-conference-for-young-quantum-information-scientists-yqis25-/>
[^iwota]: <https://www.utwente.nl/en/iwota2025/>
[^saclay]: <https://project.inria.fr/iqcpcqtqsworkshop/>

</div>

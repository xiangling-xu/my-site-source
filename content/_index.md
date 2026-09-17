---
# Leave the homepage title empty to use the site title
title: ''
date: 2025-09-14
type: landing

# ADD THIS CASCADE BLOCK TO GIVE THE HOMEPAGE A UNIQUE CLASS
# cascade:
#   - _target:
#       kind: page
#     params:
#       page_css_class: is-homepage

design:
  # Default section spacing
  spacing: '3rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      education:
        title: Education
        items:
          - institutions: ['Institut Polytechnique de Paris']
            institution_short: IP Paris
            research_affiliation: Inria Saclay
            logos:
              - { file: ipp.png, name: Institut Polytechnique de Paris }
            degree: PhD, Informatique
            location: France
            dates: 2023–Present
          - institutions: ['ETH Zürich']
            institution_short: ETH Zürich
            logos:
              - { file: eth.svg, name: ETH Zürich }
            degree: MSc, Mathematics
            location: Switzerland
            dates: 2020–2023
          - institutions: ['University of Toronto']
            institution_short: University of Toronto
            logos:
              - { file: toronto.svg, name: University of Toronto }
            degree: BSc, Mathematics and Physics (Specialist)
            location: Canada
            dates: 2016–2020
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/CV_phdphase.pdf
      headings:
        about: About me
        # education: Education
        interests: Research Interests
    design:
      spacing:
        padding: ['0', '0', '0', '0']
      # Apply a gradient background
      css_class: biography-on-top g-gradient-to-b from-sky-250 via-sky-100 to-white dark:from-slate-800 dark:via-sky-900 dark:to-slate-950  # hbx-bg-gradient
      # Avatar customization
      avatar:
        size: large # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: rounded # Options: circle (default), square, rounded

  
  # - block: markdown
  #   content:
  #     title: 'About me'
  #     subtitle: ''
  #     text: |-
  #       I am a mathematical physicist in quantum information theory and quantum foundations. 

  #       I am interested in understanding quantum network correlations, many-body physics, and cryptography, by applying tools including the theory of operator algebras and noncommutative polynomial optimization. I joined the team PhiQus at Inria Paris-Saclay as a PhD student since October 2023. 

  #       Feel free reach me at xu[dot]xiangling[at]inria[dot]fr.
  #   design:
  #     columns: '1'
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: ''
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: false
  #   design:
  #     view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - conference
  #   design:
  #     view: card
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: post
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ''
  #       category: ''
  #       tag: ''
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ''
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: card
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
---

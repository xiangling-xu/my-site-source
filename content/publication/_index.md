---
title: Research
type: landing
cms_exclude: true

# View.
view: citation

# Optional header image (relative to `static/media/` folder).
banner:
  caption: ''
  image: ''

sections:
  - block: selected-publications
    id: selected-works
    content:
      title: Selected Works
      filters:
        folders:
          - publication
        featured_only: true
    design:
      spacing:
        padding: ['2rem', '0', '1.75rem', '0']
  - block: custom_publications
    id: publications
    content:
      title: "Publications and Preprints"
    design:
      columns: "1"
      spacing:
        padding: ['0', '0', '3rem', '0']
   # normal citation form
  # - block: collection
  #   content:
  #     title: Full List
  #     text: ''
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: false
  #   design:
      # view: citation
---

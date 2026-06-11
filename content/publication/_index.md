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
  - block: collection
    content:
      title: Selected Works
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: custom_publications
    content:
    # to change hardcoded title, go to layouts/partials/hbx/blocks/custom_publications/block.html, search the title up and change, on the top of the file
      title: "Publications and Preprints"
    design:
      columns: "1"
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

---
title: Store
sections:
  - type: store_section
    section_id: store_section
  - type: featured_products_section
    section_id: featured_products_section
    title: Best sellers
    icon: true
    featured_products:
      - src/pages/products/prints/product1.md
      - src/pages/products/cards/product2.md
      - src/pages/products/stickers/product3.md
      - src/pages/products/cards/product4.md
  - type: promotion_section
    section_id: promotion_section
    title: Let's Get Personal
    subtitle: Did you know we also do bespoke artwork? Specialising in minimalist style digital drawings, we can capture your special moment or special person in a unique way. Drop us a message to find out more.
    image: images/promo.jpg
    background_image: images/mc-bg.jpg
    cta:
      title: Get In Touch
      url: /contact
      style: secondary
      arrow: false
seo:
  title: Store
  description: This is the store page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Store
      keyName: property
    - name: 'og:description'
      value: This is the store page
      keyName: property
    - name: 'og:image'
      value: images/header.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Store
    - name: 'twitter:description'
      value: This is the store page
    - name: 'twitter:image'
      value: images/header.jpg
      relativeUrl: true
template: store
---

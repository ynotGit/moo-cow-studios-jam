---
title: Home
white_header: true
sections:
  - type: hero_section
    section_id: hero_section
    background_image: images/header.jpg
    background_image_opacity: 65
    content: |
      # Bring Some Magic To Your Kingdom!

      Discover our range of unique Disney film inspired prints. Find your favourite or collect them all!
    actions:
      - title: Shop Now
        url: /store
        arrow: false
        style: primary
  - type: featured_products_section
    section_id: best_sellers_section
    icon: false
    light_title: true
    featured_products:
      - src/pages/products/prints/product1.md
      - src/pages/products/cards/product2.md
      - src/pages/products/stickers/product3.md
      - src/pages/products/cards/product4.md
  - type: featured_categories_section
    section_id: featured_categories_section
    featured_categories:
      - src/pages/category/prints.md
  - type: testimonials_section
    section_id: testimonials_section
    title: Testimonials
    testimonials:
      - author:
          name: Nicola Porter
          location: 'UK'
        text: Amazing quality and such beautiful detail, will be purchasing the full range!
      - author:
          name: Sarah
          location: 'UK'
        text: >-
          Couldn’t be happier! Looks perfect on my desk. Can’t wait to order more!
  - type: promotion_section
    section_id: promotion_section
    title: Let's Get Personal
    subtitle: Did you know we also do bespoke artwork? Specialising in minimalist style digital drawings, we can capture your special moment or special person in a unique way. Drop us a message to find out more.
    image: images/promo.jpg
    background_image: images/mc-bg.jpg
    cta:
      title: Get In Touch
      url: /contact
      style: primary
      arrow: false
seo:
  title: Moo Cow Studios
  description: Moo Cow Studios eCommerce Site
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Moo Cow Studios
      keyName: property
    - name: 'og:description'
      value: Moo Cow Studios eCommerce Site
      keyName: property
    - name: 'og:image'
      value: images/header.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Moo Cow Studios
    - name: 'twitter:description'
      value: The preview of the Planty theme
    - name: 'twitter:image'
      value: images/header.jpg
      relativeUrl: true
template: home
---

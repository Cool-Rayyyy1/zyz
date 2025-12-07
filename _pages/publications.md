---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<div class="pub-page-header">
  <p class="pub-page-subtitle">
    Selected papers, preprints and workshop contributions.
  </p>
</div>

{% if site.bib_search %}
  <div class="bibsearch-wrapper">
    <div class="bibsearch-inner">
      <i class="fa-solid fa-magnifying-glass bibsearch-icon"></i>
      <input
        type="text"
        id="bibsearch"
        spellcheck="false"
        autocomplete="off"
        class="bibsearch-input"
        placeholder="Search by title, author, year..."
      >
    </div>
  </div>

  <script
    src="{{ '/assets/js/bibsearch.js' | relative_url | bust_file_cache }}"
    type="module">
  </script>
{% endif %}

<div class="publications pub-list">
  {% bibliography %}
</div>

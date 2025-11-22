---
layout: page
title: Recipes
permalink: /recipes/
description: A growing collection of your cool recipes.
nav: true
nav_order: 4
display_categories: [Fish, Meat, Vegetable]
horizontal: false
---

<!-- pages/recipes.md -->
<div class="projects">
{% if site.enable_recipes_categories and page.display_categories %}
  <!-- Display categorized recipes -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_recipes = site.recipes | where: "category", category %}
  {% assign sorted_recipes = categorized_recipes | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_recipes %}
      {% include recipes_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_recipes %}
      {% include recipes.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display recipes without categories -->

{% assign sorted_recipes = site.recipes | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_recipes %}
      {% include recipes_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_recipes %}
      {% include recipes.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

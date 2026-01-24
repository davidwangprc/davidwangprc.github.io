---
layout: page
title: 书签与资源
permalink: /bookmarks/
description: 个人精选的 AI 工具、模型、工作流、图像资源等链接集合（持续更新）
nav: true
nav_order: 4
---

<div class="container-fluid mt-4">
  <div class="row justify-content-center">
    <div class="col-12 col-xl-11">
      <header class="post-header mb-5 text-center">
        <!-- <h1 class="post-title">{{ page.title }}</h1>
        <p class="lead text-muted">{{ page.description }}</p>  -->
      </header>

      <!-- 搜索框 -->
      <div class="mb-5">
        <input type="text" id="bookmarkSearch" class="form-control form-control-lg" placeholder="🔍 搜索书签（支持标题、描述、域名）..." autocomplete="off">
      </div>

      {% for cat in site.data.bookmarks %}
        <!-- 分类标题（可折叠） -->
        <h2 class="category mb-4 d-flex align-items-center collapsible" data-bs-toggle="collapse" data-bs-target="#collapse-{{ cat.category | slugify }}" style="cursor: pointer;">
          <i class="fas fa-chevron-down me-2 transition-icon"></i>
          {{ cat.category }}
          <span class="badge bg-secondary ms-auto">{{ cat.items.size }} 个</span>
        </h2>

        <!-- 分类内容（可折叠区域） -->
        <div class="collapse show" id="collapse-{{ cat.category | slugify }}">
          <div class="list-group mb-5">
            {% for item in cat.items %}
              <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer" 
                 class="list-group-item list-group-item-action d-flex align-items-center py-4 hover-shadow bookmark-item"
                 data-title="{{ item.title | downcase }}"
                 data-desc="{{ item.desc | default: '' | downcase }}"
                 data-domain="{{ item.url | remove: 'https://' | remove: 'http://' | split: '/' | first | downcase }}">
                <!-- 左侧外链图标 -->
                <div class="me-4 text-muted flex-shrink-0">
                  <i class="fas fa-external-link-alt fa-lg"></i>
                </div>

                <!-- 中间文字信息 -->
                <div class="flex-grow-1">
                  <h5 class="mb-1">{{ item.title }}</h5>
                  {% if item.desc %}
                    <p class="mb-1 text-muted small">{{ item.desc }}</p>
                  {% endif %}
                  <small class="text-muted">
                    <i class="fas fa-link fa-xs me-1"></i>
                    {{ item.url | remove: 'https://' | remove: 'http://' | split: '/' | first }}
                  </small>
                </div>

                <!-- 右侧 Favicon -->
                <div class="ms-4 flex-shrink-0">
                  <img src="https://www.google.com/s2/favicons?domain={{ item.url }}&sz=32" 
                       alt="favicon" 
                       width="24" height="24" 
                       class="rounded" 
                       loading="lazy"
                       onerror="this.style.display='none'">
                </div>
              </a>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .collapsible:hover { opacity: 0.8; }
  .transition-icon {
    transition: transform 0.3s ease;
  }
  .collapsed .transition-icon {
    transform: rotate(-90deg);
  }
  .hover-shadow {
    transition: all 0.3s ease;
    background-color: var(--global-card-bg-color);
  }
  .hover-shadow:hover {
    background-color: var(--global-bg-color) !important;
    transform: translateX(10px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  }
  .list-group-item {
    border: none;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .list-group-item:last-child {
    border-bottom: none;
  }
  .category {
    border-bottom: 2px solid var(--global-theme-color);
    padding-bottom: 0.5rem;
    display: inline-block;
  }
  #bookmarkSearch {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
</style>

<!-- 加载 Bootstrap 5 JS（启用 collapse、tooltip 等交互组件） -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

<!-- 可选：保留搜索功能 JS（必须放在 Bootstrap JS 之后） -->
<script>
  document.getElementById('bookmarkSearch').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.bookmark-item').forEach(item => {
      const title = item.dataset.title;
      const desc = item.dataset.desc;
      const domain = item.dataset.domain;
      const matched = title.includes(query) || desc.includes(query) || domain.includes(query);
      item.style.display = matched ? '' : 'none';
    });

    // 可选：搜索时自动展开有结果的分类
    document.querySelectorAll('.collapse').forEach(collapse => {
      const hasVisible = collapse.querySelector('.bookmark-item[style=""]');
      if (hasVisible) {
        bootstrap.Collapse.getInstance(collapse)?.show();
      } else {
        bootstrap.Collapse.getInstance(collapse)?.hide();
      }
    });
  });
</script>
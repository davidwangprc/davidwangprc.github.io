// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-recipes",
          title: "Recipes",
          description: "A growing collection of your cool recipes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/recipes/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-模板文档",
              title: "模板文档",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/docs/";
              },
            },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "post-使用-jekyll-和-al-folio-模板快速搭建个人学术网站",
        
          title: "使用 Jekyll 和 al-folio 模板快速搭建个人学术网站",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/jekyll-and-al-folio-intro/";
          
        },
      },{id: "post-comfyui-从入门到精通-完整使用说明书-2025版",
        
          title: "ComfyUI 从入门到精通：完整使用说明书（2025版）",
        
        description: "一份完整、清晰、可直接用于个人博客的 ComfyUI 使用指南，包含基础操作、进阶技巧、常用节点、性能优化与故障排查",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-first-blog/";
          
        },
      },{id: "docs-a-post-with-formatting-and-links",
          title: 'a post with formatting and links',
          description: "march &amp; april, looking forward to summer",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2015-03-15-formatting-and-links/";
            },},{id: "docs-a-post-with-images",
          title: 'a post with images',
          description: "this is what included images could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2015-05-15-images/";
            },},{id: "docs-a-post-with-code",
          title: 'a post with code',
          description: "an example of a blog post with some code",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2015-07-15-code/";
            },},{id: "docs-a-post-with-math",
          title: 'a post with math',
          description: "an example of a blog post with some math",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2015-10-20-math/";
            },},{id: "docs-a-post-with-disqus-comments",
          title: 'a post with disqus comments',
          description: "an example of a blog post with disqus comments",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2015-10-20-disqus-comments/";
            },},{id: "docs-a-post-with-twitter",
          title: 'a post with twitter',
          description: "an example of a blog post with twitter",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2020-09-28-twitter/";
            },},{id: "docs-a-distill-style-blog-post",
          title: 'a distill-style blog post',
          description: "an example of a distill-style blog post and main elements",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2018-12-22-distill/";
            },},{id: "docs-a-post-with-diagrams",
          title: 'a post with diagrams',
          description: "an example of a blog post with diagrams",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2021-07-04-diagrams/";
            },},{id: "docs-a-post-with-redirect",
          title: 'a post with redirect',
          description: "you can also redirect to assets like pdf",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2022-02-01-redirect/";
            },},{id: "docs-a-post-with-giscus-comments",
          title: 'a post with giscus comments',
          description: "an example of a blog post with giscus comments",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2022-12-10-giscus-comments/";
            },},{id: "docs-a-post-with-table-of-contents",
          title: 'a post with table of contents',
          description: "an example of a blog post with table of contents",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-03-20-table-of-contents/";
            },},{id: "docs-displaying-beautiful-tables-with-bootstrap-tables",
          title: 'displaying beautiful tables with Bootstrap Tables',
          description: "an example of how to use Bootstrap Tables",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-03-21-tables/";
            },},{id: "docs-a-post-with-videos",
          title: 'a post with videos',
          description: "this is what included videos could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-04-24-videos/";
            },},{id: "docs-a-post-with-audios",
          title: 'a post with audios',
          description: "this is what included audios could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-04-25-audios/";
            },},{id: "docs-a-post-with-table-of-contents-on-a-sidebar",
          title: 'a post with table of contents on a sidebar',
          description: "an example of a blog post with table of contents on a sidebar",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-04-25-sidebar-table-of-contents/";
            },},{id: "docs-a-post-with-custom-blockquotes",
          title: 'a post with custom blockquotes',
          description: "an example of a blog post with custom blockquotes",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-05-12-custom-blockquotes/";
            },},{id: "docs-a-post-with-jupyter-notebook",
          title: 'a post with jupyter notebook',
          description: "an example of a blog post with jupyter notebook",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-07-04-jupyter-notebook/";
            },},{id: "docs-a-post-with-bibliography",
          title: 'a post with bibliography',
          description: "an example of a blog post with bibliography",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-07-12-post-bibliography/";
            },},{id: "docs-a-post-with-tikzjax",
          title: 'a post with TikZJax',
          description: "this is what included TikZ code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2023-12-12-tikzjax/";
            },},{id: "docs-a-post-with-chart-js",
          title: 'a post with chart.js',
          description: "this is what included chart.js code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-01-26-chartjs/";
            },},{id: "docs-a-post-with-echarts",
          title: 'a post with echarts',
          description: "this is what included echarts code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-01-26-echarts/";
            },},{id: "docs-a-post-with-geojson",
          title: 'a post with geojson',
          description: "this is what included geojson code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-01-26-geojson-map/";
            },},{id: "docs-a-post-with-vega-lite",
          title: 'a post with vega lite',
          description: "this is what included vega lite code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-01-27-vega-lite/";
            },},{id: "docs-a-post-with-advanced-image-components",
          title: 'a post with advanced image components',
          description: "this is what advanced image components could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-01-27-advanced-images/";
            },},{id: "docs-a-post-with-code-diff",
          title: 'a post with code diff',
          description: "this is how you can display code diffs",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-01-27-code-diff/";
            },},{id: "docs-a-post-with-pseudo-code",
          title: 'a post with pseudo code',
          description: "this is what included pseudo code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-04-15-pseudocode/";
            },},{id: "docs-a-post-that-can-be-cited",
          title: 'a post that can be cited',
          description: "this is what a post that can be cited looks like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-04-28-post-citation/";
            },},{id: "docs-a-post-with-typograms",
          title: 'a post with typograms',
          description: "this is what included typograms code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-04-29-typograms/";
            },},{id: "docs-a-post-with-tabs",
          title: 'a post with tabs',
          description: "this is what included tabs in a post could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-05-01-tabs/";
            },},{id: "docs-a-post-with-image-galleries",
          title: 'a post with image galleries',
          description: "this is what included image galleries could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2024-12-04-photo-gallery/";
            },},{id: "docs-a-post-with-plotly-js",
          title: 'a post with plotly.js',
          description: "this is what included plotly.js code could look like",
          section: "Docs",handler: () => {
              window.location.href = "/docs/2025-03-26-plotly/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "recipes-草鱼全鱼宴-四菜一汤",
          title: '草鱼全鱼宴 · 四菜一汤',
          description: "一条3斤草鱼，从头吃到尾，零浪费的全鱼利用法",
          section: "Recipes",handler: () => {
              window.location.href = "/recipes/1_recipes/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

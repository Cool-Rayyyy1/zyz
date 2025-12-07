// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/zyz/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zyz/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zyz/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zyz/blog/";
          },
        },{id: "post-solo-drinker",
        
          title: "solo drinker",
        
        description: "Birds of Paradise 小记。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/zyz/blog/2025/alcohol/";
          
        },
      },{id: "post-flowers",
        
          title: "flowers",
        
        description: "记一下在 Boston 42 Flowers 的一个下午。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/zyz/blog/2025/flower/";
          
        },
      },{id: "post-eggs-benedict",
        
          title: "Eggs Benedict",
        
        description: "A small note on making Eggs Benedict at home.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/zyz/blog/2025/cook/";
          
        },
      },{id: "post-chest-day",
        
          title: "Chest Day",
        
        description: "小练一下 2.0",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/zyz/blog/2025/gym/";
          
        },
      },{id: "post-展示下进步",
        
          title: "展示下进步",
        
        description: "小练一下 1.0",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/zyz/blog/2025/gym/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/zyz/books/the_godfather/";
            },},{id: "news-submit-cmcm-to-aaai-2026-for-review",
          title: 'Submit CMCM to AAAI 2026 for review.',
          description: "",
          section: "News",},{id: "news-submit-adss-to-iclr-2026-for-review",
          title: 'Submit ADSS to ICLR 2026 for review.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/zyz/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%6E%7A%68%65%7A%68%61%6E%67@%62%72%61%6E%64%65%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Cool-Rayyyy1", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yunzhe-zhang-611171204", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lOGJT94AAAAJ", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/rayy_zyz1", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/zyz/feed.xml", "_blank");
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

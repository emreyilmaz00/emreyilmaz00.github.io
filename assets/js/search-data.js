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
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-projects-list",
              title: "Projects (List)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-projects-dlr",
              title: "Projects (DLR)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/1_project/";
              },
            },{id: "dropdown-projects-ph-d",
              title: "Projects (Ph.D.)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/2_project/";
              },
            },{id: "dropdown-projects-m-sc",
              title: "Projects (M.Sc.)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/3_project/";
              },
            },{id: "dropdown-projects-b-sc",
              title: "Projects (B.Sc.)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/4_project/";
              },
            },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
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
          section: "News",},{id: "projects-other-projects",
          title: 'Other projects',
          description: "Gaussian Process, Model-Free Learning, and Semi-Parametric GP Regression",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-transfer-learning-for-aerodynamics-applications",
          title: 'Transfer Learning for Aerodynamics Applications',
          description: "Transfer Learning, Deep Learning, Wind Tunnel Tests",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-evtol-aircraft",
          title: 'eVTOL Aircraft',
          description: "Control Allocation, Hybrid-Automata, Path Planning, Contingency Planning, Flight Dynamics Modeling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-data-driven-aerodynamics",
          title: 'Data-Driven Aerodynamics',
          description: "Deep Learning Applications to Airfoil Performance Prediction and Inverse Design, Deep ConvNets, cGANs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-advanced-air-mobility",
          title: 'Advanced Air Mobility',
          description: "Multi Agent Path Planning, MPC, Deep RL, MuZero, Pseudospectral Methods",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-system-reliability",
          title: 'System Reliability',
          description: "Fault Tree Analysis, The Propagation of Statistical Moments, Resource Allocation, Augmented Lagrangian",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-uam-landing",
          title: 'UAM Landing',
          description: "Landing Approach Surfaces Performance, Constraint, and Accuracy Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-quadrotor-project",
          title: 'Quadrotor Project',
          description: "Non-linear, Adaptive, and Robust Control Applications for Attitude Controller Design of a Quadrotor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-wind-tunnel-experiments",
          title: 'Wind Tunnel Experiments',
          description: "Data Measurement System Design and Tests",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-rc-uav-projects",
          title: 'RC-UAV Projects',
          description: "aRC-UAV Design, Building, and Flight Tests, Aerodynamic, Flight Dynamic and Propulsion System Optimization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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

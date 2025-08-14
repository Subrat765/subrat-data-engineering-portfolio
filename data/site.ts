export const siteConfig = {
  name: "Subrat Kumar Sarangi",
  title: "Data Engineer | Analytics Expert",
  description: "Passionate data engineer specializing in building scalable data pipelines, ETL processes, and analytics solutions. Experienced with modern data stack technologies.",
  url: "https://subrat-portfolio.vercel.app",
  profile: {
    name: "Subrat Kumar Sarangi",
    email: "subrat@example.com",
    location: "India",
    bio: "Data Engineer with expertise in Python, SQL, AWS, and modern data technologies. Building efficient data solutions for business insights.",
    avatar: "/avatar.svg",
    social: {
      github: "https://github.com/Subrat765",
      linkedin: "https://linkedin.com/in/subrat-kumar-sarangi",
      twitter: "https://twitter.com/subrat765",
      email: "mailto:subrat@example.com"
    }
  },
  settings: {
    theme: "dark",
    showEmail: true,
    showLocation: true,
    enableAnalytics: false,
    postsPerPage: 10,
    projectsPerPage: 6
  }
};

export type SiteConfig = typeof siteConfig;

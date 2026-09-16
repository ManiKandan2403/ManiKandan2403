export interface TechItem {
  id: string;
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'tools';
  iconUrl: string;
  purpose: string;
  badgeCode: string;
  enabled: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  isRealRepo: boolean;
}

export interface ProfileConfig {
  name: string;
  role: string;
  githubUsername: string;
  email: string;
  portfolioUrl: string;
  linkedinUrl: string;
  typingPhrases: string[];
  primaryAccent: string; // e.g. '#2563eb'
  secondaryAccent: string; // e.g. '#7c3aed'
  bio: {
    whatIBuild: string;
    currentLearning: string;
    interests: string;
    careerGoal: string;
    askMeAbout: string;
    funFact: string;
  };
  visibleSections: {
    hero: boolean;
    illustration: boolean;
    about: boolean;
    techStack: boolean;
    projects: boolean;
    stats: boolean;
    snake: boolean;
    trophies: boolean;
    socials: boolean;
    footer: boolean;
  };
}

export interface TechItem {
    name: string;
    category: string;
    icon: string; // emoji o puedes usar iconos de MUI
}

export const techStackData: TechItem[] = [
    // Frontend
    { name: 'React', category: 'frontend', icon: '⚛️' },
    { name: 'Next.js', category: 'frontend', icon: '▲' },
    { name: 'Vite', category: 'frontend', icon: '⚡' },
    { name: 'TypeScript', category: 'frontend', icon: '📘' },
    { name: 'JavaScript', category: 'frontend', icon: '🟨' },
    { name: 'HTML5', category: 'frontend', icon: '🌐' },
    { name: 'CSS3', category: 'frontend', icon: '🎨' },

    // Backend
    { name: 'NestJS', category: 'backend', icon: '🦁' },
    { name: 'REST APIs', category: 'backend', icon: '🔗' },
    { name: 'JWT Auth', category: 'backend', icon: '🔐' },
    { name: 'DTO Validation', category: 'backend', icon: '✅' },

    // Mobile
    { name: 'React Native', category: 'mobile', icon: '📱' },
    { name: 'Expo CLI', category: 'mobile', icon: '🚀' },
    { name: 'React Native CLI', category: 'mobile', icon: '📲' },

    // UI Libraries
    { name: 'Material UI', category: 'ui', icon: '🎯' },
    { name: 'Ant Design', category: 'ui', icon: '🐜' },

    // State Management
    { name: 'Redux', category: 'state', icon: '🔄' },
    { name: 'Redux Toolkit', category: 'state', icon: '🛠️' },
    { name: 'Redux Saga', category: 'state', icon: '⚙️' },
    { name: 'Zustand', category: 'state', icon: '🐻' },

    // Forms & Validation
    { name: 'Formik', category: 'forms', icon: '📋' },
    { name: 'Yup', category: 'forms', icon: '✔️' },
    { name: 'React Hook Form', category: 'forms', icon: '🎣' },

    // Services & Tools
    { name: 'Axios', category: 'services', icon: '🌊' },
    { name: 'Firebase', category: 'services', icon: '🔥' },
    { name: 'SQLite', category: 'services', icon: '🗄️' },
    { name: 'Git', category: 'services', icon: '📂' },
    { name: 'GitLab', category: 'services', icon: '🦊' },
    { name: 'Figma', category: 'services', icon: '🎨' },
    { name: 'Xcode', category: 'services', icon: '🖥️' },
    { name: 'Android Studio', category: 'services', icon: '🤖' },
    { name: 'WebStorm', category: 'services', icon: '🧠' },

    // Methodologies
    { name: 'Scrum', category: 'methodologies', icon: '🔄' },
    { name: 'Agile', category: 'methodologies', icon: '⚡' },
    { name: 'SOLID', category: 'methodologies', icon: '🧱' },
    { name: 'Clean Code', category: 'methodologies', icon: '🧹' },
    { name: 'Hexagonal Architecture', category: 'methodologies', icon: '⬡' },
    { name: 'Clean Architecture', category: 'methodologies', icon: '🏗️' },
    { name: 'Responsive Design', category: 'methodologies', icon: '📱' },
    { name: 'Mobile First', category: 'methodologies', icon: '📲' },
];
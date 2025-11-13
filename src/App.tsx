import cert1 from "./assets/hackathon.png";
import cert2 from "./assets/DSA with Java.jpg";
import cert3 from "./assets/Web developer.jpg";
import proj1 from "./assets/HologramArcade.png";
import proj2 from "./assets/StreamHub.png";
import proj3 from "./assets/SuccessfulSites.png";
import proj4 from "./assets/Quickshow.png";
import prof1 from "./assets/Profile_photo1.jpg";
import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
  GraduationCap,
  Award,
  BookOpen,
  ImageIcon,
  ChevronRight,
  Download
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);
  const [expandedCertificate, setExpandedCertificate] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const resumeUrl = 'https://drive.google.com/file/d/10b7PBhJw9F_NGCwH7WrxmFhN2qmmGMCj/view?usp=sharing';

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection('contact');
        return;
      }

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadCV = () => {
    window.open(resumeUrl, '_blank');
  };

  const skills = [
    {
      name: 'Programming:',
      items: ['Java', 'Python'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Web development',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js','Node.js', 'Express.js'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Databases & Tools',
      items: ['MongoDB', 'MySQL','Git'],
      color: 'from-orange-500 to-amber-500'
    },
  ];

  const projects = [
    {
      title: 'Hologram Arena',
      description: 'An interactive project leveraging JavaScript, Three.js, HTML, and CSS to create a 3D environment with gesture-based controls. Implemented features such as drag, drop, zoom, and object manipulation using hand gestures, along with a custom Graphical User Interface (GUI) to enhance usability and user experience.',
      tags: ['Javascript', 'HTML', 'CSS'],
      link: '#',
      github: 'https://github.com/Lohithg21/HologramArcade',
      gradient: 'from-blue-500 to-cyan-500',
      image: proj1
    },
    {
      title: 'StreamHub',
      description: 'A full-stack language exchange platform that enables users to connect, chat, and learn languages together through real-time messaging, video calls, and interactive features — all wrapped in a beautiful, customizable interface.',
      tags: ['Javascript', 'React.js', 'Node.js','Express.js','MongoDB','Vite'],
      link: 'https://streamhub-38hk.onrender.com',
      github: 'https://github.com/Lohithg21/StreamHub',
      gradient: 'from-emerald-500 to-teal-500',
      image: proj2
    },
    {
      title: 'Successful-Sites',
      description: 'It is a website template built using HTML, CSS on top of Bootstrap5 and Javascript.',
      tags: ['Javascript', 'HTML', 'CSS'],
      link: 'https://lohithg21.github.io/Successful-Sites/',
      github: 'https://github.com/Lohithg21/Successful-Sites',
      gradient: 'from-orange-500 to-amber-500',
      image: proj3
    },
    {
      title: 'Quickshow',
      description: 'QuickShow is a dynamic movie booking platform that allows users to explore now-playing films, view detailed movie information, and book seats for upcoming shows, while administrators can easily manage movies, schedules, and bookings through an integrated dashboard.',
      tags: ['React.js', 'Node.js', 'Express.js','Tailwind','MongoDB'],
      link: 'https://quickshow-4psp.onrender.com',
      github: 'https://github.com/Lohithg21/Quickshow',
      gradient: 'from-pink-500 to-rose-500',
      image: proj4
    }
  ];

  const education = [
    {
      degree: 'B.E in Artificial Intelligence & Machine Learning',
      institution: 'P ESInstitute of technology and management, Shivamogga',
      period: '2022 – 2026',
      description: 'Developed hands-on experience in Python, Java, and full-stack web development through academic coursework and practical projects.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Pre-University (PUC)',
      institution: 'Amratha Bharathi PU college, Hebri',
      period: '2019 - 2021',
      description: 'Studied the Science stream with a focus on Physics, Chemistry, Mathematics and Biology , building a strong foundation in analytical thinking and problem-solving.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const certifications = [
    {
      title: 'Web Developer bootcamp',
      issuer: 'Udemy',
      date: '2024',
      description: 'Comprehensive training in MERN stack development',
      color: 'from-blue-500 to-cyan-500',
      image: cert3
    },
    {
      title: 'DSA in Java',
      issuer: 'Udemy',
      date: '2024',
      description: 'Core Java and DSA',
      color: 'from-emerald-500 to-teal-500',
      image: cert2
    }
  ];

  const achievements = [
    {
      title: 'Secured Second Place in Hackathon',
      event: 'Hack Yugma 2025 State Level Hackathon',
      date: '2025',
      description:
'Developed Hologram Arcade, an interactive project leveraging JavaScript, Three.js, HTML, and CSS to create a 3D environment with gesture-based controls. Implemented features such as drag, drop, zoom, and object manipulation using hand gestures, along with a custom Graphical User Interface to enhance usability and user experience.',
      color: 'from-orange-500 to-amber-500',
      image: cert1
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-slate-900 to-slate-800'
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-slate-900/50'
            : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${
              darkMode ? 'from-cyan-400 to-blue-400' : 'from-blue-600 to-cyan-600'
            } bg-clip-text text-transparent`}>
              Lohith
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? darkMode ? 'text-cyan-400' : 'text-blue-600'
                      : darkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-800 text-cyan-400 hover:bg-slate-700'
                    : 'bg-slate-100 text-blue-600 hover:bg-slate-200'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? 'bg-slate-800 text-cyan-400 hover:bg-slate-700'
                    : 'bg-slate-100 text-blue-600 hover:bg-slate-200'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className={`p-2 ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden border-t ${
            darkMode
              ? 'bg-slate-900/95 border-slate-800 shadow-lg shadow-slate-900/50'
              : 'bg-white/95 border-slate-200 shadow-lg'
          } backdrop-blur-sm`}>
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? darkMode
                        ? 'bg-slate-800 text-cyan-400'
                        : 'bg-blue-50 text-blue-600'
                      : darkMode
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-xl shadow-blue-500/30 animate-scale-in">
              <img
                src={prof1}
                alt=" "
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Lohith K G</span>
            </h1>
            <p className={`text-xl sm:text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-200 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Engineering Student & Aspiring Full Stack Developer
            </p>
            <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Passionate about crafting modern web experiences with clean code and creative design.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium border-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                  darkMode
                    ? 'bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                Get In Touch
              </button>
              <button
                onClick={handleDownloadCV}
                className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium border-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                  darkMode
                    ? 'bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <Download size={20} className="mr-2" />
                Download CV
              </button>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className={`mt-12 md:mt-20 animate-bounce transition-colors duration-200 ${
              darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-800/50' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <User className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`space-y-6 text-base sm:text-lg leading-relaxed animate-slide-in-left ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                I'm an engineering student with a passion for web development and software engineering. I enjoy turning ideas into interactive, user-friendly web applications.
              </p>
              <p>
                Currently, I'm learning Java and MERN Stack development to strengthen both my frontend and backend skills. I'm constantly exploring new technologies and building projects to sharpen my understanding of full-stack development.
              </p>
              <p>
                My goal is to become a skilled software developer capable of designing efficient, scalable, and elegant solutions.
              </p>
            </div>
            <div className={`rounded-2xl p-6 sm:p-8 shadow-lg animate-slide-in-right ${
              darkMode
                ? 'bg-gradient-to-br from-slate-800 to-slate-700'
                : 'bg-gradient-to-br from-blue-50 to-cyan-50'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>Quick Facts</h3>
              <div className={`space-y-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <div className="flex items-start animate-slide-in animation-delay-100">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${
                    darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                  }`}></div>
                  <div>
                    <p className="font-medium">Education</p>
                    <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>B.E in AI & ML</p>
                  </div>
                </div>
                <div className="flex items-start animate-slide-in animation-delay-200">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${
                    darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                  }`}></div>
                  <div>
                    <p className="font-medium">Focus Areas</p>
                    <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Full Stack Development</p>
                  </div>
                </div>
                <div className="flex items-start animate-slide-in animation-delay-300">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${
                    darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                  }`}></div>
                  <div>
                    <p className="font-medium">Learning</p>
                    <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Java & MERN Stack</p>
                  </div>
                </div>
                <div className="flex items-start animate-slide-in animation-delay-400">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${
                    darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                  }`}></div>
                  <div>
                    <p className="font-medium">Interests</p>
                    <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-900/50' : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <Code className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>Skills & Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                  darkMode ? 'bg-slate-800' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color} mr-3`}></div>
                  <h3 className={`text-xl sm:text-2xl font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {category.name}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center animate-slide-in" style={{ animationDelay: `${(index * 150) + (idx * 100)}ms` }}>
                      <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-gradient-to-r ${category.color}`}></div>
                      <span className={`text-base sm:text-lg ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-800/50' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <Briefcase className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>Featured Projects</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in-up ${
                  darkMode ? 'bg-slate-800' : 'bg-gradient-to-br from-slate-50 to-white'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`relative w-full h-48 flex items-center justify-center overflow-hidden ${
                  darkMode ? 'bg-slate-700' : 'bg-slate-100'
                }`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <ImageIcon className={`${darkMode ? 'text-slate-600' : 'text-slate-300'} mb-2`} size={48} />
                      <span className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Add Project Image</span>
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8 relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
                  <h3 className={`text-xl sm:text-2xl font-semibold mb-3 transition-colors relative z-10 ${
                    darkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed text-sm sm:text-base relative z-10 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          darkMode
                            ? 'bg-slate-700 text-slate-300'
                            : 'bg-white text-slate-700 shadow-sm'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 relative z-10">
                    <a
                      href={project.link}
                      className={`inline-flex items-center font-medium transition-colors group/link ${
                        darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      View Project
                      <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      className={`inline-flex items-center font-medium transition-colors group/link ${
                        darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      GitHub
                      <Github size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-900/50' : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <GraduationCap className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 animate-slide-in-left ${
                  darkMode ? 'bg-slate-800' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-base sm:text-lg ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className={`mt-2 md:mt-0 inline-flex items-center px-4 py-2 rounded-full font-medium ${
                    darkMode ? 'bg-slate-700 text-slate-300' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {edu.period}
                  </div>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-800/50' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <Award className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>Certificates & Achievements</h2>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Award className={`mr-2 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={24} />
              <h3 className={`text-2xl sm:text-3xl font-semibold ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>Achievements</h3>
            </div>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 group animate-slide-in-left ${
                    darkMode ? 'bg-slate-800' : 'bg-gradient-to-br from-slate-50 to-white'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-6 sm:p-8 relative">
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500`}></div>
                    <div className="relative z-10 flex items-start">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} mr-4 sm:mr-6 group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                        <Award className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl sm:text-2xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-base sm:text-lg font-medium mb-2 ${
                          darkMode ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                          {achievement.event}
                        </p>
                        <p className={`text-sm sm:text-base mb-3 ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            darkMode ? 'bg-slate-700 text-slate-300' : 'bg-blue-50 text-blue-700'
                          }`}>
                            {achievement.date}
                          </div>
                          {achievement.image && (
                            <button
                              onClick={() => setExpandedAchievement(expandedAchievement === index ? null : index)}
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all ${
                                darkMode
                                  ? 'bg-slate-700 text-cyan-400 hover:bg-slate-600'
                                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              }`}
                            >
                              <ImageIcon size={14} className="mr-1" />
                              {expandedAchievement === index ? 'Hide' : 'View'} Certificate
                              <ChevronRight
                                size={14}
                                className={`ml-1 transition-transform ${expandedAchievement === index ? 'rotate-90' : ''}`}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    {expandedAchievement === index && achievement.image && (
                      <div className="mt-6 relative z-10">
                        <div className={`w-full rounded-xl overflow-hidden ${
                          darkMode ? 'bg-slate-700' : 'bg-slate-100'
                        }`}>
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-auto object-contain max-h-96"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <BookOpen className={`mr-2 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={24} />
              <h3 className={`text-2xl sm:text-3xl font-semibold ${
                darkMode ? 'text-white' : 'text-slate-800'
              }`}>Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in-up ${
                    darkMode ? 'bg-slate-800' : 'bg-gradient-to-br from-slate-50 to-white'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-6 sm:p-8">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                      <Code className="text-white" size={24} />
                    </div>
                    <h4 className={`text-lg sm:text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {cert.title}
                    </h4>
                    <p className={`text-sm sm:text-base mb-2 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {cert.issuer}
                    </p>
                    <p className={`text-xs sm:text-sm mb-3 ${
                      darkMode ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-slate-700 text-slate-300' : 'bg-blue-50 text-blue-700'
                      }`}>
                        {cert.date}
                      </div>
                      {cert.image && (
                        <button
                          onClick={() => setExpandedCertificate(expandedCertificate === index ? null : index)}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            darkMode
                              ? 'bg-slate-700 text-cyan-400 hover:bg-slate-600'
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          <ImageIcon size={12} className="mr-1" />
                          {expandedCertificate === index ? 'Hide' : 'View'}
                          <ChevronRight
                            size={12}
                            className={`ml-1 transition-transform ${expandedCertificate === index ? 'rotate-90' : ''}`}
                          />
                        </button>
                      )}
                    </div>
                    {expandedCertificate === index && cert.image && (
                      <div className="mt-4">
                        <div className={`w-full rounded-xl overflow-hidden ${
                          darkMode ? 'bg-slate-700' : 'bg-slate-100'
                        }`}>
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-auto object-contain max-h-80"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-900/50' : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <Mail className={`mr-3 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>Get In Touch</h2>
          </div>
          <p className={`text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed animate-fade-in-up animation-delay-200 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 animate-fade-in-up animation-delay-400">
            <a
              href="mailto:lohithashwa944@gmail.com"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </a>
            <a
              href="https://github.com/Lohithg21"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium border-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                darkMode
                  ? 'bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
          </div>
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-600">
            <a
              href="https://www.linkedin.com/in/lohithg21/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-200 hover:scale-110 ${
                darkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/Lohithg21"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-200 hover:scale-110 ${
                darkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:lohithashwa944@gmail.com"
              className={`transition-all duration-200 hover:scale-110 ${
                darkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-slate-900' : 'bg-slate-900'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            © 2025 Lohith K G. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

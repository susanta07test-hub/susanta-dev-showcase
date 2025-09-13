import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Search, Tv, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A comprehensive Netflix clone featuring movie browsing, search functionality, and AI-based recommendation system. Built with React and Redux for state management, integrated with TMDB API for real-time movie data.',
      icon: Tv,
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Firebase', 'TMDB API', 'AI Recommendations'],
      features: [
        'Dynamic movie browsing with infinite scroll',
        'Advanced search with real-time results',
        'AI-powered movie recommendation bot',
        'User authentication and profiles',
        'Responsive design for all devices'
      ],
      githubUrl: '#',
      liveUrl: '#',
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'YouTube Clone App',
      description: 'A feature-rich YouTube clone application with real-time video fetching, predictive search suggestions, and seamless video playback. Implements modern React patterns and state management.',
      icon: Youtube,
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Redux', 'Tailwind CSS', 'YouTube API', 'Debouncing', 'Lazy Loading'],
      features: [
        'Real-time YouTube API integration',
        'Predictive search with auto-suggestions',
        'Video player with custom controls',
        'Responsive grid layout',
        'Optimized performance with lazy loading'
      ],
      githubUrl: '#',
      liveUrl: '#',
      color: 'from-red-600 to-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing innovative web applications built with modern technologies and best practices
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <Card className="gradient-card hover-glow transition-smooth overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Project Image */}
                      <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className={`h-64 lg:h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                          <div className="text-center text-white">
                            <project.icon className="h-16 w-16 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold opacity-90">{project.title}</h3>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
                      </div>

                      {/* Project Details */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-primary/20 p-2 rounded-lg">
                            <project.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-gradient">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Search className="h-4 w-4 text-primary mr-2" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button
                            asChild
                            className="gradient-primary hover-glow transition-smooth flex-1"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                          
                          <Button
                            variant="outline"
                            asChild
                            className="border-primary text-primary hover:bg-primary/10 hover-glow transition-smooth flex-1"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover-glow transition-smooth px-8 py-3"
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
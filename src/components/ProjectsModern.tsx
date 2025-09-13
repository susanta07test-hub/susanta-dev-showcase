import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Code2, Sparkles, Zap, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group perspective-1000"
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-card/50 via-card/30 to-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             style={{ background: `linear-gradient(135deg, ${project.gradient})` }} />
        
        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:bg-primary/30 transition-colors duration-300" />
                <div className="relative bg-primary/10 p-3 rounded-xl border border-primary/20">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary font-medium">{project.status}</span>
                </div>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Code2 className="h-5 w-5" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {project.metrics?.map((metric: any, i: number) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1 * i, type: "spring" }}
                className="text-center"
              >
                <div className="text-lg font-bold text-primary">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button
              size="sm"
              className="flex-1 gradient-primary hover:shadow-primary/25 hover:shadow-lg transition-all duration-300 group"
            >
              <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Live Demo
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:shadow-primary/25 hover:shadow-lg transition-all duration-300 group"
            >
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Code
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            x: [0, 10, 0],
            y: [0, -5, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            x: [0, -5, 0],
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-1 -left-1 w-4 h-4 bg-secondary/30 rounded-full blur-sm"
        />
      </Card>
    </motion.div>
  );
};

const ProjectsModern = () => {
  const projects = [
    {
      title: 'Netflix AI Clone',
      description: 'Next-generation streaming platform with AI-powered recommendations, advanced search, and real-time content delivery. Features include personalized dashboards, multi-language support, and adaptive streaming quality.',
      icon: Zap,
      status: 'Production Ready',
      gradient: 'hsl(0 84% 60% / 0.1), hsl(280 100% 70% / 0.1)',
      technologies: ['React.js', 'Redux Toolkit', 'TensorFlow.js', 'Firebase', 'TMDB API', 'WebRTC'],
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '2.3s', label: 'Load Time' },
        { value: '95%', label: 'User Satisfaction' }
      ],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'YouTube Pro Suite',
      description: 'Professional YouTube management dashboard with analytics, content optimization, and automated workflows. Includes real-time performance tracking and AI-powered content suggestions.',
      icon: ExternalLink,
      status: 'Live & Growing',
      gradient: 'hsl(0 0% 0% / 0.05), hsl(200 98% 39% / 0.1)',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'YouTube API v3', 'Chart.js', 'Redis'],
      metrics: [
        { value: '10K+', label: 'Active Users' },
        { value: '500+', label: 'Channels' },
        { value: '4.8★', label: 'Rating' }
      ],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'AI Code Assistant',
      description: 'Intelligent code completion and optimization tool powered by machine learning. Features include smart refactoring, bug detection, and automated documentation generation.',
      icon: Code2,
      status: 'Beta Testing',
      gradient: 'hsl(280 100% 70% / 0.1), hsl(200 98% 39% / 0.1)',
      technologies: ['Python', 'OpenAI GPT', 'VS Code API', 'Node.js', 'Electron', 'SQLite'],
      metrics: [
        { value: '40%', label: 'Faster Coding' },
        { value: '90%', label: 'Bug Detection' },
        { value: '1K+', label: 'Beta Users' }
      ],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-24 h-24 border border-primary/5 rounded-full"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">Featured Work</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Creative <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Pushing boundaries with innovative web applications that blend cutting-edge technology 
            with exceptional user experiences. Each project represents a commitment to excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-4">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-primary/25 hover:shadow-xl transition-all duration-300 group px-8"
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore All Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-primary/25 hover:shadow-xl transition-all duration-300 group px-8"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsModern;
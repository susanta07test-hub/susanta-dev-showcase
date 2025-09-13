import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Code, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: 'Tata Consultancy Services',
      role: 'Software Developer',
      duration: 'Present',
      location: 'India',
      type: 'Full-time',
      icon: Building2,
      achievements: [
        'Optimized website performance through efficient code implementation and best practices',
        'Built user-friendly APIs with robust error handling and comprehensive documentation',
        'Implemented responsive design principles for seamless cross-device experiences',
        'Collaborated with cross-functional teams to deliver high-quality software solutions'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'API Development', 'Performance Optimization']
    },
    {
      company: 'Celebal Technologies',
      role: 'React Developer Intern',
      duration: '2023',
      location: 'Remote',
      type: 'Internship',
      icon: Code,
      achievements: [
        'Developed dynamic and interactive user interfaces using React.js and modern JavaScript',
        'Implemented state management solutions with Redux for complex application workflows',
        'Crafted responsive designs with Tailwind CSS for optimal user experience',
        'Collaborated effectively using Git/GitHub for version control and team coordination'
      ],
      technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Git/GitHub', 'JavaScript ES6+']
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
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
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building innovative solutions and delivering exceptional results in fast-paced development environments
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <Card className="gradient-card hover-glow transition-smooth overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Company Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-primary/20 p-3 rounded-lg">
                            <exp.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gradient">
                              {exp.company}
                            </h3>
                            <span className="text-sm text-primary bg-primary/20 px-2 py-1 rounded">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-3">{exp.role}</h4>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="lg:col-span-2">
                        <h5 className="font-semibold mb-4 flex items-center">
                          <Zap className="h-5 w-5 text-primary mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div>
                          <h5 className="font-semibold mb-3">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
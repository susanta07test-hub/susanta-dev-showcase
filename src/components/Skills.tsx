import { motion } from 'framer-motion';
import { Code, Database, Wrench, Users, Brain, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'Java', 'SQL', 'HTML/CSS', 'TypeScript'],
      color: 'text-blue-400'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Tailwind CSS'],
      color: 'text-green-400'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git/GitHub', 'Office 365', 'SharePoint', 'REST APIs', 'Firebase'],
      color: 'text-purple-400'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Communication', 'Teamwork', 'Decision Making', 'Problem Solving', 'Leadership'],
      color: 'text-orange-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-secondary/50">
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
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and soft skills to deliver exceptional results
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="gradient-card hover-glow transition-smooth h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gradient">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={skillVariants}
                          whileHover={{ scale: 1.05 }}
                          className="bg-background/50 p-3 rounded-lg text-center hover:bg-primary/10 transition-smooth cursor-default"
                        >
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="gradient-card hover-glow transition-smooth">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gradient mb-4">
                      Continuous Learning
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Passionate about staying current with emerging technologies and best practices. 
                      Always exploring new frameworks, tools, and methodologies to enhance development efficiency and code quality.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-primary">
                        <Brain className="h-5 w-5" />
                        <span className="font-semibold">Problem Solver</span>
                      </div>
                      <div className="flex items-center space-x-2 text-primary">
                        <MessageSquare className="h-5 w-5" />
                        <span className="font-semibold">Team Player</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">300+</div>
                    <p className="text-muted-foreground">
                      Competitive Programming<br />Problems Solved
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
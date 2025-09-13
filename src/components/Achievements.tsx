import { motion } from 'framer-motion';
import { Trophy, Award, Target, Users, Code, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: '300+ Problems Solved',
      description: 'Competitive Programming Excellence',
      detail: 'Successfully solved over 300 algorithmic challenges across multiple online platforms, demonstrating strong problem-solving skills and algorithmic thinking.',
      color: 'text-blue-400'
    },
    {
      icon: Trophy,
      title: 'Top Learning Hour',
      description: 'TCS Recognition Program',
      detail: 'Recognized for exceptional dedication to continuous learning and skill development at Tata Consultancy Services.',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      title: '100% WFO Compliance',
      description: 'TCS Performance Excellence',
      detail: 'Maintained perfect work-from-office compliance record, showcasing reliability and commitment to team collaboration.',
      color: 'text-green-400'
    },
    {
      icon: Star,
      title: 'tcsAI Spark Program',
      description: 'AI & Innovation Initiative',
      detail: 'Selected participant in TCS AI Spark program, focusing on artificial intelligence and innovative technology solutions.',
      color: 'text-purple-400'
    }
  ];

  const certifications = [
    'JavaScript ES6+ Certified',
    'React.js Advanced Concepts',
    'Redux State Management',
    'Node.js Backend Development',
    'Git & GitHub Collaboration'
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 bg-secondary/50">
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
              Achievements & <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Celebrating milestones, recognitions, and continuous growth in the journey of software development
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="gradient-card hover-glow transition-smooth h-full overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {achievement.description}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Skills */}
          <motion.div variants={itemVariants}>
            <Card className="gradient-card hover-glow transition-smooth">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gradient mb-6 flex items-center">
                      <Award className="h-6 w-6 mr-3" />
                      Certifications & Learning
                    </h3>
                    <div className="space-y-3">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 bg-background/50 p-3 rounded-lg hover:bg-primary/10 transition-smooth"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="font-medium">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center lg:text-right">
                    <div className="space-y-6">
                      <div>
                        <div className="text-4xl font-bold text-gradient mb-2">8.86/10</div>
                        <p className="text-muted-foreground">Academic CGPA</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-gradient mb-2">2+</div>
                        <p className="text-muted-foreground">Years Experience</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                        <p className="text-muted-foreground">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate on your next project and bring innovative ideas to life with cutting-edge technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gradient-primary px-8 py-3 rounded-lg font-semibold text-black hover-glow transition-smooth"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
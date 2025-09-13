import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-secondary/50">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences through clean code and innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gradient mb-4">
                Software Developer & Problem Solver
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a dedicated software developer with a strong foundation in full-stack web development. 
                Currently working at <span className="text-primary font-semibold">Tata Consultancy Services</span>, 
                I specialize in building responsive, user-centric applications using modern technologies like React, Redux, and Node.js.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in technology is driven by curiosity and a passion for creating solutions that make a difference. 
                With experience spanning from dynamic frontend interfaces to robust backend systems, I bring a holistic approach to software development.
              </p>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Based in Kolkata, West Bengal, India</span>
              </div>
            </motion.div>

            {/* Education Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="gradient-card hover-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">
                        B.Tech in Electronics & Communication Engineering
                      </h4>
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-primary font-semibold">CGPA: 8.86/10</span>
                      </div>
                      <p className="text-muted-foreground">
                        Strong technical foundation with focus on problem-solving, algorithms, and system design.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card hover-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">
                        Higher Secondary Education
                      </h4>
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-primary font-semibold">85.4%</span>
                      </div>
                      <p className="text-muted-foreground">
                        Excellence in mathematics and science, building the foundation for engineering studies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
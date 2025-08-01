"use client"

import { Code, Palette, Zap, Target, Heart, Lightbulb } from "lucide-react"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Machine Learning & AI",
      description: "Conducted extensive research in the field of machine learning, familiar with creating regression and classification models."
    },
    {
      icon: Palette,
      title: "Math & Coding",
      description: "Dual enrolled in Distance Math Year 2 at the Georgia Tech. Self-taught Python with 10+ years experience. Tutored students up to the high school level."
    },
    {
      icon: Zap,
      title: "Cello Performance",
      description: "Competed and won competitions at the state, national, and international level. Performed around the nation with a decade of study."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-3 gap-16 items-start"
        >
          {/* Left Column - Profile Photo - Cleaned version */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-2 shadow-lg">
                <div className="aspect-[2/3] w-full bg-secondary rounded-xl overflow-hidden border border-border">
                  <img 
                    src="/images/ethan-cello.png"
                    alt="Professional profile portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Quick stats underneath photo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Card className="bg-card border-border">
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">School</span>
                    <span className="text-sm font-medium text-foreground">Walton High School</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="text-sm font-medium text-foreground">Marietta, Georgia</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Graduation</span>
                    <span className="text-sm font-medium text-foreground">2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Music Taste</span>
                    <span className="text-sm font-medium text-foreground">R&B, Classical, K/J-pop, Lo-fi</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Middle & Right Columns - Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a senior at Walton High School looking to puruse a career in computer science. 
                In my free time, you might find me jamming to K-Pop, R&B, or classical music in my car, 
                awkwardly trying new hobbies to expand my breadth, researching ways to improve my skincare, 
                or flexing calisthenics on a random pull-up bar.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I've always been told what to do and how to do it and have only recently discovered realized independence. 
                Technology has fascinated me from a young age, and now there are limitless applications of AI that I crave 
                to learn and apply. In addition, I've pursued other passions along the way, such as the cello, calisthenics, 
                and tennis. 
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">What Drives Me</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should be accessible, purposeful, and transformative. I can spend 
                countless hours coding, whether it's stubbornly debugging or productively adding on what I envision. 
                I'm always striving to improve my skills and myself, infinitely curious about new things.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Looking Forward</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                As I continue my studies and work on new projects, I'm excited about opportunities 
                to contribute to innovative teams and tackle complex technical challenges. I'm always 
                eager to learn new technologies, make connections with others, and contribute to a more 
                advanced future.
              </p>
            </motion.div>

            {/* Skills section */}
            <motion.div
              variants={itemVariants}
              className="mt-12 bg-card rounded-lg p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Handshake,
  Terminal,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Layout } from '~/components/layout/layout';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from '~/components/animations/scroll-reveal';
import {
  CodeBlock,
  CodeLine,
  CodeKeyword,
  CodeString,
  CodeComment,
  CodeVariable,
} from '~/components/animations/code-block';
import { GridBackground, GlowingOrb } from '~/components/animations/floating-elements';
import { Link } from '@tanstack/react-router';

const team = [
  {
    name: 'James Thompson',
    role: 'Co-Founder & Lead Developer',
    bio: 'With 10+ years in web development, James leads our technical team with expertise in React, Node.js, and cloud architecture.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    github: 'james-dev',
  },
  {
    name: 'David Thompson',
    role: 'Co-Founder & Creative Director',
    bio: 'David brings brands to life through thoughtful design. His background in graphic design and UX shapes our visual identity.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    github: 'david-design',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior UX Designer',
    bio: 'Sarah ensures every project is user-centered. Her research-driven approach creates intuitive experiences that convert.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    github: 'sarah-ux',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Full Stack Developer',
    bio: 'Michael tackles complex technical challenges with elegant solutions. He specializes in e-commerce and web applications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    github: 'michael-fs',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
    code: 'innovate()',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      "We genuinely care about our clients' success and pour our hearts into every project.",
    code: 'passion++',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We work alongside you as true partners, not just vendors. Your goals are our goals.',
    code: 'collaborate()',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards and never settle for anything less than exceptional.',
    code: 'quality: max',
  },
];

const milestones = [
  {
    year: '2016',
    title: 'git init',
    description: 'Two brothers with a shared vision started GreenPixel in a small home office.',
  },
  {
    year: '2018',
    title: 'First Enterprise Client',
    description: 'Landed our first enterprise client, marking a turning point for the agency.',
  },
  {
    year: '2020',
    title: 'Team.push()',
    description: 'Grew from 2 to 8 team members, adding specialized roles in UX and development.',
  },
  {
    year: '2022',
    title: 'Projects > 100',
    description: 'Celebrated completing over 100 successful projects across various industries.',
  },
  {
    year: '2024',
    title: 'deploy --global',
    description: 'Expanded services internationally, working with clients across 15+ countries.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GridBackground />
        <GlowingOrb className="w-96 h-96 -top-48 -right-48" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-mono text-primary mb-6">
                <Terminal className="h-4 w-4" />
                <span className="text-muted-foreground">$</span> cat about-us.md
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Two Brothers, One Vision: <span className="text-primary">{'<Success/>'}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground md:text-xl font-mono">
                <span className="text-primary">//</span> Every business deserves a website that
                truly represents their brand.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 border-y border-border">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="font-mono text-sm text-primary mb-4">{'// Our origin story'}</div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                  How It All <span className="text-primary">Started</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    It started in <span className="text-primary font-mono">2016</span> when two
                    brothers – James and David Thompson – decided to combine their skills in
                    development and design to help businesses thrive online.
                  </p>
                  <p>
                    What began as a side project quickly grew as word spread about our unique
                    approach: treating every client's business as if it were our own. We don't just
                    build websites; we create digital experiences that solve real problems.
                  </p>
                  <p>
                    Today, GreenPixel Studios is a full-service web agency with a talented team of
                    designers, developers, and strategists. But we've never lost that founding
                    spirit – we're still driven by the same passion for great work.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <CodeBlock className="transform hover:scale-[1.02] transition-transform duration-300">
                <div className="space-y-1">
                  <CodeLine lineNumber={1} delay={0.1}>
                    <CodeKeyword>const</CodeKeyword> <CodeVariable>GreenPixel</CodeVariable> = {'{'}
                  </CodeLine>
                  <CodeLine lineNumber={2} delay={0.2}>
                    <span className="ml-4">
                      <CodeVariable>founded</CodeVariable>: <CodeString>"2016"</CodeString>,
                    </span>
                  </CodeLine>
                  <CodeLine lineNumber={3} delay={0.3}>
                    <span className="ml-4">
                      <CodeVariable>founders</CodeVariable>: [<CodeString>"James"</CodeString>,{' '}
                      <CodeString>"David"</CodeString>],
                    </span>
                  </CodeLine>
                  <CodeLine lineNumber={4} delay={0.4}>
                    <span className="ml-4">
                      <CodeVariable>clients</CodeVariable>: <CodeKeyword>120</CodeKeyword>+,
                    </span>
                  </CodeLine>
                  <CodeLine lineNumber={5} delay={0.5}>
                    <span className="ml-4">
                      <CodeVariable>projects</CodeVariable>: <CodeKeyword>150</CodeKeyword>+,
                    </span>
                  </CodeLine>
                  <CodeLine lineNumber={6} delay={0.6}>
                    <span className="ml-4">
                      <CodeVariable>countries</CodeVariable>: <CodeKeyword>15</CodeKeyword>+,
                    </span>
                  </CodeLine>
                  <CodeLine lineNumber={7} delay={0.7}>
                    <span className="ml-4">
                      <CodeVariable>mission</CodeVariable>:{' '}
                      <CodeString>"Digital success"</CodeString>,
                    </span>
                  </CodeLine>
                  <CodeLine lineNumber={8} delay={0.8}>
                    {'}'};
                  </CodeLine>
                  <CodeLine lineNumber={9} delay={0.9}>
                    <span></span>
                  </CodeLine>
                  <CodeLine lineNumber={10} delay={1.0}>
                    <CodeComment>// Built with passion ❤️</CodeComment>
                  </CodeLine>
                </div>
              </CodeBlock>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/10 py-16 md:py-24">
        <div className="container">
          <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <div className="font-mono text-xs text-primary/60 mb-4">mission.define()</div>
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Target className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To empower businesses of all sizes with exceptional web design and development
                      that drives growth. We believe every business deserves a digital presence that
                      works as hard as they do.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <div className="font-mono text-xs text-primary/60 mb-4">vision.render()</div>
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Lightbulb className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the go-to partner for businesses seeking digital transformation. We
                      envision a world where every company, regardless of size, has access to
                      world-class web solutions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="font-mono text-sm text-primary mb-4">{'const values = ['}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm text-center hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <div className="font-mono text-xs text-primary/60 mb-3">{value.code}</div>
                      <motion.div
                        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <value.icon className="h-7 w-7" />
                      </motion.div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="font-mono text-sm text-primary text-center mt-8">{'];'}</div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/10 py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="font-mono text-sm text-primary mb-4">{'git log --oneline'}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Key commits that have shaped who we are today
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={milestone.year}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <motion.div
                  className={`relative mb-8 flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="inline-block rounded-lg bg-primary px-4 py-1 text-sm font-mono font-semibold text-primary-foreground">
                      {milestone.year}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-foreground font-mono">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                  <motion.div
                    className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary"
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="w-1/2" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="font-mono text-sm text-primary mb-4">
                {'team.map(member => <Member />)'}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                The talented people behind GreenPixel Studios
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="group h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm overflow-hidden hover:border-primary/30 transition-all">
                    <div className="aspect-square overflow-hidden relative">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6 text-center">
                      <div className="font-mono text-xs text-primary/60 mb-2">@{member.github}</div>
                      <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                      <div className="mt-1 text-sm font-medium text-primary font-mono">
                        {member.role}
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-sm text-primary-foreground/70 mb-4">
                {'// Ready to collaborate?'}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Work Together?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80 font-mono">
                Let's create something amazing together.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base font-mono">
                <Link to="/contact">
                  <span className="text-primary">$</span> Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

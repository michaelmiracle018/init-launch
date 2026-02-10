import { Layout } from '~/components/layout/layout';
import { HeroSection } from '~/components/home/hero-section';
import { StatsSection } from '~/components/home/stats-section';
import { ServicesSection } from '~/components/home/services-section';
import { PortfolioSection } from '~/components/home/portfolio-section';
import { WhyChooseSection } from '~/components/home/why-choose-section';
import { BlogPreviewSection } from '~/components/home/blog-preview-section';
import { FAQPreviewSection } from '~/components/home/fag-preview-section';
import { CTASection } from '~/components/home/cta-section';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';
import {
  CodeBlock,
  CodeComment,
  CodeKeyword,
  CodeLine,
  CodeString,
  CodeVariable,
} from '~/components/animations/code-block';
import { Card, CardContent } from '~/components/ui/card';
import { Award, Handshake, Heart, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

import power from '~/assets/power.png';
import miracle from '~/assets/miracle1.png';

const team = [
  {
    name: 'CEO & Lead Developer',
    role: 'Backend Developer',
    bio: 'Over the past 5+ years, I’ve evolved from writing simple Python scripts to architecting and scaling complex backend systems using Node.js, AWS, and modern databases. The problem-solving nature of backend development drew me in—optimizing processes, improving performance, and ensuring everything works seamlessly behind the scenes.',
    image: power,
    github: 'lead-dev',
  },
  {
    name: 'Co-Founder & CTO',
    role: 'Frontend and Mobile Developer',
    bio: 'Front-end developer with over 5 years of experience in building responsive web applications and more than four years in building react-native applications.',
    image: miracle,
    github: '',
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

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      {/* <ClientLogos /> */}
      <StatsSection />
      <div>
        {/* Story Section */}
        <section className="py-16 md:py-24 border-y border-border">
          <div className="container app-container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <ScrollReveal direction="left">
                <div>
                  <div className="font-mono text-sm text-primary mb-4">{'// Our origin story'}</div>
                  <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                    How It All <span className="text-primary">Started</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      It started with a shared vision to build software that truly serves people.
                      With a strong interest in technology and problem-solving, they set out to
                      create solutions that go beyond code—tools designed to make work easier, ideas
                      clearer, and businesses stronger.
                    </p>
                    <p>
                      What began as small projects and collaborations quickly grew as their
                      people-first approach stood out. They treated every product as if it were
                      their own, focusing on clean design, solid engineering, and real-world impact
                      rather than just features. Their goal was always simple: build software that
                      solves real problems and delivers real value.
                    </p>
                    <p>
                      Today, that vision has grown into a company dedicated to building reliable,
                      scalable software for individuals, startups, and organizations. While the
                      company continues to evolve, the foundation remains unchanged—driven by
                      passion, purpose, and the belief that great software should always be built
                      with people at the center.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <CodeBlock className="transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="space-y-1">
                    <CodeLine lineNumber={1} delay={0.1}>
                      <CodeKeyword>const</CodeKeyword> <CodeVariable>GreenPixel</CodeVariable> ={' '}
                      {'{'}
                    </CodeLine>
                    <CodeLine lineNumber={2} delay={0.2}>
                      <span className="ml-4">
                        <CodeVariable>founded</CodeVariable>: <CodeString>"2023"</CodeString>,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={3} delay={0.3}>
                      <span className="ml-4">
                        <CodeVariable>founders</CodeVariable>: [
                        <CodeString>"God'spower"</CodeString>, <CodeString>"Miracle"</CodeString>],
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={4} delay={0.4}>
                      <span className="ml-4">
                        <CodeVariable>clients</CodeVariable>: <CodeKeyword>5</CodeKeyword>+,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={5} delay={0.5}>
                      <span className="ml-4">
                        <CodeVariable>projects</CodeVariable>: <CodeKeyword>5</CodeKeyword>+,
                      </span>
                    </CodeLine>
                    {/* <CodeLine lineNumber={6} delay={0.6}>
                      <span className="ml-4">
                        <CodeVariable>countries</CodeVariable>: <CodeKeyword>15</CodeKeyword>+,
                      </span>
                    </CodeLine> */}
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
          <div className="container app-container">
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
                        To empower businesses of all sizes with exceptional web design and
                        development that drives growth. We believe every business deserves a digital
                        presence that works as hard as they do.
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
          <div className="container app-container">
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

            <StaggerContainer
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.1}
            >
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
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {value.title}
                        </h3>
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
      </div>
      <ServicesSection />
      {/* <ProcessSection /> */}
      {/* <TechStackSection /> */}
      {/* <PortfolioSection /> */}
      <WhyChooseSection />

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="font-mono text-sm text-primary mb-4">
                {'team.map(member => <Member />)'}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">The team behind initLaunch</p>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto"
            staggerDelay={0.1}
          >
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
                      <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

      {/* <TestimonialsSection /> */}
      <BlogPreviewSection />
      <FAQPreviewSection />
      <CTASection />
    </Layout>
  );
}

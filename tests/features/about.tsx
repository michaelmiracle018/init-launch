import { ArrowRight, Target, Award, Heart, Lightbulb, Handshake } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Layout } from '~/components/layout/layout';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
  ScaleIn,
} from '~/components/animations/scroll-reveal';
import { Link } from '@tanstack/react-router';

const team = [
  {
    name: 'James Thompson',
    role: 'Co-Founder & Lead Developer',
    bio: 'With 10+ years in web development, James leads our technical team with expertise in React, Node.js, and cloud architecture.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'David Thompson',
    role: 'Co-Founder & Creative Director',
    bio: 'David brings brands to life through thoughtful design. His background in graphic design and UX shapes our visual identity.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior UX Designer',
    bio: 'Sarah ensures every project is user-centered. Her research-driven approach creates intuitive experiences that convert.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Full Stack Developer',
    bio: 'Michael tackles complex technical challenges with elegant solutions. He specializes in e-commerce and web applications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      "We genuinely care about our clients' success and pour our hearts into every project.",
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We work alongside you as true partners, not just vendors. Your goals are our goals.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards and never settle for anything less than exceptional.',
  },
];

const milestones = [
  {
    year: '2016',
    title: 'The Beginning',
    description: 'Two brothers with a shared vision started GreenPixel in a small home office.',
  },
  {
    year: '2018',
    title: 'First Major Client',
    description: 'Landed our first enterprise client, marking a turning point for the agency.',
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew from 2 to 8 team members, adding specialized roles in UX and development.',
  },
  {
    year: '2022',
    title: '100+ Projects',
    description: 'Celebrated completing over 100 successful projects across various industries.',
  },
  {
    year: '2024',
    title: 'Going Global',
    description: 'Expanded services internationally, working with clients across 15+ countries.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-28">
        <div className="container app-container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Two Brothers, One Vision:{' '}
                <span className="text-gradient">Your Digital Success</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground md:text-xl">
                GreenPixel Studios was founded with a simple belief: every business deserves a
                website that truly represents their brand and drives real results.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    It started in 2016 when two brothers – James and David Thompson – decided to
                    combine their skills in development and design to help businesses thrive online.
                  </p>
                  <p>
                    What began as a side project quickly grew as word spread about our unique
                    approach: treating every client's business as if it were our own. We don't just
                    build websites; we create digital experiences that solve real problems.
                  </p>
                  <p>
                    Today, GreenPixel Studios is a full-service web agency with a talented team of
                    designers, developers, and strategists. But we've never lost that founding
                    spirit – we're still driven by the same passion for great work and genuine
                    client partnerships.
                  </p>
                  <p>
                    From small businesses just starting out to established companies looking to
                    level up, we've helped over 120 clients transform their online presence. And
                    we're just getting started.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                    alt="GreenPixel team collaboration"
                    className="h-full w-full object-cover"
                  />
                </div>
                <ScaleIn delay={0.3}>
                  <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
                    <div className="text-4xl font-bold">8+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </ScaleIn>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container app-container">
          <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.15}>
            <StaggerItem>
              <Card className="h-full border-0 bg-card shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses of all sizes with exceptional web design and development
                    that drives growth. We believe every business deserves a digital presence that
                    works as hard as they do.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full border-0 bg-card shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the go-to partner for businesses seeking digital transformation. We
                    envision a world where every company, regardless of size, has access to
                    world-class web solutions that level the playing field.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full border-0 bg-muted/30 shadow-sm text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Key milestones that have shaped who we are today
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
                <div
                  className={`relative mb-8 flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                      {milestone.year}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                  <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary" />
                  <div className="w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                The talented people behind GreenPixel Studios
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="group h-full border-0 bg-card shadow-sm overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <div className="mt-1 text-sm font-medium text-primary">{member.role}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Work Together?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                We'd love to hear about your project. Let's create something amazing together.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/contact">
                  Start a Conversation
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

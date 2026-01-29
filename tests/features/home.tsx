import {
  ArrowRight,
  Code,
  Palette,
  Rocket,
  Users,
  CheckCircle,
  Star,
  ChevronRight,
  Zap,
  Shield,
  LineChart,
  Target,
  Award,
  Heart,
  Lightbulb,
  Handshake,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Layout } from '~/components/layout/layout';
import { portfolioProjects } from '~/data/portfolio';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
  ScaleIn,
} from '~/components/animations/scroll-reveal';
import { Link } from '@tanstack/react-router';
import { useTawkToPersistent } from '~/hooks/useTawkToPersistent';

const stats = [
  { label: 'Projects Completed', value: '150+', icon: Rocket },
  { label: 'Happy Clients', value: '120+', icon: Users },
  { label: 'Years Experience', value: '8+', icon: Star },
  { label: 'Client Retention', value: '95%', icon: CheckCircle },
];

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'Beautiful, user-centered designs that capture your brand essence and engage your audience.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Clean, efficient code that brings designs to life with smooth performance and scalability.',
  },
  {
    icon: Zap,
    title: 'E-commerce Solutions',
    description:
      'Complete online stores with seamless checkout, inventory management, and payment integration.',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing care to keep your website secure, updated, and performing at its best.',
  },
];

const testimonials = [
  {
    quote:
      'GreenPixel transformed our online presence. The new site has exceeded all our expectations.',
    author: 'Sarah Mitchell',
    role: 'CEO, Luxe Fashion Co.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote: 'Professional, creative, and incredibly easy to work with. Highly recommend!',
    author: 'Michael Chen',
    role: 'Marketing Director, TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    quote: 'The team understood our vision from day one. The results speak for themselves.',
    author: 'Emma Rodriguez',
    role: 'Founder, Fresh Harvest Farms',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

const clientLogos = [
  'TechFlow',
  'Luxe Fashion',
  'Fresh Harvest',
  'Urban Design',
  'MindBody',
  'LaunchPad',
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

export default function Home() {
  const featuredProjects = portfolioProjects.slice(0, 3);

  useTawkToPersistent('YOUR_PROPERTY_ID', {
    name: 'Miracle Michael',
    email: 'miracle@email.com',
    userId: 'user_42',
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Star className="h-4 w-4" />
                Trusted by 120+ businesses worldwide
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                We Build Websites That <span className="text-gradient">Grow Your Business</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
                GreenPixel Studios is a full-service web design and development agency. We create
                stunning, high-performing websites that convert visitors into customers.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-y border-border bg-muted/30 py-8 ">
        <div className="container app-container">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {clientLogos.map((logo) => (
                <span key={logo} className="text-lg font-semibold text-muted-foreground/60">
                  {logo}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Everything You Need to Succeed Online
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to launch and beyond, we provide comprehensive web solutions tailored
                to your business needs.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="group h-full border-0 bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Button asChild variant="outline">
                <Link to="/services">
                  View All Services
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24" id="aboutUs">
        <div className="container app-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">About Us</h2>
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

      {/* Featured Portfolio */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Featured Work
                </h2>
                <p className="max-w-2xl text-lg text-muted-foreground">
                  A selection of our recent projects that showcase our expertise and creativity.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link to="/portfolio">
                  View All Projects
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.15}
          >
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Link to="." className="group block">
                  <Card className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-lg">
                    <div className="aspect-4/3 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                        {project.categoryLabel}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
                Why Businesses Choose GreenPixel
              </h2>
              <p className="mb-12 text-lg text-primary-foreground/80">
                We're not just another web agency. We're your partners in digital success.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto"
            staggerDelay={0.15}
          >
            {[
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Quick turnaround without compromising quality',
              },
              {
                icon: LineChart,
                title: 'Results-Driven',
                description: 'Designs focused on conversions and growth',
              },
              {
                icon: Shield,
                title: 'Ongoing Support',
                description: "We're with you long after launch",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it – hear from the businesses we've helped succeed.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <Card className="h-full border-0 bg-muted/30 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-6 text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-subtle py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Ready to Grow Your Business Online?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Let's discuss your project and create something amazing together. Get a free
                consultation and quote today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

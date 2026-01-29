import { motion } from 'framer-motion';
import {
  ArrowRight,
  Palette,
  Code,
  ShoppingCart,
  Settings,
  Search,
  BarChart,
  Check,
  Terminal,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Layout } from '~/components/layout/layout';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from '~/components/animations/scroll-reveal';
import { GridBackground, GlowingOrb } from '~/components/animations/floating-elements';
import { Link } from '@tanstack/react-router';

const services = [
  {
    id: 'design',
    icon: Palette,
    title: 'Web Design',
    code: 'design.create()',
    description:
      'Beautiful, conversion-focused designs that capture your brand and engage your audience.',
    features: [
      'Custom UI/UX design',
      'Mobile-first responsive layouts',
      'Brand identity integration',
      'Wireframes & prototypes',
      'Design system creation',
      'Accessibility compliance',
    ],
  },
  {
    id: 'development',
    icon: Code,
    title: 'Web Development',
    code: 'build.deploy()',
    description: 'Clean, efficient code that brings your designs to life with optimal performance.',
    features: [
      'Custom React/Next.js development',
      'Content Management Systems',
      'API integrations',
      'Database design & setup',
      'Performance optimization',
      'Security best practices',
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    code: 'store.launch()',
    description:
      'Complete online stores built to sell, with seamless checkout and inventory management.',
    features: [
      'Custom e-commerce platforms',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking systems',
      'Subscription functionality',
      'Multi-currency support',
    ],
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: 'Maintenance & Support',
    code: 'support.enable()',
    description: 'Ongoing care to keep your website secure, updated, and performing at its best.',
    features: [
      'Regular security updates',
      'Performance monitoring',
      'Content updates',
      'Bug fixes & troubleshooting',
      'Backup management',
      '24/7 emergency support',
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization',
    code: 'seo.optimize()',
    description:
      'Get found by your customers with search engine optimization that drives organic traffic.',
    features: [
      'Technical SEO audits',
      'Keyword research & strategy',
      'On-page optimization',
      'Site speed optimization',
      'Schema markup',
      'Local SEO setup',
    ],
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Analytics & Reporting',
    code: 'data.analyze()',
    description: 'Data-driven insights to understand your audience and optimize your results.',
    features: [
      'Analytics setup & configuration',
      'Custom dashboard creation',
      'Conversion tracking',
      'User behavior analysis',
      'Monthly performance reports',
      'A/B testing setup',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience.',
    code: 'init()',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We create a tailored plan with scope, timeline, and approach.',
    code: 'plan()',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our designers craft mockups that align with your brand.',
    code: 'design()',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Our developers bring designs to life with clean code.',
    code: 'build()',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Rigorous testing ensures everything works perfectly.',
    code: 'test()',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We deploy your site and provide ongoing support.',
    code: 'deploy()',
  },
];

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started online',
    price: 'From $3,000',
    code: 'plan.starter()',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      '1 month support',
    ],
  },
  {
    name: 'Professional',
    description: 'For growing businesses that need more functionality',
    price: 'From $8,000',
    code: 'plan.pro()',
    popular: true,
    features: [
      'Up to 15 pages',
      'Custom design',
      'CMS integration',
      'Advanced SEO',
      'Analytics setup',
      '3 months support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Full-scale solutions for large organizations',
    price: 'Custom',
    code: 'plan.enterprise()',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'E-commerce integration',
      'API development',
      'Priority support',
      'Dedicated account manager',
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GridBackground />
        <GlowingOrb className="w-96 h-96 -top-48 -right-48" />

        <div className="container relative z-10 app-container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-mono text-primary mb-6">
                <Terminal className="h-4 w-4" />
                <span className="text-muted-foreground">$</span> npm run services
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Full-Service <span className="text-primary">{'<WebSolutions/>'}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground md:text-xl font-mono">
                <span className="text-primary">//</span> Everything you need to build a powerful
                online presence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 border-y border-border">
        <div className="container app-container">
          <ScrollReveal>
            <div className="font-mono text-sm text-primary text-center mb-12">
              {'services.forEach(service => render(<Service />))'}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card
                    id={service.id}
                    className="group h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <CardHeader>
                      <div className="font-mono text-xs text-primary/60 mb-3">{service.code}</div>
                      <motion.div
                        className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <service.icon className="h-7 w-7" />
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-muted-foreground">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 text-primary shrink-0" />
                            <span className="font-mono text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/10 py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="font-mono text-sm text-primary mb-4">
                {'async function buildProject() {'}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology that ensures your project is delivered on time.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mx-auto max-w-3xl ">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.number}
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
                      {step.number} {step.code}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-foreground font-mono">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
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

          <ScrollReveal delay={0.3}>
            <div className="font-mono text-sm text-primary text-center mt-8">
              {'} // Returns success ✓'}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="font-mono text-sm text-primary mb-4">{'pricing.getPackages()'}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Plan Options</h2>
              <p className="text-lg text-muted-foreground">
                Transparent pricing with packages designed to fit different needs.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card
                    className={`relative h-full border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all ${
                      pkg.popular
                        ? 'border-primary shadow-lg'
                        : 'border-border/50 hover:border-primary/30'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-mono font-medium text-primary-foreground">
                        // recommended
                      </div>
                    )}
                    <CardHeader className="text-center pt-8">
                      <div className="font-mono text-xs text-primary/60 mb-2">{pkg.code}</div>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                      <div className="mt-4 text-3xl font-bold text-foreground font-mono">
                        {pkg.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 text-primary shrink-0" />
                            <span className="font-mono text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="w-full font-mono"
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        <Link to="/contact">$ get-started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <p className="mt-8 text-center text-sm text-muted-foreground font-mono">
              <span className="text-primary">//</span> Need something custom?{' '}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{' '}
              for a personalized quote.
            </p>
          </ScrollReveal>
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
        <div className="container relative z-10 app-container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="font-mono text-sm text-primary-foreground/70 mb-4">
                {"// Let's build something great"}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Let's Discuss Your Project
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80 font-mono">
                Every great website starts with a conversation.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base font-mono">
                <Link to="/contact">
                  <span className="text-primary">$</span> Get Free Consultation
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

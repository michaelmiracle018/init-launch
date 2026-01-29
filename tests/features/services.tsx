import {
  ArrowRight,
  Palette,
  Code,
  ShoppingCart,
  Settings,
  Search,
  BarChart,
  Check,
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
import { Link } from '@tanstack/react-router';

const services = [
  {
    id: 'design',
    icon: Palette,
    title: 'Web Design',
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
    description:
      'We learn about your business, goals, and target audience through in-depth consultation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We create a tailored plan that outlines the project scope, timeline, and approach.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Our designers craft beautiful mockups that align with your brand and user expectations.',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Our developers bring the designs to life with clean, efficient, and scalable code.',
  },
  {
    number: '05',
    title: 'Testing',
    description:
      'Rigorous testing ensures everything works perfectly across all devices and browsers.',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'We deploy your site and provide ongoing support to ensure continued success.',
  },
];

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started online',
    price: 'From $3,000',
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
      <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-28">
        <div className="container app-container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Full-Service <span className="text-gradient">Web Solutions</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground md:text-xl">
                From design to development and beyond, we provide everything you need to build a
                powerful online presence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <Card
                  id={service.id}
                  className="group h-full border-0 bg-card shadow-sm transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-7 w-7" />
                    </div>
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology that ensures your project is delivered on time and exceeds
                expectations.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1}>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
              {processSteps.map((step, index) => (
                <ScrollReveal
                  key={step.number}
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
                        {step.number}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary" />
                    <div className="w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Investment Options
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparent pricing with packages designed to fit different needs and budgets.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <Card
                  className={`relative h-full border-0 shadow-sm ${
                    pkg.popular ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                    <div className="mt-4 text-3xl font-bold text-foreground">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full"
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Need something custom?{' '}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{' '}
              for a personalized quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Let's Discuss Your Project
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Every great website starts with a conversation. Tell us about your vision and we'll
                create a plan to bring it to life.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/contact">
                  Get Free Consultation
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

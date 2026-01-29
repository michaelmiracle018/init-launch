import { motion } from 'framer-motion';
import { Palette, Code, Zap, Shield, ChevronRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';
import { Link } from '@tanstack/react-router';

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'Beautiful, user-centered designs that capture your brand essence and engage your audience.',
    code: 'design()',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Clean, efficient code that brings designs to life with smooth performance and scalability.',
    code: 'develop()',
  },
  {
    icon: Zap,
    title: 'E-commerce Solutions',
    description:
      'Complete online stores with seamless checkout, inventory management, and payment integration.',
    code: 'sell()',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing care to keep your website secure, updated, and performing at its best.',
    code: 'maintain()',
  },
];

export function ServicesSection() {
  return (
    <section className="bg-muted/10 py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 app-container">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="font-mono text-sm text-primary mb-4">{'<services>'}</div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to launch and beyond, we provide comprehensive web solutions tailored to
              your business needs.
            </p>
            <div className="font-mono text-sm text-primary mt-4">{'</services>'}</div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="group h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-lg hover:border-primary/30">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="h-6 w-6" />
                    </motion.div>
                    <div className="font-mono text-xs text-primary/60 mb-2">{service.code}</div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="font-mono">
              <Link to="/services">
                <span className="text-primary">import</span> *{' '}
                <span className="text-muted-foreground">from</span>{' '}
                <span className="text-chart-4">'./services'</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

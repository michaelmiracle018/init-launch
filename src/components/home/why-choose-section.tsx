import { motion } from 'framer-motion';
import { Zap, LineChart, Shield } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality',
    code: 'speed++',
  },
  {
    icon: LineChart,
    title: 'Results-Driven',
    description: 'Designs focused on conversions and growth',
    code: 'roi => max',
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: "We're with you long after launch",
    code: 'support(24/7)',
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      {/* Animated background grid */}
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
          <div className="mx-auto max-w-4xl text-center">
            <div className="font-mono text-sm text-primary-foreground/70 mb-4">
              {'const whyChooseUs = () => {'}
            </div>
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
          {features.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <div className="font-mono text-xs text-primary-foreground/50 mb-2">{item.code}</div>
                <h3 className="mb-2 text-lg font-semibold text-primary-foreground">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4}>
          <div className="font-mono text-sm text-primary-foreground/70 text-center mt-12">
            {'};'}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

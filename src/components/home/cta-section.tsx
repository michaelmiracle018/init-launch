import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { ScrollReveal } from '~/components/animations/scroll-reveal';
import { GlowingOrb } from '~/components/animations/floating-elements';
import { Link } from '@tanstack/react-router';

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <GlowingOrb className="w-96 h-96 top-0 left-1/4" />
      <GlowingOrb className="w-80 h-80 bottom-0 right-1/4" />

      <div className="container relative z-10 app-container">
        <ScrollReveal>
          <motion.div
            className="mx-auto max-w-3xl text-center"
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5 }}
          >
            {/* Terminal header */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="font-mono text-sm">
                <span className="text-muted-foreground">$</span>{' '}
                <span className="text-primary">ready</span> --to-launch
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to{' '}
              <span className="text-primary font-mono">
                {'{'}Grow{'}'}
              </span>{' '}
              Your Business Online?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground font-mono">
              <span className="text-primary">//</span> Let's discuss your project and create
              something amazing together.
            </p>

            {/* Code-style CTA box */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-8 max-w-xl mx-auto"
              whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-mono text-left text-sm">
                <div>
                  <span className="text-chart-3">async function</span>{' '}
                  <span className="text-chart-2">startProject</span>() {'{'}
                </div>
                <div className="ml-4">
                  <span className="text-chart-3">const</span>{' '}
                  <span className="text-primary">consultation</span> ={' '}
                  <span className="text-chart-4">"FREE"</span>;
                </div>
                <div className="ml-4">
                  <span className="text-chart-3">return</span>{' '}
                  <span className="text-chart-2">await</span>{' '}
                  <span className="text-primary">success</span>();
                </div>
                <div>{'}'}</div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-base group">
                <Link to="/contact" hash="get--in-touch">
                  <span className="font-mono">$</span> Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ScrollReveal } from '~/components/animations/scroll-reveal';

const clientLogos = [
  'TechFlow',
  'Luxe Fashion',
  'Fresh Harvest',
  'Urban Design',
  'MindBody',
  'LaunchPad',
];

export function ClientLogos() {
  return (
    <section className="border-y border-border bg-card/30 py-8">
      <div className="container app-container">
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">{'// '}</span>trusted_by.forEach()
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.span
                key={logo}
                className="text-lg font-semibold text-muted-foreground/40 font-mono hover:text-primary transition-colors cursor-default"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {`<${logo.replace(' ', '')}/>`}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and competitors.',
    code: 'analyze(requirements)',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We create a tailored roadmap with clear milestones and deliverables.',
    code: 'plan.create()',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our designers craft stunning mockups that align with your brand vision.',
    code: 'design.render()',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We build with clean, scalable code using modern technologies.',
    code: 'build.execute()',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Rigorous QA ensures everything works perfectly across all devices.',
    code: 'test.runAll()',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We deploy your site and provide ongoing support for continued success.',
    code: 'deploy.production()',
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-card/30 relative overflow-hidden">
      {/* Code background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            hsl(var(--primary)) 24px,
            hsl(var(--primary)) 25px
          )`,
          }}
        />
      </div>

      <div className="container relative z-10 app-container">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="font-mono text-sm text-primary mb-4">{'function buildWebsite() {'}</div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Development <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that delivers results on time, every time.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {processSteps.map((step, index) => (
            <StaggerItem key={step.number}>
              <motion.div
                className="relative p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all group"
                whileHover={{ y: -5 }}
              >
                {/* Connection line for desktop */}
                {index < processSteps.length - 1 && index !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}

                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-mono font-bold text-primary-foreground"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.number}
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-primary/60 mb-1">{step.code}</div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4}>
          <div className="font-mono text-sm text-primary text-center mt-8">
            {'} // Returns success ✓'}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

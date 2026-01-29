import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiFigma,
  SiWordpress,
  SiShopify,
  SiStripe,
  SiVercel,
  SiGithub,
} from '@icons-pack/react-simple-icons';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'Shopify', icon: SiShopify, color: '#7AB55C' },
  { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
];

export function TechStackSection() {
  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="container app-container">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="font-mono text-sm text-primary mb-4">
              {"import { tools } from './tech-stack'"}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Powered by Modern <span className="text-primary">Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We use the latest tools and frameworks to build fast, scalable, and maintainable
              solutions.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          staggerDelay={0.05}
        >
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all group"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <tech.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

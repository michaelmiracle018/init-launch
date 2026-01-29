import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';
import { portfolioProjects } from '~/data/portfolio';
import { Link } from '@tanstack/react-router';

export function PortfolioSection() {
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="container app-container">
        <ScrollReveal>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="font-mono text-sm text-primary mb-2">{'// recent_work.map()'}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Featured <span className="text-primary">{'<Projects/>'}</span>
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A selection of our recent projects that showcase our expertise and creativity.
              </p>
            </div>
            <Button asChild variant="outline" className="font-mono">
              <Link to="/portfolio">
                git log --all
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <Link to="." className="group block">
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-xl hover:border-primary/30">
                    <div className="relative aspect-4/3 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="font-mono text-sm text-primary flex items-center gap-2">
                          View Case Study <ExternalLink className="h-4 w-4" />
                        </span>
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 font-mono text-xs text-primary/80">
                        {'<'}
                        {project.categoryLabel.toLowerCase().replace(' ', '-')}
                        {' />'}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

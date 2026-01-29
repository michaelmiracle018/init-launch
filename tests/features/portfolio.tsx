import { useState } from 'react';
import { Layout } from '~/components/layout/layout';
import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { portfolioProjects, categories } from '~/data/portfolio';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from '~/components/animations/ScrollReveal';
import { Link } from '@tanstack/react-router';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-28">
        <div className="container app-container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground md:text-xl">
                A showcase of our best work. Each project tells a story of collaboration,
                creativity, and measurable results.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-border py-6">
        <div className="container app-container">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <StaggerContainer
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.1}
            key={activeCategory}
          >
            {filteredProjects.map((project) => (
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
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container app-container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Want to See Your Project Here?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Let's create something amazing together. Start your project today.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

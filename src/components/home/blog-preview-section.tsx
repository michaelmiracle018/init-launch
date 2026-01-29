import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';
import { blogPosts } from '~/data/blog';
import { Link } from '@tanstack/react-router';

export function BlogPreviewSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="container app-container">
        <ScrollReveal>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="font-mono text-sm text-primary mb-2">{'// blog.getLatest(3)'}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Latest <span className="text-primary">{'<Insights/>'}</span>
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Tips, trends, and thoughts on web design and development.
              </p>
            </div>
            <Button asChild variant="outline" className="font-mono">
              <Link to=".">
                <span className="text-primary">read</span> --all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {latestPosts.map((post) => (
            <StaggerItem key={post.id}>
              <Link to="." className="group block">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="font-mono text-primary">{`<${post.category.toLowerCase().replace(' ', '-')}/>`}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
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

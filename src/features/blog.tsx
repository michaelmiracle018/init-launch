import { useState } from 'react';

import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Terminal } from 'lucide-react';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Layout } from '~/components/layout/layout';
import { blogPosts, blogCategories } from '~/data/blog';
import {
  FadeIn,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from '~/components/animations/scroll-reveal';
import { GridBackground, GlowingOrb } from '~/components/animations/floating-elements';
import { Link } from '@tanstack/react-router';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GridBackground />
        <GlowingOrb className="w-96 h-96 -top-48 -right-48" />

        <div className="container relative z-10 app-container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-mono text-primary mb-6">
                <Terminal className="h-4 w-4" />
                <span className="text-muted-foreground">$</span> cat blog/*.md
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Insights & <span className="text-primary">{'<Ideas/>'}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground md:text-xl font-mono">
                <span className="text-primary">//</span> Tips, trends, and thoughts on web design
                and development.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-20 border-y border-border">
        <div className="container app-container">
          <ScrollReveal>
            <div className="font-mono text-sm text-primary mb-6">
              {'posts.find(p => p.featured)'}
            </div>
          </ScrollReveal>
          <Link to="/blog/$postId" params={{ postId: featuredPost.id }} className="group block">
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <motion.img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-8 md:p-12">
                    <div className="mb-4 inline-flex items-center gap-2">
                      <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-mono text-primary border border-primary/20">
                        // featured
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">{`<${featuredPost.category.toLowerCase().replace(' ', '-')}/>`}</span>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors md:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-6 text-muted-foreground">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="border-b border-border py-6 bg-card/30">
        <div className="container app-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="grep -i 'search term'"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-mono"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground mr-2">filter:</span>
              {blogCategories.map((category) => (
                <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={activeCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="font-mono"
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container app-container">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {filteredPosts.slice(1).map((post) => (
              <StaggerItem key={post.id}>
                <Link to="/blog/$postId" params={{ postId: post.id }} className="group block">
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                      <div className="aspect-[16/9] overflow-hidden">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground font-mono">
                          <span className="text-primary">{`<${post.category.toLowerCase().replace(' ', '-')}/>`}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3">
                          {/* <motion.img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-8 w-8 rounded-full object-cover border border-primary/20"
                            whileHover={{ scale: 1.1 }}
                          /> */}
                          <div>
                            {/* <div className="text-sm font-medium text-foreground font-mono">
                              {post.author.name}
                            </div> */}
                            <div className="text-xs text-muted-foreground">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredPosts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground font-mono">
                <span className="text-primary">//</span> No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
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
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="font-mono text-sm text-primary-foreground/70 mb-4">
              {'newsletter.subscribe()'}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Stay Updated
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80 font-mono">
              Get the latest insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                placeholder="your~email.com"
                className="bg-primary-foreground text-foreground sm:w-80 font-mono"
              />
              <Button variant="secondary" className="font-mono">
                $ subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

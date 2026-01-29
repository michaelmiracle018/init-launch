import { ArrowLeft, Calendar, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Layout } from '~/components/layout/layout';
import { blogPosts } from '~/data/blog';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from '~/components/animations/ScrollReveal';
import { useParams } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold">Article Not Found</h1>
          <p className="mt-4 text-muted-foreground">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild className="mt-8">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== id && p.category === post.category)
    .slice(0, 2);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-subtle py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <Link
                to="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl">
              <div className="aspect-2/1 overflow-hidden rounded-2xl">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-16">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="mt-8 mb-4 text-2xl font-bold text-foreground">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter((item) => item.startsWith('- '));
                    return (
                      <ul key={index} className="my-4 list-disc pl-6 text-muted-foreground">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="mb-4 text-muted-foreground">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-8">
                <span className="text-sm font-medium text-foreground">Share this article:</span>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal>
              <h2 className="mb-8 text-2xl font-bold text-foreground">Related Articles</h2>
            </ScrollReveal>
            <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.15}>
              {relatedPosts.map((relatedPost) => (
                <StaggerItem key={relatedPost.id}>
                  <Link to={`/blog/${relatedPost.id}`} className="group block">
                    <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </Layout>
  );
}

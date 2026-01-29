import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '~/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';

const testimonials = [
  {
    quote:
      'GreenPixel transformed our online presence. The new site has exceeded all our expectations.',
    author: 'Sarah Mitchell',
    role: 'CEO, Luxe Fashion Co.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote: 'Professional, creative, and incredibly easy to work with. Highly recommend!',
    author: 'Michael Chen',
    role: 'Marketing Director, TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    quote: 'The team understood our vision from day one. The results speak for themselves.',
    author: 'Emma Rodriguez',
    role: 'Founder, Fresh Harvest Farms',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/10">
      <div className="container app-container">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="font-mono text-sm text-primary mb-4">
              {'reviews.filter(r => r.rating === 5)'}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Our <span className="text-primary">clients</span>.say()
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it – hear from the businesses we've helped succeed.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="h-4 w-4 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <motion.img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground font-mono">
                          <span className="text-primary">//</span> {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

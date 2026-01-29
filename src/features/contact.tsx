import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Card, CardContent } from '~/components/ui/card';
import { Label } from '~/components/ui/label';
import { Layout } from '~/components/layout/layout';
import { useToast } from '~/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from '~/components/animations/scroll-reveal';
import { GridBackground, GlowingOrb } from '~/components/animations/floating-elements';
import {
  CodeBlock,
  CodeLine,
  CodeKeyword,
  CodeString,
  CodeFunction,
  CodeVariable,
} from '~/components/animations/code-block';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: "We'll respond within 24 hours",
    value: 'hello~greenpixel.studio',
    code: 'email.send()',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm',
    value: '+1 (555) 123-4567',
    code: 'phone.call()',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello',
    value: '123 Design Street, New York, NY 10001',
    code: 'location.find()',
  },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What's your pricing model?",
    answer:
      'We offer both fixed-price projects and hourly rates depending on the project type. Fixed pricing works best for well-defined projects, while hourly rates offer flexibility for evolving requirements.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes! We offer maintenance packages that include security updates, content updates, performance monitoring, and priority support.',
  },
  {
    question: 'Can you work with our existing branding?',
    answer:
      'Absolutely. We can work with your existing brand guidelines, or help you develop new ones if needed.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We primarily work with modern technologies like React, Next.js, TypeScript, and Node.js. For content management, we recommend solutions like WordPress, Sanity, or custom CMS.',
  },
  {
    question: 'Do you offer SEO services?',
    answer:
      'Yes, we include basic SEO optimization in all our web projects. We also offer comprehensive SEO packages for clients who want to invest more heavily in organic search visibility.',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      projectType: '',
      message: '',
    });
    setIsSubmitting(false);
  };

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
                <span className="text-muted-foreground">$</span> npm run contact
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Let's Start a <span className="text-primary">{'<Conversation/>'}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground md:text-xl font-mono">
                <span className="text-primary">//</span> Ready to transform your online presence?
                We'll respond within 24 hours.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 border-y border-border">
        <div className="container app-container">
          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {contactInfo.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm text-center hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <div className="font-mono text-xs text-primary/60 mb-3">{item.code}</div>
                      <motion.div
                        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <item.icon className="h-7 w-7" />
                      </motion.div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{item.description}</p>
                      <p className="text-sm font-mono text-primary">{item.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16" id="get--in-touch">
        <div className="container app-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <div className="font-mono text-sm text-primary mb-4">{"// What you'll get"}</div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Tell Us About Your Project
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Fill out the form and we'll get back to you with a free consultation and project
                  estimate.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: CheckCircle,
                      title: 'Free Consultation',
                      desc: 'Expert recommendations for your project',
                    },
                    {
                      icon: Clock,
                      title: 'Quick Response',
                      desc: 'Expect to hear back within 24 hours',
                    },
                    {
                      icon: MessageSquare,
                      title: 'No Obligation',
                      desc: 'Get a detailed proposal, no strings attached',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/30"
                    >
                      <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <div className="font-medium text-foreground font-mono">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <CodeBlock className="hidden lg:block">
                  <div className="space-y-1">
                    <CodeLine lineNumber={1} delay={0.1}>
                      <CodeKeyword>const</CodeKeyword> <CodeVariable>project</CodeVariable> = {'{'}
                    </CodeLine>
                    <CodeLine lineNumber={2} delay={0.2}>
                      <span className="ml-4">
                        <CodeVariable>client</CodeVariable>: <CodeString>"You"</CodeString>,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={3} delay={0.3}>
                      <span className="ml-4">
                        <CodeVariable>status</CodeVariable>:{' '}
                        <CodeString>"Ready to start"</CodeString>,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={4} delay={0.4}>
                      <span className="ml-4">
                        <CodeFunction>launch</CodeFunction>: () ={'>'}{' '}
                        <CodeString>"success"</CodeString>,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={5} delay={0.5}>
                      {'}'};
                    </CodeLine>
                  </div>
                </CodeBlock>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="font-mono text-xs text-primary/60 mb-4">{'form.submit()'}</div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-mono">
                          name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-mono">
                          email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john~company.com"
                          className="font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-mono">
                          company
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                          className="font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="font-mono">
                          budget
                        </Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          placeholder="$5,000 - $10,000"
                          className="font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="font-mono">
                        projectType
                      </Label>
                      <Input
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        placeholder="e.g., E-commerce, Corporate Website, Web App"
                        className="font-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-mono">
                        message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="font-mono"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-mono"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          $ send-message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-muted/10 py-16 md:py-24 border-t border-border">
        <div className="container app-container">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <div className="font-mono text-sm text-primary mb-4">{'faq.getAll()'}</div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground font-mono">
                  <span className="text-primary">//</span> Got questions? We've got answers.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary font-mono text-sm">
                      <span className="text-primary mr-2">{`[${index}]`}</span> {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}

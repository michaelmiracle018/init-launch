import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
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
} from '~/components/animations/ScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: "We'll respond within 24 hours",
    value: 'hello~greenpixel.studio',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm',
    value: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello',
    value: '123 Design Street, New York, NY 10001',
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
      "We offer both fixed-price projects and hourly rates depending on the project type. Fixed pricing works best for well-defined projects, while hourly rates offer flexibility for evolving requirements. We'll recommend the best approach for your situation.",
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes! We offer maintenance packages that include security updates, content updates, performance monitoring, and priority support. Many clients find this invaluable for keeping their site running smoothly.',
  },
  {
    question: 'Can you work with our existing branding?',
    answer:
      'Absolutely. We can work with your existing brand guidelines, or help you develop new ones if needed. Our goal is to create a website that authentically represents your brand.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We primarily work with modern technologies like React, Next.js, TypeScript, and Node.js. For content management, we recommend solutions like WordPress, Sanity, or custom CMS depending on your needs.',
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

    // Simulate form submission
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
      <section className="relative overflow-hidden bg-gradient-subtle py-20 md:py-28">
        <div className="container app-container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Let's Start a <span className="text-gradient">Conversation</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground md:text-xl">
                Ready to transform your online presence? Tell us about your project and we'll get
                back to you within 24 hours.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16">
        <div className="container app-container">
          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {contactInfo.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full border-0 bg-muted/30 shadow-sm text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">{item.description}</p>
                    <p className="text-sm font-medium text-primary">{item.value}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16">
        <div className="container app-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Tell Us About Your Project
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Fill out the form below and we'll get back to you with a free consultation and
                  project estimate.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Free Consultation</div>
                      <div className="text-sm text-muted-foreground">
                        We'll discuss your project goals and provide expert recommendations.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Quick Response</div>
                      <div className="text-sm text-muted-foreground">
                        Expect to hear back from us within 24 hours.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">No Obligation</div>
                      <div className="text-sm text-muted-foreground">
                        Get a detailed proposal with no strings attached.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john~company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          placeholder="$5,000 - $10,000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        placeholder="e.g., E-commerce, Corporate Website, Web App"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
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
      <section id="faq" className="bg-muted/30 py-16 md:py-24">
        <div className="container app-container">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">Got questions? We've got answers.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {faq.question}
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

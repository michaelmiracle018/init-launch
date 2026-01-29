import { Layout } from '~/components/layout/layout';
import { HeroSection } from '~/components/home/hero-section';
import { ClientLogos } from '~/components/home/client-logos';
import { StatsSection } from '~/components/home/stats-section';
import { ServicesSection } from '~/components/home/services-section';
// import { ProcessSection } from '~/components/home/process-section';
import { PortfolioSection } from '~/components/home/portfolio-section';
import { WhyChooseSection } from '~/components/home/why-choose-section';
import { BlogPreviewSection } from '~/components/home/blog-preview-section';
import { FAQPreviewSection } from '~/components/home/fag-preview-section';
import { CTASection } from '~/components/home/cta-section';
import { ScrollReveal, StaggerContainer, StaggerItem } from '~/components/animations/scroll-reveal';
import {
  CodeBlock,
  CodeComment,
  CodeKeyword,
  CodeLine,
  CodeString,
  CodeVariable,
} from '~/components/animations/code-block';
import { Card, CardContent } from '~/components/ui/card';
import { Award, Handshake, Heart, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTawkToPersistent } from '~/hooks/useTawkToPersistent';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
    code: 'innovate()',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      "We genuinely care about our clients' success and pour our hearts into every project.",
    code: 'passion++',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We work alongside you as true partners, not just vendors. Your goals are our goals.',
    code: 'collaborate()',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards and never settle for anything less than exceptional.',
    code: 'quality: max',
  },
];

export default function Home() {
  useTawkToPersistent('YOUR_PROPERTY_ID', {
    name: 'Miracle Michael',
    email: 'miracle@email.com',
    userId: 'user_42',
  });
  return (
    <Layout>
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <div>
        {/* Story Section */}
        <section className="py-16 md:py-24 border-y border-border">
          <div className="container app-container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <ScrollReveal direction="left">
                <div>
                  <div className="font-mono text-sm text-primary mb-4">{'// Our origin story'}</div>
                  <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                    How It All <span className="text-primary">Started</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      It started in <span className="text-primary font-mono">2016</span> when two
                      brothers – James and David Thompson – decided to combine their skills in
                      development and design to help businesses thrive online.
                    </p>
                    <p>
                      What began as a side project quickly grew as word spread about our unique
                      approach: treating every client's business as if it were our own. We don't
                      just build websites; we create digital experiences that solve real problems.
                    </p>
                    <p>
                      Today, GreenPixel Studios is a full-service web agency with a talented team of
                      designers, developers, and strategists. But we've never lost that founding
                      spirit – we're still driven by the same passion for great work.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <CodeBlock className="transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="space-y-1">
                    <CodeLine lineNumber={1} delay={0.1}>
                      <CodeKeyword>const</CodeKeyword> <CodeVariable>GreenPixel</CodeVariable> ={' '}
                      {'{'}
                    </CodeLine>
                    <CodeLine lineNumber={2} delay={0.2}>
                      <span className="ml-4">
                        <CodeVariable>founded</CodeVariable>: <CodeString>"2016"</CodeString>,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={3} delay={0.3}>
                      <span className="ml-4">
                        <CodeVariable>founders</CodeVariable>: [<CodeString>"James"</CodeString>,{' '}
                        <CodeString>"David"</CodeString>],
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={4} delay={0.4}>
                      <span className="ml-4">
                        <CodeVariable>clients</CodeVariable>: <CodeKeyword>120</CodeKeyword>+,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={5} delay={0.5}>
                      <span className="ml-4">
                        <CodeVariable>projects</CodeVariable>: <CodeKeyword>150</CodeKeyword>+,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={6} delay={0.6}>
                      <span className="ml-4">
                        <CodeVariable>countries</CodeVariable>: <CodeKeyword>15</CodeKeyword>+,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={7} delay={0.7}>
                      <span className="ml-4">
                        <CodeVariable>mission</CodeVariable>:{' '}
                        <CodeString>"Digital success"</CodeString>,
                      </span>
                    </CodeLine>
                    <CodeLine lineNumber={8} delay={0.8}>
                      {'}'};
                    </CodeLine>
                    <CodeLine lineNumber={9} delay={0.9}>
                      <span></span>
                    </CodeLine>
                    <CodeLine lineNumber={10} delay={1.0}>
                      <CodeComment>// Built with passion ❤️</CodeComment>
                    </CodeLine>
                  </div>
                </CodeBlock>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted/10 py-16 md:py-24">
          <div className="container app-container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.15}>
              <StaggerItem>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all">
                    <CardContent className="p-8">
                      <div className="font-mono text-xs text-primary/60 mb-4">mission.define()</div>
                      <motion.div
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Target className="h-6 w-6" />
                      </motion.div>
                      <h3 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To empower businesses of all sizes with exceptional web design and
                        development that drives growth. We believe every business deserves a digital
                        presence that works as hard as they do.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all">
                    <CardContent className="p-8">
                      <div className="font-mono text-xs text-primary/60 mb-4">vision.render()</div>
                      <motion.div
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Lightbulb className="h-6 w-6" />
                      </motion.div>
                      <h3 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be the go-to partner for businesses seeking digital transformation. We
                        envision a world where every company, regardless of size, has access to
                        world-class web solutions.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container app-container">
            <ScrollReveal>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <div className="font-mono text-sm text-primary mb-4">{'const values = ['}</div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              staggerDelay={0.1}
            >
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm text-center hover:border-primary/30 transition-all">
                      <CardContent className="p-6">
                        <div className="font-mono text-xs text-primary/60 mb-3">{value.code}</div>
                        <motion.div
                          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <value.icon className="h-7 w-7" />
                        </motion.div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.3}>
              <div className="font-mono text-sm text-primary text-center mt-8">{'];'}</div>
            </ScrollReveal>
          </div>
        </section>
      </div>
      <ServicesSection />
      {/* <ProcessSection /> */}
      {/* <TechStackSection /> */}
      <PortfolioSection />
      <WhyChooseSection />
      {/* <TestimonialsSection /> */}
      <BlogPreviewSection />
      <FAQPreviewSection />
      <CTASection />
    </Layout>
  );
}

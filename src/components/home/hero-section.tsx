import { ArrowRight, Terminal, Rocket, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '~/components/ui/button';
import { FadeIn } from '~/components/animations/scroll-reveal';
import { TypewriterText } from '~/components/animations/typewriter-text';
import {
  CodeBlock,
  CodeLine,
  CodeKeyword,
  CodeString,
  CodeFunction,
  CodeComment,
  CodeVariable,
} from '~/components/animations/code-block';
import {
  FloatingCodeElements,
  GridBackground,
  GlowingOrb,
} from '~/components/animations/floating-elements';
import { ProcessPipeline, FloatingPipelineArrows } from '~/components/animations/process-pipeline';
import { Link } from '@tanstack/react-router';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 min-h-[90vh] flex items-center">
      <GridBackground />
      <FloatingCodeElements />
      <FloatingPipelineArrows />
      <GlowingOrb className="w-96 h-96 -top-48 -right-48" />
      <GlowingOrb className="w-80 h-80 -bottom-40 -left-40" />

      <div className="container relative z-10 app-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <FadeIn>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-mono text-primary"
                whileHover={{ scale: 1.02 }}
              >
                <Terminal className="h-4 w-4" />
                <span className="text-muted-foreground">$</span> npx{' '}
                <span className="text-primary">init-launch</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="w-2 h-4 bg-primary"
                />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block font-mono">
                  <span className="text-primary">init</span>Launch
                </span>
                <span className="block mt-2">
                  <span className="text-primary font-mono">&lt;</span>
                  <TypewriterText text="YourIdea" className="text-primary" delay={0.5} speed={80} />
                  <span className="text-primary font-mono">/&gt;</span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="max-w-xl text-lg text-muted-foreground font-mono leading-relaxed">
                <span className="text-primary">//</span> From concept to completion. We
                <span className="text-chart-1"> initialize</span>,
                <span className="text-chart-2"> build</span>,
                <span className="text-chart-3"> deploy</span>, and
                <span className="text-chart-4"> launch</span> your digital products.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="text-base group">
                  <Link to="/contact">
                    <Rocket className="mr-2 h-5 w-5" />
                    Launch Your Project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base font-mono">
                  <Link to="/portfolio">
                    <Play className="mr-2 h-4 w-4 text-primary" />
                    View Our Work
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right side - Code block */}
          <FadeIn delay={0.2} className="hidden lg:block">
            <CodeBlock className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-1">
                <CodeLine lineNumber={1} delay={0.5}>
                  <CodeKeyword>const</CodeKeyword> <CodeVariable>project</CodeVariable> ={' '}
                  <CodeKeyword>await</CodeKeyword> <CodeFunction>initLaunch</CodeFunction>({'{'}
                </CodeLine>
                <CodeLine lineNumber={2} delay={0.6}>
                  <span className="ml-4">
                    <CodeVariable>phases</CodeVariable>: [
                  </span>
                </CodeLine>
                <CodeLine lineNumber={3} delay={0.7}>
                  <span className="ml-8">
                    <CodeString>"init"</CodeString>,{' '}
                    <CodeComment>// Discovery & Planning</CodeComment>
                  </span>
                </CodeLine>
                <CodeLine lineNumber={4} delay={0.8}>
                  <span className="ml-8">
                    <CodeString>"build"</CodeString>,{' '}
                    <CodeComment>// Design & Development</CodeComment>
                  </span>
                </CodeLine>
                <CodeLine lineNumber={5} delay={0.9}>
                  <span className="ml-8">
                    <CodeString>"deploy"</CodeString>,{' '}
                    <CodeComment>// Testing & Staging</CodeComment>
                  </span>
                </CodeLine>
                <CodeLine lineNumber={6} delay={1.0}>
                  <span className="ml-8">
                    <CodeString>"launch"</CodeString>, <CodeComment>// Go Live! 🚀</CodeComment>
                  </span>
                </CodeLine>
                <CodeLine lineNumber={7} delay={1.1}>
                  <span className="ml-4">],</span>
                </CodeLine>
                <CodeLine lineNumber={8} delay={1.2}>
                  <span className="ml-4">
                    <CodeVariable>success</CodeVariable>: <CodeKeyword>true</CodeKeyword>,
                  </span>
                </CodeLine>
                <CodeLine lineNumber={9} delay={1.3}>
                  <span className="ml-4">
                    <CodeVariable>clients</CodeVariable>: <CodeKeyword>120</CodeKeyword>+,
                  </span>
                </CodeLine>
                <CodeLine lineNumber={10} delay={1.4}>
                  {'}'});
                </CodeLine>
                <CodeLine lineNumber={11} delay={1.5}>
                  <span></span>
                </CodeLine>
                <CodeLine lineNumber={12} delay={1.6}>
                  <CodeComment>// Ready for takeoff? Let's launch together.</CodeComment>
                </CodeLine>
              </div>
            </CodeBlock>
          </FadeIn>
        </div>
        <div className="mt-12">
          <FadeIn delay={0.2}>
            <ProcessPipeline className="py-4" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

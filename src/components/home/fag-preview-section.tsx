import { motion } from 'framer-motion';
import { ScrollReveal } from '~/components/animations/scroll-reveal';
import {
  CodeBlock,
  CodeLine,
  CodeKeyword,
  CodeString,
  CodeFunction,
  CodeComment,
} from '~/components/animations/code-block';

const faqs = [
  {
    q: 'How long does a project take?',
    a: '4-12 weeks depending on scope',
  },
  {
    q: "What's included in your pricing?",
    a: 'Design, development, testing, and launch',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes, with flexible maintenance plans',
  },
  {
    q: 'Can you work with our brand?',
    a: 'Absolutely, we integrate seamlessly',
  },
];

export function FAQPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/10">
      <div className="container app-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="font-mono text-sm text-primary mb-4">
                {'// Frequently asked questions'}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Got <span className="text-primary">Questions?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Here are answers to the most common questions we receive. Still curious? Visit our
                contact page for more.
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
                  >
                    <div className="font-mono text-sm text-primary mb-1">Q: {faq.q}</div>
                    <div className="text-muted-foreground text-sm">
                      <span className="text-chart-2">A:</span> {faq.a}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <CodeBlock className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-1">
                <CodeLine lineNumber={1} delay={0.1}>
                  <CodeKeyword>const</CodeKeyword> FAQ = {'{'}
                </CodeLine>
                <CodeLine lineNumber={2} delay={0.2}>
                  <span className="ml-4">
                    <CodeFunction>getAnswer</CodeFunction>: (question) ={'>'} {'{'}
                  </span>
                </CodeLine>
                <CodeLine lineNumber={3} delay={0.3}>
                  <span className="ml-8">
                    <CodeKeyword>switch</CodeKeyword> (question) {'{'}
                  </span>
                </CodeLine>
                <CodeLine lineNumber={4} delay={0.4}>
                  <span className="ml-12">
                    <CodeKeyword>case</CodeKeyword> <CodeString>"timeline"</CodeString>:
                  </span>
                </CodeLine>
                <CodeLine lineNumber={5} delay={0.5}>
                  <span className="ml-16">
                    <CodeKeyword>return</CodeKeyword> <CodeString>"4-12 weeks"</CodeString>;
                  </span>
                </CodeLine>
                <CodeLine lineNumber={6} delay={0.6}>
                  <span className="ml-12">
                    <CodeKeyword>case</CodeKeyword> <CodeString>"pricing"</CodeString>:
                  </span>
                </CodeLine>
                <CodeLine lineNumber={7} delay={0.7}>
                  <span className="ml-16">
                    <CodeKeyword>return</CodeKeyword> <CodeString>"Transparent quotes"</CodeString>;
                  </span>
                </CodeLine>
                <CodeLine lineNumber={8} delay={0.8}>
                  <span className="ml-12">
                    <CodeKeyword>default</CodeKeyword>:
                  </span>
                </CodeLine>
                <CodeLine lineNumber={9} delay={0.9}>
                  <span className="ml-16">
                    <CodeKeyword>return</CodeKeyword> <CodeString>"Contact us!"</CodeString>;
                  </span>
                </CodeLine>
                <CodeLine lineNumber={10} delay={1.0}>
                  <span className="ml-8">{'}'}</span>
                </CodeLine>
                <CodeLine lineNumber={11} delay={1.1}>
                  <span className="ml-4">{'}'},</span>
                </CodeLine>
                <CodeLine lineNumber={12} delay={1.2}>
                  {'}'};
                </CodeLine>
                <CodeLine lineNumber={13} delay={1.3}>
                  <span></span>
                </CodeLine>
                <CodeLine lineNumber={14} delay={1.4}>
                  <CodeComment>// We're here to help!</CodeComment>
                </CodeLine>
              </div>
            </CodeBlock>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

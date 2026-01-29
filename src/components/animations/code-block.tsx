import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function CodeBlock({ children, className = '', delay = 0 }: CodeBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-lg border border-border bg-card/80 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Window controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-chart-4/70" />
          <div className="w-3 h-3 rounded-full bg-primary/70" />
        </div>
        <span className="text-xs text-muted-foreground font-mono ml-2">index.tsx</span>
      </div>
      {/* Code content */}
      <div className="p-4 font-mono text-sm">{children}</div>
    </motion.div>
  );
}

export function CodeLine({
  children,
  lineNumber,
  delay = 0,
}: {
  children: React.ReactNode;
  lineNumber: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-start gap-4"
    >
      <span className="text-muted-foreground/50 select-none w-6 text-right shrink-0">
        {lineNumber}
      </span>
      <span className="flex-1">{children}</span>
    </motion.div>
  );
}

export function CodeKeyword({ children }: { children: React.ReactNode }) {
  return <span className="text-chart-3">{children}</span>;
}

export function CodeString({ children }: { children: React.ReactNode }) {
  return <span className="text-chart-4">{children}</span>;
}

export function CodeFunction({ children }: { children: React.ReactNode }) {
  return <span className="text-chart-2">{children}</span>;
}

export function CodeComment({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground/60 italic">{children}</span>;
}

export function CodeVariable({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

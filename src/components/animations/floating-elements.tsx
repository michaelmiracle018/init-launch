import { motion } from 'framer-motion';

const codeSnippets = [
  '<div>',
  'const',
  '=>',
  '{ }',
  'npm',
  'git',
  '</>',
  'function()',
  'import',
  'export',
  'async',
  'await',
];

export function FloatingCodeElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-primary/10 text-sm md:text-base font-bold select-none"
          style={{
            left: `${(index * 8.5) % 100}%`,
            top: `${(index * 13) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            delay: index * 0.3,
            ease: 'easeInOut',
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export function GlowingOrb({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

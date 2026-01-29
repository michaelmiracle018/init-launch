import { motion } from 'framer-motion';
import { Terminal, Code2, Package, Rocket, ArrowRight, ChevronRight } from 'lucide-react';

const pipelineSteps = [
  { id: 'init', label: 'init', icon: Terminal, description: 'Initialize project' },
  { id: 'build', label: 'build', icon: Code2, description: 'Build components' },
  { id: 'deploy', label: 'deploy', icon: Package, description: 'Deploy to cloud' },
  { id: 'launch', label: 'launch', icon: Rocket, description: 'Launch to users' },
];

export function ProcessPipeline({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
        {pipelineSteps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 border border-border/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
              >
                <step.icon className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm text-foreground">{step.label}()</span>
              </motion.div>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-primary/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>

            {/* Animated arrow between steps */}
            {index < pipelineSteps.length - 1 && (
              <div className="relative mx-2 md:mx-4">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {/* Arrow track */}
                  <div className="w-8 md:w-12 h-0.5 bg-border relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-transparent via-primary to-transparent"
                      animate={{ x: [-16, 48] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'linear',
                      }}
                    />
                  </div>
                  <ChevronRight className="h-4 w-4 text-primary -ml-1" />
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FloatingPipelineArrows() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Multiple flowing arrows across the screen */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center gap-1"
          style={{
            top: `${15 + i * 14}%`,
            left: '-10%',
          }}
          animate={{
            x: ['0%', '120vw'],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        >
          <motion.div
            className="flex items-center gap-1 text-primary/20"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="h-4 w-4" />
            <ArrowRight className="h-4 w-4" />
            <ArrowRight className="h-4 w-4" />
            <span className="font-mono text-xs">
              {['init', 'build', 'deploy', 'launch'][i % 4]}
            </span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function DataFlowAnimation({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-32 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="xMidYMid meet">
        {/* Flow path */}
        <path
          d="M 50 50 Q 200 20, 300 50 T 500 50 T 700 50"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Animated dots along the path */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            r="6"
            fill="hsl(var(--primary))"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ['0%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1,
              ease: 'linear',
            }}
            style={{
              offsetPath: "path('M 50 50 Q 200 20, 300 50 T 500 50 T 700 50')",
            }}
          />
        ))}

        {/* Stage labels */}
        <text x="50" y="85" className="fill-primary font-mono text-xs">
          init
        </text>
        <text x="250" y="85" className="fill-primary font-mono text-xs">
          build
        </text>
        <text x="475" y="85" className="fill-primary font-mono text-xs">
          deploy
        </text>
        <text x="680" y="85" className="fill-primary font-mono text-xs">
          launch
        </text>

        {/* Stage nodes */}
        {[50, 275, 500, 725].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy="50"
            r="8"
            fill="hsl(var(--card))"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

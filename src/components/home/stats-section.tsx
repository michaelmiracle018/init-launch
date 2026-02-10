import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Rocket, Users, Star, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 5, suffix: '+', icon: Rocket },
  { label: 'Happy Clients', value: 5, suffix: '+', icon: Users },
  { label: 'Years Experience', value: 2, suffix: '+', icon: Star },
  { label: 'Client Retention', value: 95, suffix: '%', icon: CheckCircle },
];

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="container app-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20"
              >
                <stat.icon className="h-7 w-7" />
              </motion.div>
              <div className="text-3xl font-bold text-foreground md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-mono">
                <span className="text-primary">//</span> {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

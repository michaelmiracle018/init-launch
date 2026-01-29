import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { InitLaunchLogo } from '../init-launch-logo';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/#aboutUs' },
    // { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/contact' },
    { name: 'Contact', href: '/contact#get--in-touch' },
  ],
  services: [
    { name: 'Web Design', href: '/services#design' },
    { name: 'Web Development', href: '/services#development' },
    { name: 'E-commerce', href: '/services#ecommerce' },
    { name: 'Maintenance', href: '/services#maintenance' },
  ],
  resources: [
    { name: 'Portfolio', href: '/portfolio' },
    // { name: 'Case Studies', href: '/case-studies' },
    // { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/contact#faq' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16 app-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-block">
              <InitLaunchLogo size="md" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              From init to launch – we build exceptional digital experiences that transform your
              ideas into reality.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@greenpixel.studio</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GreenPixel Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageToggle from "./language-toggle";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Navbar() {
  const { t } = useTranslation();
  const scrollToElement = useSmoothScroll();

  const navItems = [
    { href: "#hero", label: t('nav.who_we_are') },
    { href: "#location", label: t('nav.location') },
    { href: "#about", label: t('nav.strategic_resource') },
    { href: "#what-is-perlite", label: t('nav.what_is_perlite') },
    { href: "#mineral-future", label: t('nav.mineral_future') },
    { href: "#investment", label: t('nav.investment') },
    { href: "#key-advantages", label: t('nav.key_advantages') },
    { href: "#strategic-delivery", label: t('nav.strategic_delivery') },
    { href: "#deposits", label: t('nav.deposits') },
    { href: "#bibliography", label: t('nav.bibliography') },
    { href: "#gallery", label: t('nav.gallery') },
    { href: "#contact", label: t('nav.contact') }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    scrollToElement(targetId);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Perlita Babidanchi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            <div className="block lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-2"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {navItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <a
                        href={item.href}
                        className="w-full px-2 py-1.5"
                        onClick={(e) => handleScroll(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
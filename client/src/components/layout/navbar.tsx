import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LanguageToggle from "./language-toggle";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Perlita Babidanchi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
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

          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost"
                  size="icon"
                  className="lg:hidden border-2 border-gray-200 hover:bg-gray-100"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="mt-6 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2.5 text-base text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={(e) => handleScroll(e, item.href)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
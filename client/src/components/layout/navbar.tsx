import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LanguageToggle from "./language-toggle";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
          onClick={(e) => handleScroll(e, item.href)}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-gray-900">
            Perlita Babidanchi
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden p-0"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
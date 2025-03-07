import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageToggle from "./language-toggle";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useState } from "react";

export default function Navbar() {
  const { t } = useTranslation();
  const scrollToElement = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "who-we-are", label: t("nav.whoWeAre", "Who We Are") },
    { href: "location", label: t("nav.location", "Location") },
    { href: "about", label: t("nav.about", "More Than a Mine") },
    { href: "what-is-perlite", label: t("nav.whatIsPerlite", "What is Perlite?") },
    { href: "mineral-future", label: t("nav.mineralFuture", "The mineral of the future") },
    { href: "why-invest", label: t("nav.whyInvest", "Why Invest") },
    { href: "deposits", label: t("nav.deposits", "Deposits") },
    { href: "bibliography", label: t("nav.bibliography", "Bibliography") },
    { href: "gallery", label: t("nav.gallery", "Gallery") },
    { href: "contact", label: t("nav.contact", "Contact us") }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Clicked section:', sectionId); 
    scrollToElement(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Perlita Babidanchi, S.A. de C.V.
          </Link>

          {/* Right section with language toggle and menu */}
          <div className="flex items-center space-x-6">
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10 text-gray-700"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
                <nav className="grid gap-1 p-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="block w-full text-left px-4 py-2.5 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
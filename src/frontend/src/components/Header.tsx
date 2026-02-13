import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-2xl md:text-3xl font-bold text-gradient-iron hover:scale-105 transition-transform"
                    >
                        IRON MAN
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('biography')}
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Biography
                        </button>
                        <button
                            onClick={() => scrollToSection('gallery')}
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Gallery
                        </button>
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden py-4 space-y-4 border-t border-border">
                        <button
                            onClick={() => scrollToSection('biography')}
                            className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors font-medium"
                        >
                            Biography
                        </button>
                        <button
                            onClick={() => scrollToSection('gallery')}
                            className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors font-medium"
                        >
                            Gallery
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}


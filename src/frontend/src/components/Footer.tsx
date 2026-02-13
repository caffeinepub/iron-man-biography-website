import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-24">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-2xl font-bold text-gradient-iron">IRON MAN</p>
                        <p className="text-sm text-muted-foreground mt-1">
                            A tribute to Earth's greatest defender
                        </p>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                        <p className="flex items-center gap-2 justify-center">
                            © 2025. Built with{' '}
                            <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
                            <a
                                href="https://caffeine.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-secondary transition-colors font-medium"
                            >
                                caffeine.ai
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
                    <p>
                        This is a fan-made tribute website. Iron Man and related characters are
                        property of Marvel Entertainment.
                    </p>
                </div>
            </div>
        </footer>
    );
}


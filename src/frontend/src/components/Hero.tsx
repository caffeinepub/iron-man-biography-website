import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
    const scrollToBiography = () => {
        const element = document.getElementById('biography');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(var(--secondary)/0.1),transparent_50%)]" />
            </div>

            {/* Hexagon pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 space-y-8 max-w-5xl mx-auto">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-iron animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        TONY STARK
                    </h1>
                    <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <p className="text-2xl md:text-4xl font-semibold text-secondary glow-gold animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                        Iron Man
                    </p>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    Genius. Billionaire. Playboy. Philanthropist. The man who transformed himself from weapons manufacturer to Earth's greatest defender.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <Button
                        size="lg"
                        onClick={scrollToBiography}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                        Explore His Story
                        <ArrowDown className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BiographySectionProps {
    title: string;
    content: string;
    index: number;
}

export default function BiographySection({ title, content, index }: BiographySectionProps) {
    const isEven = index % 2 === 0;

    // Static images for each section
    const sectionImages: Record<string, string> = {
        'Early Life': '/assets/generated/young-tony-stark.dim_800x600.jpg',
        'Becoming Iron Man': '/assets/generated/arc-reactor-closeup.dim_600x600.jpg',
        'Major Battles': '/assets/generated/tony-stark-presentation.dim_800x600.jpg',
        'Legacy': '/assets/generated/tony-stark-presentation.dim_800x600.jpg',
    };

    const imageUrl = sectionImages[title];

    return (
        <div
            className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 items-center animate-in fade-in slide-in-from-bottom-8 duration-700`}
        >
            {/* Image */}
            {imageUrl && (
                <div className="w-full lg:w-1/2">
                    <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="w-full lg:w-1/2">
                <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 card-glow">
                    <CardHeader>
                        <CardTitle className="text-3xl md:text-4xl font-bold text-gradient-iron">
                            {title}
                        </CardTitle>
                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            {content}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}


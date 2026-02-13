import { useState } from 'react';
import type { GalleryImage } from '../backend';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface GalleryProps {
    images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    const handleImageLoad = (id: string) => {
        setLoadedImages((prev) => new Set(prev).add(id));
    };

    // Static gallery images from assets
    const staticGallery = [
        {
            id: 'young-tony',
            title: 'Young Tony Stark',
            description: 'Tony Stark in his early years, showing the genius that would change the world',
            src: '/assets/generated/young-tony-stark.dim_800x600.jpg',
        },
        {
            id: 'presentation',
            title: 'The Visionary',
            description: 'Tony Stark presenting his revolutionary technology',
            src: '/assets/generated/tony-stark-presentation.dim_800x600.jpg',
        },
        {
            id: 'arc-reactor',
            title: 'Arc Reactor',
            description: 'The Arc Reactor - the heart of Iron Man and symbol of innovation',
            src: '/assets/generated/arc-reactor-closeup.dim_600x600.jpg',
        },
    ];

    const displayImages = images.length > 0 ? images : staticGallery;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayImages.map((item) => {
                    const imageUrl = 'src' in item ? item.src : item.image.getDirectURL();
                    const isLoaded = loadedImages.has(item.id);

                    return (
                        <Card
                            key={item.id}
                            className="group cursor-pointer overflow-hidden border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 card-glow"
                            onClick={() => setSelectedImage(item as GalleryImage)}
                        >
                            <CardContent className="p-0 relative">
                                {!isLoaded && (
                                    <Skeleton className="absolute inset-0 w-full h-64" />
                                )}
                                <img
                                    src={imageUrl}
                                    alt={item.title}
                                    className={`w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 ${
                                        isLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={() => handleImageLoad(item.id)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-foreground/80 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Image Dialog */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl">
                    {selectedImage && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-2xl text-gradient-iron">
                                    {selectedImage.title}
                                </DialogTitle>
                                <DialogDescription className="text-base">
                                    {selectedImage.description}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                                <img
                                    src={'src' in selectedImage ? (selectedImage as any).src : selectedImage.image.getDirectURL()}
                                    alt={selectedImage.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}


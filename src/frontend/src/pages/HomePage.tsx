import { useGetBiographySections, useGetGalleryImages } from '../hooks/useQueries';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BiographySection from '../components/BiographySection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomePage() {
    const { data: sections, isLoading: sectionsLoading } = useGetBiographySections();
    const { data: galleryImages, isLoading: galleryLoading } = useGetGalleryImages();

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Hero />
            
            <main className="container mx-auto px-4 py-16 space-y-24">
                {/* Biography Sections */}
                <section id="biography" className="space-y-16">
                    {sectionsLoading ? (
                        <>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="space-y-4">
                                    <Skeleton className="h-12 w-64" />
                                    <Skeleton className="h-32 w-full" />
                                </div>
                            ))}
                        </>
                    ) : (
                        sections?.map((section, index) => (
                            <BiographySection
                                key={section.title}
                                title={section.title}
                                content={section.content}
                                index={index}
                            />
                        ))
                    )}
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gradient-iron">
                            Gallery
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Key moments from the life of Tony Stark
                        </p>
                    </div>
                    
                    {galleryLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <Skeleton key={i} className="h-64 w-full" />
                            ))}
                        </div>
                    ) : (
                        <Gallery images={galleryImages || []} />
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}


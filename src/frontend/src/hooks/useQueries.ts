import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BiographySection, GalleryImage } from '../backend';

export function useGetBiographySections() {
    const { actor, isFetching } = useActor();

    return useQuery<BiographySection[]>({
        queryKey: ['biography-sections'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getBiographySections();
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetGalleryImages() {
    const { actor, isFetching } = useActor();

    return useQuery<GalleryImage[]>({
        queryKey: ['gallery-images'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getGalleryImages();
        },
        enabled: !!actor && !isFetching,
    });
}


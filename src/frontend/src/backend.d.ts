import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface BiographySection {
    title: string;
    content: string;
}
export interface GalleryImage {
    id: string;
    title: string;
    description: string;
    image: ExternalBlob;
}
export interface backendInterface {
    addGalleryImage(id: string, title: string, description: string, image: ExternalBlob): Promise<void>;
    getBiographySections(): Promise<Array<BiographySection>>;
    getGalleryImages(): Promise<Array<GalleryImage>>;
    updateBiographySection(title: string, content: string): Promise<void>;
}

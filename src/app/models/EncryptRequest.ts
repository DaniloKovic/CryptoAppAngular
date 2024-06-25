export interface EncryptRequest {
    plainText: string;
    algorithm: number; // ili koristite odgovarajući Enum
    key: string;
}
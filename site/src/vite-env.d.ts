/// <reference types="vite/client" />

interface ImportMetaEnv
	extends Readonly<Record<string, string | boolean | undefined>> {
	readonly VITE_API_URL: string | undefined;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

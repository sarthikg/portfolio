/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SMTP_USERNAME: string;
  readonly SMTP_PASSWORD: string;
  readonly SMTP_HOST: string;
  readonly SMTP_PORT: string;

  readonly FROM_ADDRESS: string;

  readonly MUSIC_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

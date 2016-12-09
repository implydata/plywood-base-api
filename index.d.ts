import * as Promise from 'any-promise';
import { Readable } from 'stream';

export interface Location {
  hostname: string;
  port?: number;
}

export interface PlywoodLocator {
  (): Promise<Location>;
}

export interface DatabaseRequest<T> {
  query: T;
  context?: { [key: string]: any };
}

export interface PlywoodRequester<T> {
  (request: DatabaseRequest<T>): Readable;
}

export function basicLocator(host: string, defaultPort: number): PlywoodLocator;

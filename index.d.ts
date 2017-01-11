import { ReadableStream } from 'readable-stream';
import * as Promise from 'any-promise';

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
  (request: DatabaseRequest<T>): ReadableStream;
}

export function basicLocator(host: string, defaultPort: number): PlywoodLocator;

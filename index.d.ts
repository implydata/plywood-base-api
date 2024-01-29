/*
 * Copyright 2016-2021 Imply Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ReadableStream } from 'readable-stream';

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

export function hostToLocation(host: string, defaultPort: number): Location;

export function basicLocator(host: string, defaultPort: number): PlywoodLocator;

/*
Possible values:
{
  type: 'basic-auth'
  username: 'admin'
  password: 'druid'
}
{
  type: 'imply-token-hmac'
  implyToken: 'fw3423rfff434f34r43r'
  implyHmac: 'ff434f34'
}
{
  type: 'bearer-auth'
  implyIdentityToken: 'Bearer abcd1234efgh5678'
}
 */
export type AuthToken = BasicAuthToken | HmacAuthToken | BearerAuthToken;

export interface BasicAuthToken {
  type: 'basic-auth',
  username: string,
  password: string,
  targets?: string[],
}

export interface HmacAuthToken {
  type: 'imply-token-hmac',
  implyToken: string,
  implyHmac: string,
}

export interface BearerAuthToken {
  type: 'bearer-auth',
  implyIdentityToken: string,
}

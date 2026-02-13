// Type definitions for fetch.js

/**
 * Options for fetchRecorder
 */
export interface FetchRecorderOptions {
  /**
   * Base fetch implementation to use. Defaults to globalThis.fetch
   */
  fetch?: typeof fetch
}

/**
 * Creates a fetch implementation that records all requests to a log array
 * @param log - Array to append request/response logs to
 * @param options - Optional configuration
 * @returns A fetch function that records requests
 */
export function fetchRecorder(
  log: any[],
  options?: FetchRecorderOptions
): typeof fetch

/**
 * Creates a fetch implementation that replays requests from a log array
 * @param log - Array of recorded request/response logs
 * @returns A fetch function that replays recorded requests
 */
export function fetchReplayer(log: any[]): typeof fetch

/**
 * Creates a custom fetch implementation using a lookup function
 * @param lookup - Function to lookup request/response data
 * @param fallback - Optional fallback fetch function
 * @returns A fetch function
 */
export function fetchApi(
  lookup: (resource: RequestInfo | URL, options?: RequestInit) => Promise<any>,
  fallback?: typeof fetch
): typeof fetch

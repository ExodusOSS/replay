// Re-export standard DOM and Node.js types for better TypeScript integration

// ============================================================================
// Standard Web API Types (re-exported from DOM/Web standards)
// ============================================================================

/**
 * Re-export of the standard Fetch API Response type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
export type Response = globalThis.Response

/**
 * Re-export of the standard Fetch API Request type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Request
 */
export type Request = globalThis.Request

/**
 * Re-export of the standard Fetch API Headers type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Headers
 */
export type Headers = globalThis.Headers

/**
 * Re-export of the standard Fetch API RequestInfo type
 */
export type RequestInfo = globalThis.RequestInfo

/**
 * Re-export of the standard Fetch API RequestInit type
 */
export type RequestInit = globalThis.RequestInit

/**
 * Re-export of the standard Blob type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Blob
 */
export type Blob = globalThis.Blob

/**
 * Re-export of the standard ReadableStream type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
 */
export type ReadableStream<R = any> = globalThis.ReadableStream<R>

// ============================================================================
// WebSocket and Event Types (re-exported from DOM/Web standards)
// ============================================================================

/**
 * Re-export of the standard WebSocket type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 */
export type WebSocket = globalThis.WebSocket

/**
 * Re-export of the standard MessageEvent type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent
 */
export type MessageEvent<T = any> = globalThis.MessageEvent<T>

/**
 * Re-export of the standard Event type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event
 */
export type Event = globalThis.Event

/**
 * Re-export of the standard EventTarget type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
 */
export type EventTarget = globalThis.EventTarget

/**
 * Re-export of the standard CloseEvent type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
 */
export type CloseEvent = globalThis.CloseEvent

/**
 * Re-export of the standard ErrorEvent type
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent
 */
export type ErrorEvent = globalThis.ErrorEvent

// ============================================================================
// Binary Data Types (re-exported from ECMAScript/Web standards)
// ============================================================================

/**
 * Re-export of the standard ArrayBuffer type
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
 */
export type ArrayBuffer = globalThis.ArrayBuffer

/**
 * Re-export of the standard Uint8Array type
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
 */
export type Uint8Array = globalThis.Uint8Array

/**
 * Re-export of the standard DataView type
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
 */
export type DataView = globalThis.DataView

// ============================================================================
// Package-specific function types
// ============================================================================

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

/**
 * Options for WebSocketRecorder
 */
export interface WebSocketRecorderOptions {
  /**
   * Base WebSocket implementation to use. Defaults to globalThis.WebSocket
   */
  WebSocket?: typeof WebSocket
}

/**
 * Creates a WebSocket class that records all sessions to a log array
 * @param log - Array to append session logs to
 * @param options - Optional configuration
 * @returns A WebSocket class that records sessions
 */
export function WebSocketRecorder(
  log: any[],
  options?: WebSocketRecorderOptions
): typeof WebSocket

/**
 * Options for WebSocketReplayer
 */
export interface WebSocketReplayerOptions {
  /**
   * Delay interval for replaying events
   * - 0: immediate (default)
   * - Infinity: match original timing
   * - number: maximum delay between events
   */
  interval?: number
}

/**
 * Creates a WebSocket class that replays sessions from a log array
 * @param log - Array of recorded session logs
 * @param options - Optional configuration
 * @returns A WebSocket class that replays recorded sessions
 */
export function WebSocketReplayer(
  log: any[],
  options?: WebSocketReplayerOptions
): typeof WebSocket

/**
 * Options for prettyJSON formatting
 */
export interface PrettyJSONOptions {
  /**
   * Maximum width for inline formatting. Default: 120
   */
  width?: number
}

/**
 * Pretty-prints JSON data for human-readable logs
 * @param data - Data to format
 * @param options - Formatting options
 * @returns Pretty-printed JSON string
 */
export function prettyJSON(data: any, options?: PrettyJSONOptions): string

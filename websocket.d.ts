// Type definitions for websocket.js

// Re-export standard WebSocket and Event types
export type WebSocket = globalThis.WebSocket
export type MessageEvent<T = any> = globalThis.MessageEvent<T>
export type Event = globalThis.Event
export type EventTarget = globalThis.EventTarget
export type CloseEvent = globalThis.CloseEvent
export type ErrorEvent = globalThis.ErrorEvent

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

// Type definitions for util.js

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


// Stub: connectorText types are internal Anthropic types not included in this fork.

export interface ConnectorTextBlock {
  type: 'connector_text'
  text: string
  connector_id?: string
}

export interface ConnectorTextDelta {
  type: 'connector_text_delta'
  text: string
}

export function isConnectorTextBlock(block: unknown): block is ConnectorTextBlock {
  return (
    typeof block === 'object' &&
    block !== null &&
    'type' in block &&
    (block as { type: string }).type === 'connector_text'
  )
}

import type { BetaUsage as Usage } from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
import type { AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS } from 'src/services/analytics/index.js'
import { logEvent } from 'src/services/analytics/index.js'
import { setHasUnknownModelCost } from '../bootstrap/state.js'
import { isFastModeEnabled } from './fastMode.js'
import {
  CLAUDE_3_5_HAIKU_CONFIG,
  CLAUDE_3_5_V2_SONNET_CONFIG,
  CLAUDE_3_7_SONNET_CONFIG,
  CLAUDE_HAIKU_4_5_CONFIG,
  CLAUDE_OPUS_4_1_CONFIG,
  CLAUDE_OPUS_4_5_CONFIG,
  CLAUDE_OPUS_4_6_CONFIG,
  CLAUDE_OPUS_4_CONFIG,
  CLAUDE_SONNET_4_5_CONFIG,
  CLAUDE_SONNET_4_6_CONFIG,
  CLAUDE_SONNET_4_CONFIG,
} from './model/configs.js'
import {
  firstPartyNameToCanonical,
  getCanonicalName,
  getDefaultMainLoopModelSetting,
  type ModelShortName,
} from './model/model.js'

// @see https://platform.claude.com/docs/en/about-claude/pricing
export type ModelCosts = {
  inputTokens: number
  outputTokens: number
  promptCacheWriteTokens: number
  promptCacheReadTokens: number
  webSearchRequests: number
}

// Standard pricing tier for Sonnet models: $3 input / $15 output per Mtok
export const COST_TIER_3_15 = {
  inputTokens: 3,
  outputTokens: 15,
  promptCacheWriteTokens: 3.75,
  promptCacheReadTokens: 0.3,
  webSearchRequests: 0.01,
} as const satisfies ModelCosts

// Pricing tier for Opus 4/4.1: $15 input / $75 output per Mtok
export const COST_TIER_15_75 = {
  inputTokens: 15,
  outputTokens: 75,
  promptCacheWriteTokens: 18.75,
  promptCacheReadTokens: 1.5,
  webSearchRequests: 0.01,
} as const satisfies ModelCosts

// Pricing tier for Opus 4.5: $5 input / $25 output per Mtok
export const COST_TIER_5_25 = {
  inputTokens: 5,
  outputTokens: 25,
  promptCacheWriteTokens: 6.25,
  promptCacheReadTokens: 0.5,
  webSearchRequests: 0.01,
} as const satisfies ModelCosts

// Fast mode pricing for Opus 4.6: $30 input / $150 output per Mtok
export const COST_TIER_30_150 = {
  inputTokens: 30,
  outputTokens: 150,
  promptCacheWriteTokens: 37.5,
  promptCacheReadTokens: 3,
  webSearchRequests: 0.01,
} as const satisfies ModelCosts

// Pricing for Haiku 3.5: $0.80 input / $4 output per Mtok
export const COST_HAIKU_35 = {
  inputTokens: 0.8,
  outputTokens: 4,
  promptCacheWriteTokens: 1,
  promptCacheReadTokens: 0.08,
  webSearchRequests: 0.01,
} as const satisfies ModelCosts

// Pricing for Haiku 4.5: $1 input / $5 output per Mtok
export const COST_HAIKU_45 = {
  inputTokens: 1,
  outputTokens: 5,
  promptCacheWriteTokens: 1.25,
  promptCacheReadTokens: 0.1,
  webSearchRequests: 0.01,
} as const satisfies ModelCosts

// =====================================================
// OpenAI pricing (per MTok) — https://openai.com/api/pricing/
// =====================================================
export const COST_GPT4O: ModelCosts = {
  inputTokens: 2.5, outputTokens: 10,
  promptCacheWriteTokens: 2.5, promptCacheReadTokens: 1.25, webSearchRequests: 0,
}
export const COST_GPT4O_MINI: ModelCosts = {
  inputTokens: 0.15, outputTokens: 0.6,
  promptCacheWriteTokens: 0.15, promptCacheReadTokens: 0.075, webSearchRequests: 0,
}
export const COST_O3: ModelCosts = {
  inputTokens: 2, outputTokens: 8,
  promptCacheWriteTokens: 2, promptCacheReadTokens: 1, webSearchRequests: 0,
}
export const COST_O3_MINI: ModelCosts = {
  inputTokens: 1.1, outputTokens: 4.4,
  promptCacheWriteTokens: 1.1, promptCacheReadTokens: 0.55, webSearchRequests: 0,
}
export const COST_O4_MINI: ModelCosts = {
  inputTokens: 1.1, outputTokens: 4.4,
  promptCacheWriteTokens: 1.1, promptCacheReadTokens: 0.55, webSearchRequests: 0,
}
export const COST_GPT4_TURBO: ModelCosts = {
  inputTokens: 10, outputTokens: 30,
  promptCacheWriteTokens: 10, promptCacheReadTokens: 5, webSearchRequests: 0,
}
export const COST_O1: ModelCosts = {
  inputTokens: 15, outputTokens: 60,
  promptCacheWriteTokens: 15, promptCacheReadTokens: 7.5, webSearchRequests: 0,
}
export const COST_O1_MINI: ModelCosts = {
  inputTokens: 1.1, outputTokens: 4.4,
  promptCacheWriteTokens: 1.1, promptCacheReadTokens: 0.55, webSearchRequests: 0,
}
export const COST_CODEX_MINI: ModelCosts = {
  inputTokens: 1.5, outputTokens: 6,
  promptCacheWriteTokens: 1.5, promptCacheReadTokens: 0.75, webSearchRequests: 0,
}

// =====================================================
// Google Gemini pricing — https://ai.google.dev/pricing
// =====================================================
export const COST_GEMINI_2_FLASH: ModelCosts = {
  inputTokens: 0.1, outputTokens: 0.4,
  promptCacheWriteTokens: 0.1, promptCacheReadTokens: 0.025, webSearchRequests: 0,
}
export const COST_GEMINI_2_5_PRO: ModelCosts = {
  inputTokens: 1.25, outputTokens: 10,
  promptCacheWriteTokens: 1.25, promptCacheReadTokens: 0.31, webSearchRequests: 0,
}
export const COST_GEMINI_2_5_FLASH: ModelCosts = {
  inputTokens: 0.15, outputTokens: 0.6,
  promptCacheWriteTokens: 0.15, promptCacheReadTokens: 0.0375, webSearchRequests: 0,
}

// External provider model costs lookup
// OpenAI GPT-4.1 pricing: $2 input / $8 output per MTok
export const COST_GPT41: ModelCosts = {
  inputTokens: 2, outputTokens: 8,
  promptCacheWriteTokens: 2, promptCacheReadTokens: 0.5, webSearchRequests: 0,
}
// OpenAI GPT-4.1 mini: $0.40 input / $1.60 output per MTok
export const COST_GPT41_MINI: ModelCosts = {
  inputTokens: 0.4, outputTokens: 1.6,
  promptCacheWriteTokens: 0.4, promptCacheReadTokens: 0.1, webSearchRequests: 0,
}
// OpenAI GPT-4.1 nano: $0.10 input / $0.40 output per MTok
export const COST_GPT41_NANO: ModelCosts = {
  inputTokens: 0.1, outputTokens: 0.4,
  promptCacheWriteTokens: 0.1, promptCacheReadTokens: 0.025, webSearchRequests: 0,
}

const EXTERNAL_MODEL_COSTS: Record<string, ModelCosts> = {
  // OpenAI GPT-4.1 family
  'gpt-4.1': COST_GPT41,
  'gpt-4.1-2025-04-14': COST_GPT41,
  'gpt-4.1-mini': COST_GPT41_MINI,
  'gpt-4.1-mini-2025-04-14': COST_GPT41_MINI,
  'gpt-4.1-nano': COST_GPT41_NANO,
  'gpt-4.1-nano-2025-04-14': COST_GPT41_NANO,
  // OpenAI GPT-4o family
  'gpt-4o': COST_GPT4O,
  'gpt-4o-2024-08-06': COST_GPT4O,
  'gpt-4o-2024-11-20': COST_GPT4O,
  'gpt-4o-mini': COST_GPT4O_MINI,
  'gpt-4o-mini-2024-07-18': COST_GPT4O_MINI,
  'gpt-4-turbo': COST_GPT4_TURBO,
  'gpt-4-turbo-2024-04-09': COST_GPT4_TURBO,
  'o1': COST_O1,
  'o1-2024-12-17': COST_O1,
  'o1-mini': COST_O1_MINI,
  'o1-mini-2024-09-12': COST_O1_MINI,
  'o3': COST_O3,
  'o3-2025-04-16': COST_O3,
  'o3-mini': COST_O3_MINI,
  'o3-mini-2025-01-31': COST_O3_MINI,
  'o4-mini': COST_O4_MINI,
  'o4-mini-2025-04-16': COST_O4_MINI,
  'codex-mini-latest': COST_CODEX_MINI,
  // Gemini
  'gemini-2.0-flash': COST_GEMINI_2_FLASH,
  'gemini-2.0-flash-exp': COST_GEMINI_2_FLASH,
  'gemini-2.5-pro': COST_GEMINI_2_5_PRO,
  'gemini-2.5-pro-preview-05-06': COST_GEMINI_2_5_PRO,
  'gemini-2.5-flash': COST_GEMINI_2_5_FLASH,
  'gemini-2.5-flash-preview-04-17': COST_GEMINI_2_5_FLASH,
  // Ollama — local, no cost
}

const DEFAULT_UNKNOWN_MODEL_COST = COST_TIER_5_25

/**
 * Get the cost tier for Opus 4.6 based on fast mode.
 */
export function getOpus46CostTier(fastMode: boolean): ModelCosts {
  if (isFastModeEnabled() && fastMode) {
    return COST_TIER_30_150
  }
  return COST_TIER_5_25
}

// @[MODEL LAUNCH]: Add a pricing entry for the new model below.
// Costs from https://platform.claude.com/docs/en/about-claude/pricing
// Web search cost: $10 per 1000 requests = $0.01 per request
export const MODEL_COSTS: Record<ModelShortName, ModelCosts> = {
  [firstPartyNameToCanonical(CLAUDE_3_5_HAIKU_CONFIG.firstParty)]:
    COST_HAIKU_35,
  [firstPartyNameToCanonical(CLAUDE_HAIKU_4_5_CONFIG.firstParty)]:
    COST_HAIKU_45,
  [firstPartyNameToCanonical(CLAUDE_3_5_V2_SONNET_CONFIG.firstParty)]:
    COST_TIER_3_15,
  [firstPartyNameToCanonical(CLAUDE_3_7_SONNET_CONFIG.firstParty)]:
    COST_TIER_3_15,
  [firstPartyNameToCanonical(CLAUDE_SONNET_4_CONFIG.firstParty)]:
    COST_TIER_3_15,
  [firstPartyNameToCanonical(CLAUDE_SONNET_4_5_CONFIG.firstParty)]:
    COST_TIER_3_15,
  [firstPartyNameToCanonical(CLAUDE_SONNET_4_6_CONFIG.firstParty)]:
    COST_TIER_3_15,
  [firstPartyNameToCanonical(CLAUDE_OPUS_4_CONFIG.firstParty)]: COST_TIER_15_75,
  [firstPartyNameToCanonical(CLAUDE_OPUS_4_1_CONFIG.firstParty)]:
    COST_TIER_15_75,
  [firstPartyNameToCanonical(CLAUDE_OPUS_4_5_CONFIG.firstParty)]:
    COST_TIER_5_25,
  [firstPartyNameToCanonical(CLAUDE_OPUS_4_6_CONFIG.firstParty)]:
    COST_TIER_5_25,
}

/**
 * Calculates the USD cost based on token usage and model cost configuration
 */
function tokensToUSDCost(modelCosts: ModelCosts, usage: Usage): number {
  return (
    (usage.input_tokens / 1_000_000) * modelCosts.inputTokens +
    (usage.output_tokens / 1_000_000) * modelCosts.outputTokens +
    ((usage.cache_read_input_tokens ?? 0) / 1_000_000) *
      modelCosts.promptCacheReadTokens +
    ((usage.cache_creation_input_tokens ?? 0) / 1_000_000) *
      modelCosts.promptCacheWriteTokens +
    (usage.server_tool_use?.web_search_requests ?? 0) *
      modelCosts.webSearchRequests
  )
}

export function getModelCosts(model: string, usage: Usage): ModelCosts {
  // Guard against undefined/null model names
  if (!model) return DEFAULT_UNKNOWN_MODEL_COST
  // bett-code: Ollama is free (local)
  if (process.env.BETT_CODE_PROVIDER === 'ollama') {
    return { inputTokens: 0, outputTokens: 0, promptCacheWriteTokens: 0, promptCacheReadTokens: 0, webSearchRequests: 0 }
  }
  // bett-code: check external provider models first
  const externalCosts = EXTERNAL_MODEL_COSTS[model]
  if (externalCosts) return externalCosts
  // Also check with prefix stripped (e.g. "openai/gpt-4o" → "gpt-4o")
  const stripped = model.includes('/') ? model.split('/').pop()! : ''
  if (stripped && EXTERNAL_MODEL_COSTS[stripped]) return EXTERNAL_MODEL_COSTS[stripped]
  // bett-code: for external providers, return default cost instead of crashing
  if (process.env.BETT_CODE_PROVIDER && process.env.BETT_CODE_PROVIDER !== 'anthropic') {
    return DEFAULT_UNKNOWN_MODEL_COST
  }

  const shortName = getCanonicalName(model)

  // Check if this is an Opus 4.6 model with fast mode active.
  if (
    shortName === firstPartyNameToCanonical(CLAUDE_OPUS_4_6_CONFIG.firstParty)
  ) {
    const isFastMode = usage.speed === 'fast'
    return getOpus46CostTier(isFastMode)
  }

  const costs = MODEL_COSTS[shortName]
  if (!costs) {
    trackUnknownModelCost(model, shortName)
    return (
      MODEL_COSTS[getCanonicalName(getDefaultMainLoopModelSetting())] ??
      DEFAULT_UNKNOWN_MODEL_COST
    )
  }
  return costs
}

function trackUnknownModelCost(model: string, shortName: ModelShortName): void {
  logEvent('tengu_unknown_model_cost', {
    model: model as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    shortName:
      shortName as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  })
  setHasUnknownModelCost()
}

// Calculate the cost of a query in US dollars.
// If the model's costs are not found, use the default model's costs.
export function calculateUSDCost(resolvedModel: string, usage: Usage): number {
  try {
    const modelCosts = getModelCosts(resolvedModel, usage)
    return tokensToUSDCost(modelCosts, usage)
  } catch {
    return 0
  }
}

/**
 * Calculate cost from raw token counts without requiring a full BetaUsage object.
 * Useful for side queries (e.g. classifier) that track token counts independently.
 */
export function calculateCostFromTokens(
  model: string,
  tokens: {
    inputTokens: number
    outputTokens: number
    cacheReadInputTokens: number
    cacheCreationInputTokens: number
  },
): number {
  const usage: Usage = {
    input_tokens: tokens.inputTokens,
    output_tokens: tokens.outputTokens,
    cache_read_input_tokens: tokens.cacheReadInputTokens,
    cache_creation_input_tokens: tokens.cacheCreationInputTokens,
  } as Usage
  return calculateUSDCost(model, usage)
}

function formatPrice(price: number): string {
  // Format price: integers without decimals, others with 2 decimal places
  // e.g., 3 -> "$3", 0.8 -> "$0.80", 22.5 -> "$22.50"
  if (Number.isInteger(price)) {
    return `$${price}`
  }
  return `$${price.toFixed(2)}`
}

/**
 * Format model costs as a pricing string for display
 * e.g., "$3/$15 per Mtok"
 */
export function formatModelPricing(costs: ModelCosts): string {
  return `${formatPrice(costs.inputTokens)}/${formatPrice(costs.outputTokens)} per Mtok`
}

/**
 * Get formatted pricing string for a model
 * Accepts either a short name or full model name
 * Returns undefined if model is not found
 */
export function getModelPricingString(model: string): string | undefined {
  const shortName = getCanonicalName(model)
  const costs = MODEL_COSTS[shortName]
  if (!costs) return undefined
  return formatModelPricing(costs)
}

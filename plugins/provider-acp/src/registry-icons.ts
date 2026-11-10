const PLUGIN_ID = "provider-acp";

export const REGISTRY_ICON_AGENT_IDS: readonly string[] = [
  "agoragentic-acp",
  "amp-acp",
  "antigravity-acp",
  "auggie",
  "autohand",
  "claude-acp",
  "cline",
  "codebuddy-code",
  "codex-acp",
  "cortex-code",
  "corust-agent",
  "crow-cli",
  "cursor",
  "deepagents",
  "devin",
  "dimcode",
  "dirac",
  "factory-droid",
  "fast-agent",
  "gemini",
  "github-copilot-cli",
  "glm-acp-agent",
  "goose",
  "grok-build",
  "harn",
  "junie",
  "kilo",
  "kimchi",
  "kimi",
  "minimax-code",
  "minion-code",
  "mistral-vibe",
  "nova",
  "opencode",
  "pi-acp",
  "poolside",
  "qoder",
  "qwen-code",
  "sigit",
  "stakpak",
  "vtcode",
];

const registryIconAgentIds = new Set(REGISTRY_ICON_AGENT_IDS);

export const SHIPPED_AGENT_ICON_NAMES: readonly string[] = [
  "cursor",
  "opencode",
  "omp",
  "grok",
  "hermes-agent",
];

const declaredIconNames = new Set([
  ...SHIPPED_AGENT_ICON_NAMES,
  ...REGISTRY_ICON_AGENT_IDS.map((agentId) => `registry-${agentId}`),
]);

export function declaredAcpIconNames(): ReadonlySet<string> {
  return declaredIconNames;
}

const HOST_GLYPH_PATTERN = /^[A-Z][A-Za-z0-9]*$/u;

export function isCustomAgentIcon(icon: string): boolean {
  if (HOST_GLYPH_PATTERN.test(icon)) {
    return true;
  }
  const prefix = `${PLUGIN_ID}/`;
  return (
    icon.startsWith(prefix) && declaredIconNames.has(icon.slice(prefix.length))
  );
}

export function registryAgentIcon(agentId: string): string | undefined {
  return registryIconAgentIds.has(agentId)
    ? `${PLUGIN_ID}/registry-${agentId}`
    : undefined;
}

/** Deep-merge plain objects and arrays (arrays from source replace target). */
export function mergeDeep<T extends Record<string, unknown>>(target: T, source: Record<string, unknown>): T {
  const out = { ...target } as Record<string, unknown>;

  for (const key of Object.keys(source)) {
    const srcVal = source[key];
    const tgtVal = out[key];

    if (
      srcVal &&
      typeof srcVal === 'object' &&
      !Array.isArray(srcVal) &&
      tgtVal &&
      typeof tgtVal === 'object' &&
      !Array.isArray(tgtVal)
    ) {
      out[key] = mergeDeep(tgtVal as Record<string, unknown>, srcVal as Record<string, unknown>);
    } else if (srcVal !== undefined) {
      out[key] = srcVal;
    }
  }

  return out as T;
}

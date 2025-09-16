export const gaEvent = (a: string, p: Record<string, any> = {}) =>
  typeof window !== "undefined" && (window as any).gtag?.("event", a, p);

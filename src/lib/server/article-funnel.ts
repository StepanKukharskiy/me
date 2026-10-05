export const articlePath = '/ai-work/excel-to-powerpoint-automation';
export function articleCampaign(url: URL): string {
  const explicit = url.searchParams.get('campaign');
  if (['medium-excel-to-powerpoint-v1', 'medium-excel-to-powerpoint-v2', 'guide-excel-to-powerpoint-v1', 'guide-excel-to-powerpoint-v2', 'medium-excel-to-powerpoint-v3', 'personal-excel-to-powerpoint-v3'].includes(explicit || '')) return explicit!;
  if (url.searchParams.get('utm_source') === 'medium' && url.searchParams.get('utm_medium') === 'article' && url.searchParams.get('utm_campaign') === 'excel-to-powerpoint-v3') return 'medium-excel-to-powerpoint-v3';
  return 'personal-excel-to-powerpoint-v3';
}
export function articleEvent(request: Request, url: URL, enabled: boolean, now = new Date()) {
  if (!enabled || url.pathname !== articlePath || request.method !== 'GET') return null;
  const h = request.headers;
  if (h.get('dnt') === '1' || h.get('sec-gpc') === '1' || /bot|crawler|spider|preview|headless|curl|wget|python|node|undici/i.test(h.get('user-agent') || '') || h.get('purpose') === 'prefetch' || h.get('sec-purpose')?.includes('prefetch')) return null;
  return { schema: 'skill-funnel.v1', day: now.toISOString().slice(0, 10), skill: 'excel-to-powerpoint', campaign: articleCampaign(url), event: 'article_request' };
}

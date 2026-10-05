import { articleCampaign } from '$lib/server/article-funnel';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ url, setHeaders }) => {
  setHeaders({ 'cache-control': 'no-store' });
  return { skillUrl: 'https://task-relay-website-production.up.railway.app/skills/excel-to-powerpoint?campaign=' + articleCampaign(url) };
};

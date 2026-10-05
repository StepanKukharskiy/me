import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { articleEvent } from '$lib/server/article-funnel';
export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  if (response.status === 200 && response.headers.get('content-type')?.includes('text/html')) {
    const record = articleEvent(event.request, event.url, env.PERSONAL_WEBSITE_ANALYTICS !== 'off');
    if (record) console.log(JSON.stringify(record));
  }
  return response;
};

<svelte:head>
	<title>Site activity privacy | Stepan Kukharskiy</title>
	<link rel="canonical" href="https://stepankukharskiy.com/ai-work/privacy" />
</svelte:head>

<h1>Site activity and privacy</h1>
<h2>Cookie-free visitor estimates</h2>
<p>
	This site counts page views, estimates daily visitors and looks up their countries using a local
	IP-to-country database. A small first-party script sends the page path to this site's server when
	a page opens or you navigate to another page. It does not poll in the background, set cookies, use
	browser storage or contact an external analytics service.
</p>
<p>
	The server processes your IP address and browser user-agent in memory. To recognize repeat visits
	on the same day, it creates a hash from those values using a random daily secret. Only that hash,
	the daily secret and aggregate counts are stored in a SQLite database on this site's Railway
	volume. Raw IP addresses and user-agent strings are not stored in the analytics database. Old
	hashes and secrets are deleted when the first request arrives on a new day; daily aggregate counts
	are retained. Days follow Moscow time.
</p>
<p>
	The separate Site activity page publicly shows today's estimated visitors, page views, number of
	known countries and the three countries with the most visitors. It loads these totals when the
	page opens. No individual visitor records are public. People sharing an IP address and browser
	type may be counted together; switching networks or browsers may count someone more than once.
	Country lookup is approximate, especially with VPNs, and some countries cannot be identified.
</p>
<p>
	Do Not Track and Global Privacy Control opt-outs, common bots and prefetch requests are excluded.
	Visitors with JavaScript disabled are not included in these site-wide counts. The server setting
	<code>PERSONAL_WEBSITE_ANALYTICS=off</code> disables both these counts and the article request counts
	below.
</p>

<h2>Article request counts</h2>
<p>
	The server also counts eligible requests for the Excel-to-PowerPoint article to understand
	interest in the experiment. These separate log records contain only the UTC day, fixed
	article/Skill identifier, event type and a fixed personal-site or Medium campaign label. They
	contain no visitor identifiers, IP addresses, cookies, referrers, user-agent strings, raw URLs or
	work content.
</p>
<p>
	A request is not a unique reader, completed download, installation or Skill execution. Repeat
	requests and unrecognized bots can affect totals. Relay counts its own page and download requests
	separately; no person-level linking is performed.
</p>
<p>
	Railway hosts this site and may process connection metadata and operational logs under
	<a href="https://railway.com/legal/privacy">its privacy policy</a>. No fixed hosting-log retention
	period is promised.
	<a href="https://task-relay-website-production.up.railway.app/skills/privacy">
		Relay's website privacy details</a
	>.
</p>

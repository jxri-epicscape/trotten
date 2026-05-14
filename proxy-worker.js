/**
 * Trotten — Anthropic API Proxy
 * Deploy this to Cloudflare Workers: https://workers.cloudflare.com
 *
 * Setup:
 * 1. Go to workers.cloudflare.com → Create Worker
 * 2. Paste this entire file into the editor
 * 3. Click Save & Deploy
 * 4. Copy the worker URL (e.g. https://trotten-proxy.yourname.workers.dev)
 * 5. Paste that URL into Trotten Settings → Kuva → teksti → Proxy URL
 */

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin') || '*';

    const corsHeaders = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-api-key, anthropic-version, anthropic-dangerous-allow-browser',
      'Access-Control-Max-Age': '86400',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.text();
      const apiKey = request.headers.get('x-api-key');
      const apiVersion = request.headers.get('anthropic-version') || '2023-06-01';

      const upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': apiVersion,
        },
        body,
      });

      const data = await upstream.text();
      return new Response(data, {
        status: upstream.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: { message: err.message } }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};

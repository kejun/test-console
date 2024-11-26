import html from './console-en.html';

export async function GET(request) {
  return new Response(html,
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}

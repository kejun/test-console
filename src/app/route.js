import html from './console-en.html';

export async function GET() {
  return new Response(html,
    {
      headers: { "Content-Type": "text/html" },
    }
  );
}

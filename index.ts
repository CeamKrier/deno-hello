import { listenAndServe, acceptWebSocket, acceptable } from './deps.ts';
import { chat } from './server/chat.ts';

const PORT = 3000;

listenAndServe({ port: PORT }, async (req) => {
	if (req.method === 'GET' && req.url === '/') {
		req.respond({
			status: 200,
			headers: new Headers({
				'content-type': 'text/html',
			}),
			body: await Deno.open('ui/index.html'),
		});
	}

	if (req.method === 'GET' && req.url === '/ws') {
		if (acceptable(req)) {
			acceptWebSocket({
				conn: req.conn,
				bufReader: req.r,
				bufWriter: req.w,
				headers: req.headers,
			}).then(chat);
		}
	}
});

console.log(`Server running on localhost:${PORT}`);

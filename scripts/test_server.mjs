import { spawn } from 'child_process';
import http from 'http';

const server = spawn('npx.cmd', ['next', 'start', '-p', '3000'], { stdio: 'inherit', shell: true });

function check(attempts = 30) {
  if (attempts <= 0) {
    console.error('Server failed to respond in time.');
    server.kill();
    process.exit(1);
  }

  http.get('http://127.0.0.1:3000', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`Server responded with Status: ${res.statusCode}`);
      const titleMatch = data.match(/<title>(.*?)<\/title>/);
      console.log(`Page Title: ${titleMatch ? titleMatch[1] : 'No title'}`);
      console.log(`Contains INAYA TRAVEL: ${data.includes('INAYA TRAVEL')}`);
      console.log(`Contains +91 9284430808: ${data.includes('9284430808')}`);
      console.log(`Contains Panjim Patto: ${data.includes('Panjim Patto')}`);
      console.log(`Contains Force Urbania: ${data.includes('Force Urbania')}`);
      console.log(`Contains Tempo Traveller: ${data.includes('Tempo Traveller')}`);
      console.log(`Contains Innova Hycross: ${data.includes('Innova Hycross')}`);
      console.log(`Contains Innova Crysta: ${data.includes('Innova Crysta')}`);
      console.log(`Contains Ertiga: ${data.includes('Ertiga')}`);
      console.log(`Contains Kia Carens: ${data.includes('Carens')}`);
      console.log(`Contains Dzire: ${data.includes('Dzire')}`);
      server.kill();
      process.exit(0);
    });
  }).on('error', () => {
    setTimeout(() => check(attempts - 1), 500);
  });
}

setTimeout(() => check(), 1000);

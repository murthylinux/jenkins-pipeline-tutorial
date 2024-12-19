const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('should respond with "Hello, GitHub Actions!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, GitHub Actions!');
    });
});

import app from '../app.js';
import supertest from 'supertest';

describe("GET / when access to API", () => {
  test('should respond with a 200 status code', async () => {
    const response = await supertest(app).get("/")
    expect(response.statusCode).toBe(200)
    })
  test('should specify json in the content type header', async () => {
    const response = await supertest(app).get("/")
    expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    }) 
  test('response should has msg', async () => {
    const response = await supertest(app).get("/")
    expect(response.body.msg).toBeDefined()
  }) 
})
 

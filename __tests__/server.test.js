const { app } = require('../dist/src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../dist/src/models');
const request = supertest(app);

const clothingItems = [{
  name: 'Amazon Essentials Hoodie',
  clothing_type: 'sweatshirt',
  size: 'L',
  gender: 'men',
},
{
  name: 'Amazon Essentials Sweatpants',
  clothing_type: 'pants',
  size: 'L',
  gender: 'men',
}];

beforeAll(async () => await sequelizeDatabase.sync());

afterAll(async () => await sequelizeDatabase.drop());


describe('APIServer', () => {
  it('throws an error on a bad route', async () => {
    const response = await request.get('/bad');

    expect(response.status).toEqual(404);
  });

  it('throws an error on a bad method', async () => {
    const response = await request.patch('/clothes');

    expect(response.status).toEqual(404);
  });

  it('handles a POST request', async () => {
    const response = await request.post('/clothes').send(clothingItems[0])
    await request.post('/clothes').send(clothingItems[1]);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining(clothingItems[0]));
  });

  it('handles a GET all request', async () => {
    const response = await request.get('/clothes');

    console.log('get all', response.body);

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });

  it('handles a GET one request', async () => {
    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200)
    expect(response.body).toEqual(expect.objectContaining(clothingItems[0]));
  });

  it('handles an UPDATE request', async () => {
    const updates = { size: 'XXS' };
    const putResponse = await request.put('/clothes/2').send(updates);
    console.log('---------', putResponse.body);

    const response = await request.get('/clothes/2');

    console.log(response);

    expect(response.status).toEqual(200)
    expect(response.body).toEqual(expect.objectContaining({
      ...clothingItems[1],
      ...updates
    }));
  });

  it('handles a DELETE request', async () => {
    const response = await request.delete('/clothes/1');

    expect(response.status).toEqual(204);
    expect(response.body).toEqual({});
  });
});
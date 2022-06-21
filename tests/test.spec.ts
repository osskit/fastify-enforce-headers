import Fastify from 'fastify';
import { enforceHeaders } from '../src/index.js';

describe('main', () => {
  it('should enforce missing default headers', async () => {
    const fastify = Fastify();

    await fastify.register(enforceHeaders);

    fastify.get('/', async () => ({
      bla: 'hey',
    }));

    const res = await fastify.inject({ method: 'GET', path: '/' });

    expect(res.statusCode).toMatchSnapshot();
    expect(res.json()).toMatchSnapshot();
  });

  it('should allow default headers', async () => {
    const fastify = Fastify();
    fastify.get('/', async () => ({
      bla: 'hey',
    }));

    await fastify.register(enforceHeaders);

    const res = await fastify.inject({ method: 'GET', path: '/', headers: { 'x-api-client': 'bla', 'x-api-client-version': '1.0' } });

    expect(res.statusCode).toMatchSnapshot();
    expect(res.json()).toMatchSnapshot();
  });

  it('should enforce missing custom headers', async () => {
    const fastify = Fastify();
    fastify.get('/', async () => ({
      bla: 'hey',
    }));

    await fastify.register(enforceHeaders, { headers: ['x-custom-header'] });

    const res = await fastify.inject({ method: 'GET', path: '/', headers: { 'x-api-client': 'bla', 'x-api-client-version': '1.0' } });

    expect(res.statusCode).toMatchSnapshot();
    expect(res.json()).toMatchSnapshot();
  });

  it('should allow custom headers', async () => {
    const fastify = Fastify();
    fastify.get('/', async () => ({
      bla: 'hey',
    }));

    await fastify.register(enforceHeaders, { headers: ['x-custom-header'] });

    const res = await fastify.inject({ method: 'GET', path: '/', headers: { 'x-custom-header': 'bla' } });

    expect(res.statusCode).toMatchSnapshot();
    expect(res.json()).toMatchSnapshot();
  });
});

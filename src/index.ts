import type { FastifyInstance, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import createError from 'http-errors';

interface FastifyEnforceHeadersOptions {
  headers?: readonly string[];
}

export const defaultHeaders = ['x-api-client', 'x-api-client-version'] as const;

const enforceHeaders: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  { headers = defaultHeaders }: FastifyEnforceHeadersOptions = {},
): Promise<void> => {
  fastify.addHook('onRequest', async (req) => {
    if (!headers.some((header: string) => !req.headers[header]?.toString())) {
      return;
    }

    throw createError(400, 'Missing required headers in request');
  });
};

export default fp(enforceHeaders, { name: '@osskit/fastify-enforce-headers', fastify: '4.x' });

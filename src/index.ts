import type { FastifyInstance } from 'fastify';
import createError from 'http-errors';

export const requiredHeaders = ['x-api-client', 'x-api-client-version'];

export const enforceHeaders =
  async (fastify: FastifyInstance) =>
  ({ headers = requiredHeaders }: { headers?: string[] }) => {
    fastify.addHook('onRequest', async (req) => {
      if (!headers.some((header) => !req.headers[header]?.toString())) {
        return;
      }

      throw createError(400, 'Missing required headers in request');
    });
  };

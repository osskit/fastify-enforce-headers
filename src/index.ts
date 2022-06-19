import type { FastifyInstance, FastifyPluginCallback, FastifyError } from 'fastify';
import fp from 'fastify-plugin'
import createError from 'http-errors';

interface FastifyEnforceHeadersOptions {
    headers?: string[];
}

export const defaultHeaders = ['x-api-client', 'x-api-client-version'];

const enforceHeaders: FastifyPluginCallback = async (fastify: FastifyInstance, {headers = defaultHeaders}: FastifyEnforceHeadersOptions = {}, next: (error?: FastifyError) => void): Promise<void> => {    
    fastify.addHook('onRequest', async (req) => {
      if (!headers.some((header: string) => !req.headers[header]?.toString())) {
        return;
      }

      throw createError(400, 'Missing required headers in request');
    });

    next();
};
export default fp(enforceHeaders, {name: '@osskit/fastify-enforce-headers', fastify: '4.x'});
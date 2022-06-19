<div align="center">

# fastify-enforce-headers

Enforce headers against http calls to your fastify API
  
</div>

## Install
```
yarn add @osskit/fastify-enforce-headers
```

## Usages

### Simple
```
import fastify from 'fastify';
import { enforceHeaders } from '@osskit/fastify-enforce-headers';

await fastify.register(enforceHeaders);
```

### Extra headers

```
import fastify from 'fastify';
import { enforceHeaders, defaultHeaders } from '@osskit/fastify-enforce-headers';

await fastify.register(enforceHeaders, {headers: [...defaultHeaders, 'x-custom-header']});
```

## API

### enforceHeaders({headers})
#### headers
Type: `string[]`
Default: `[]`

The headers you want to enforce on the request

Throws a `400 - missing ${header}` error upon missing required header

### defaultHeaders

Type: `string[]` by default `['x-api-client', 'x-api-client-version']`

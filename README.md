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
import Fastify from 'fastify';
import { enforceHeaders } from '@osskit/fastify-enforce-headers'

await enforceHeaders(fastify)();
```

### Extra headers

```
import Fastify from 'fastify';
import { enforceHeaders } from '@osskit/fastify-enforce-headers'

await enforceHeaders(fastify)({ headers: ['x-custom-header'] });
```

## API

### enforceHeaders({headers})
#### headers
Type: `string[]`
Default: `[]`

The headers you want to enforce on the request

Throws a `400 - missing ${header}` error upon missing required header

### requiredHeaders

Type: `string[]` by default `['x-api-client', 'x-api-client-version']`

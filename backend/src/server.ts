import fastify from "fastify";
import { listDemands } from "./routes/list-demands";
import cors from '@fastify/cors';
import { createDemands } from "./routes/create-demands";
import { createProvider } from "./routes/create-provider";
import { listProviders } from "./routes/list-providers";
import { listActions } from "./routes/list-actions";
import { updateDemandStatus } from "./routes/update-demand-status";
import { createAction } from "./routes/create-action";

const app = fastify();

app.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']
});

app.register(listDemands);
app.register(listProviders);
app.register(createProvider);
app.register(createDemands);
app.register(listActions);
app.register(updateDemandStatus);
app.register(createAction);

app.listen({ port: 3333 }).then(() => {
  console.log('Ouvindo em http://localhost:3333/')
});
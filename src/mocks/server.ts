// src/mocks/server.js
import { setupServer } from "msw/node";
import {rest} from 'msw'

export const server = setupServer(
  rest.get(
    "https://jsonplaceholder.typicode.com/users",
    (req, res, context) => {
      return res(
        context.status(200),
        context.json([
          {
            name: "ss",
          },
          {
            name: "sss",
          },
          {
            name: "ssss",
          },
        ])
      );
    }
  )
);

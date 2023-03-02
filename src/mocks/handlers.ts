// here we are going to handle all the http reqs and respond with a mock response
import { rest } from "msw";
import "jest";
// handlers =[ method(get, set), endponit, fn()->res]
export const handlers = [
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
  ),
];

/**
 * return res( status that the endpoint shud return, the response ) => we are just mocking here
 */
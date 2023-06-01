import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ headers, query, json }) => {
  headers.set('Cache-Control', 'private');
  if (query.get('format') === 'json') {
    json(200, { message: 'Hello World' });
  }
};

export default component$(() => {
  return (
    <>
      <div>
        <div>123</div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

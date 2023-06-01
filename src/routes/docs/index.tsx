import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { routeLoader$ } from "@builder.io/qwik-city";

export const useServerTime = routeLoader$(() => {
  // This will re-execute in the server when the page refreshes
  return Date.now();
});

export default component$(() => {
  const serverTime = useServerTime();
  return (
    <>
      <div>
        <div>123</div>
        <p>Server time: {serverTime.value}</p>
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

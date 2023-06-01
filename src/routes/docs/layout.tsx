import { component$, Slot } from "@builder.io/qwik";
import { DocsLayout } from "~/components/content/Layout";

export default component$(() => {
  return (
    <DocsLayout>
      <Slot />
    </DocsLayout>
  );
});

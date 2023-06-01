import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QFooter } from "~/components/home/Footer";
import { QHeader } from "~/components/home/Header";
import { QHero } from "~/components/home/Hero";

export default component$(() => {
  return (
    <>
      <QHeader />
      <main>
        <QHero client:idle />
      </main>
      <QFooter />
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

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { QFooter } from "~/components/home/Footer";
import { QHeader } from "~/components/home/Header";
import { QHero } from "~/components/home/Hero";
import { QPrimaryFeatures } from "~/components/home/PrimaryFeatures";
import { QSecondaryFeatures } from "~/components/home/SecondaryFeatures";

export default component$(() => {
  return (
    <>
      <QHeader />
      <main>
        <QHero client:idle />
        <QPrimaryFeatures />
        <QSecondaryFeatures />
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

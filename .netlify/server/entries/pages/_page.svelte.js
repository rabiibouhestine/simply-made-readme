import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
import { H as Heading } from "../../chunks/Heading.js";
import { P } from "../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col gap-32 my-32 items-center"><div class="flex flex-col items-center max-w-3xl mx-auto">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-center text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `The easiest way to create a <span class="text-primary-600" data-svelte-h="svelte-pylqxi">README</span>`;
      }
    }
  )} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-6 text-center text-lg lg:text-xl px-16  dark:text-gray-400"
    },
    {},
    {
      default: () => {
        return `A simple editor that allows you to easily add and customize all the sections you need for your
			project&#39;s readme`;
      }
    }
  )} <div class="flex flex-col gap-2 items-center">${validate_component(Button, "Button").$$render($$result, { size: "xl", href: "/new", class: "px-10" }, {}, {
    default: () => {
      return `Make a Readme`;
    }
  })} <p class="text-sm text-slate-600 dark:text-gray-400" data-svelte-h="svelte-v4dxju">No sign-up required</p></div></div> <img src="/images/editorLight.webp" alt="editor screenshot" class="flex dark:hidden border-4 rounded-lg w-full max-w-6xl mx-auto"> <img src="/images/editorDark.webp" alt="editor screenshot" class="hidden dark:flex border-4 border-gray-700 rounded-lg w-full max-w-6xl mx-auto"> <div class="flex flex-col items-center gap-6"> ${validate_component(P, "P").$$render($$result, { class: "flex gap-1 items-center" }, {}, {
    default: () => {
      return `Made with <span class="text-xl" data-svelte-h="svelte-1awaxxe">☕</span> by
			<a href="https://rabiibouhestine.com" target="_blank" class="text-primary-600 hover:underline" data-svelte-h="svelte-1xfm1at">Rabii Bouhestine</a>`;
    }
  })}</div></div>`;
});
export {
  Page as default
};

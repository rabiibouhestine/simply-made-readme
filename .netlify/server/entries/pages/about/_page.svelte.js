import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full max-w-5xl mx-auto flex flex-col gap-20 my-32 items-center">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `About`;
      }
    }
  )} <div class="flex flex-col gap-6">${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Simply Made Readme is an online web app for creating readme.md files for your projects! Our
			goal is to provide a simple and intuitive tool that allows developers to quickly and easily
			generate readme files without any hassle.`;
    }
  })} ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Unlike other similar tools, our web app doesn&#39;t require any sign-up, authentication, or
			backend. You can start using it immediately, straight from your browser, with no data being
			collected or stored on our servers. Everything is saved securely in your browser&#39;s local
			storage.`;
    }
  })}  ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Whether you&#39;re working on a small personal project or a large-scale open source endeavor, our
			web app is here to help you create informative and well-structured readme files. So dive in,
			start crafting your project documentation, and let us know how we can improve your experience!`;
    }
  })}</div></div>`;
});
export {
  Page as default
};

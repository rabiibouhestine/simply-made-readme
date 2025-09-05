import { c as create_ssr_component, v as validate_component, l as each, f as add_attribute, i as escape } from "../../../chunks/ssr.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const types = [
    {
      img: "/images/emptyLight.png",
      imgDark: "/images/emptyDark.png",
      label: "Empty Readme",
      link: "/editor?template=empty"
    },
    {
      img: "/images/profileLight.png",
      imgDark: "/images/profileDark.png",
      label: "Github Profile",
      link: "/editor?template=profile"
    },
    {
      img: "/images/projectLight.png",
      imgDark: "/images/projectDark.png",
      label: "Project Readme",
      link: "/editor?template=project"
    }
  ];
  return `<div class="flex flex-col gap-20 my-32 items-center"><div class="flex flex-col items-center max-w-3xl mx-auto">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-center text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `Choose a Template`;
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
        return `Pick the template that fits your needs. You can add/remove sections and edit as needed.
			Template suggestions are welcome.`;
      }
    }
  )}</div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(types, (type) => {
    return `<a${add_attribute("href", type.link, 0)} class="flex flex-col gap-2 items-center group"><img${add_attribute("src", type.img, 0)} alt="editor screenshot" class="flex dark:hidden rounded-lg w-80 border group-hover:border-primary-600 transition duration-150 ease-in-out"> <img${add_attribute("src", type.imgDark, 0)} alt="editor screenshot" class="hidden dark:flex rounded-lg w-80 border border-gray-700 group-hover:border-primary-600 transition duration-150 ease-in-out"> <p class="text-lg font-medium dark:text-gray-300">${escape(type.label)}</p> </a>`;
  })}</div></div>`;
});
export {
  Page as default
};

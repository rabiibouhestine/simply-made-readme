import { c as create_ssr_component, a as compute_rest_props, s as setContext, v as validate_component, h as getContext, g as subscribe, f as add_attribute } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { F as Frame } from "../../../chunks/Frame.js";
import { twMerge } from "tailwind-merge";
import { H as Heading } from "../../../chunks/Heading.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass"]);
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClass = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  frameClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: frameClass }, { color: "none" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentClass;
  let $$unsubscribe_selected;
  let { open = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { inactiveClass = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFlushDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  let { borderClass = "border-s border-e group-first:border-t" } = $$props;
  let { borderOpenClass = "border-s border-e" } = $$props;
  let { borderBottomClass = "border-b" } = $$props;
  let { borderSharedClass = "border-gray-200 dark:border-gray-700" } = $$props;
  let { classActive = void 0 } = $$props;
  let { classInactive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0)
    $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0)
    $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0)
    $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFlushDefault === void 0 && $$bindings.textFlushDefault && textFlushDefault !== void 0)
    $$bindings.textFlushDefault(textFlushDefault);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.borderOpenClass === void 0 && $$bindings.borderOpenClass && borderOpenClass !== void 0)
    $$bindings.borderOpenClass(borderOpenClass);
  if ($$props.borderBottomClass === void 0 && $$bindings.borderBottomClass && borderBottomClass !== void 0)
    $$bindings.borderBottomClass(borderBottomClass);
  if ($$props.borderSharedClass === void 0 && $$bindings.borderSharedClass && borderSharedClass !== void 0)
    $$bindings.borderSharedClass(borderSharedClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0)
    $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0)
    $$bindings.classInactive(classInactive);
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  $$unsubscribe_selected();
  return `<h2 class="group"><button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``} ${open ? `${slots.arrowup ? slots.arrowup({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg> `}` : `${slots.arrowdown ? slots.arrowdown({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg> `}`}</button></h2> ${open ? `<div><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<div class="hidden"><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`} `;
});
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
        return `Frequently Asked Questions`;
      }
    }
  )} ${validate_component(Accordion, "Accordion").$$render($$result, { flush: true, class: "w-full" }, {}, {
    default: () => {
      return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-mpn9r1">How does the web app work without any sign-up or authentication?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-ghix1p">Our web app operates entirely on the client-side, meaning all functionality is executed
				within the user&#39;s browser. No data is sent to or stored on any servers. Users can access the
				tool immediately without the need for sign-up or authentication.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-14htce7">Is my data safe if it&#39;s stored in the browser&#39;s local storage?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-3h0psb">Yes, your data is safe. Local storage is a secure method provided by web browsers to store
				data within the user&#39;s device. It can only be accessed by the same website that stored it,
				and it&#39;s not shared with other websites or servers.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-1be6wc3">Can I access my readme files from different devices?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-12h1t3e">Unfortunately, since the data is stored locally in your browser, it&#39;s not accessible from
				other devices. However, you can easily export your readme files and import them into another
				browser on a different device.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-1iab760">How can I export or save my readme file?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1bqxoqw">You can export your readme file as a .md file directly from the web app. Simply click on the
				export button, and the file will be saved to your device. Alternatively, you can copy the
				markdown content and paste it into any text editor to save it.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-13wpsng">What features does the web app offer for creating readme files?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-10y2zqj">Our web app provides a simple and intuitive interface for creating readme files. Users can
				add sections such as project title, description, installation instructions, usage examples,
				and more. It also supports markdown syntax for formatting.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-3ypa01">Can I customize the layout and style of my readme file?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1krtdnc">Yes, you can customize the layout and style of your readme file using markdown syntax. Our
				web app supports various markdown features, allowing you to create visually appealing and
				informative readme files.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-11neuy5">Is there a limit to the number of readme files I can create?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-3ycy56">No, there is no limit. You can create as many readme files as you need. Since everything is
				stored locally, you have full control over your projects and their associated readme files.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-u8uhzm">Can I suggest new features or report issues with the web app?</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-aln58r">Absolutely! We welcome feedback, suggestions, and bug reports. Feel free to reach out to
				rabiibouhestine@gmail.com. We&#39;re constantly looking to improve the tool based on user
				feedback.</p>`;
        }
      })} `;
    }
  })}</div>`;
});
export {
  Page as default
};

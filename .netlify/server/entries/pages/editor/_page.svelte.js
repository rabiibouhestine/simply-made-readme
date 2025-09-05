import { c as create_ssr_component, a as compute_rest_props, v as validate_component, f as add_attribute, b as spread, d as escape_object, h as getContext, e as escape_attribute_value, i as escape, j as compute_slots, k as createEventDispatcher, l as each, g as subscribe } from "../../../chunks/ssr.js";
import { marked } from "marked";
import { B as Button } from "../../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
import { i as is_void } from "../../../chunks/names.js";
import { F as Frame } from "../../../chunks/Frame.js";
import { T as ToolbarButton } from "../../../chunks/ToolbarButton.js";
import { p as page } from "../../../chunks/stores.js";
import "sortablejs";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ms-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "wrappedClass", "unWrappedClass", "innerWrappedClass"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { innerWrappedClass = "py-2 px-4 bg-white dark:bg-gray-800" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => twMerge(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0)
    $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0)
    $$bindings.unWrappedClass(unWrappedClass);
  if ($$props.innerWrappedClass === void 0 && $$bindings.innerWrappedClass && innerWrappedClass !== void 0)
    $$bindings.innerWrappedClass(innerWrappedClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? "" : "rounded-b-lg", $$slots.header ? "" : "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "dismissable",
    "backdropClass",
    "defaultClass",
    "outsideclose",
    "dialogClass"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { dismissable = true } = $$props;
  let { backdropClass = "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  let { dialogClass = "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex" } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0)
    $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0)
    $$bindings.outsideclose(outsideclose);
  if ($$props.dialogClass === void 0 && $$bindings.dialogClass && dialogClass !== void 0)
    $$bindings.dialogClass(dialogClass);
  {
    dispatch(open ? "open" : "close");
  }
  frameClass = twMerge(defaultClass, "w-full divide-y", $$props.class);
  return `${open ? ` <div${add_attribute("class", backdropCls, 0)}></div>   <div${add_attribute("class", twMerge(dialogClass, $$props.classDialog, ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 md:p-5 rounded-t-lg"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3> `} ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : ``}  <div${add_attribute("class", twMerge("p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain", $$props.bodyClass), 0)} role="document">${dismissable && !$$slots.header && !title ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 end-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``} ${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const CirclePlusOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "circle plus outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`} `;
});
const ClipboardSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "clipboard solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"></path></svg>`} `;
});
const DotsVerticalOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "withEvents", "title", "desc", "strokeLinecap", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { ariaLabel = "dots vertical outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)} stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)} stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"></path></svg>`} `;
});
const DownloadSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "download solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>`} `;
});
const ExclamationCircleOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "exclamation circle outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`} `;
});
const InfoCircleOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "info circle outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`} `;
});
const TrashBinOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "role",
    "withEvents",
    "title",
    "desc",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeWidth",
    "ariaLabel"
  ]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "trash bin outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0)
    $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path></svg>`} `;
});
const SectionList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  createEventDispatcher();
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="w-full flex flex-col gap-2">${each(items, (item) => {
    return `<div class="flex"><div class="handle bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white p-4 border flex rounded-l-lg hover:cursor-grab">${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, { class: "w-6 h-6" }, {}, {})} ${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, { class: "w-6 h-6 -ml-4" }, {}, {})}</div> <button class="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white p-4 border-t border-b grow text-left hover:dark:text-primary-600 hover:text-primary-600">${escape(item.name)}</button> <button class="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-500 p-4 border rounded-r-lg group">${validate_component(TrashBinOutline, "TrashBinOutline").$$render(
      $$result,
      {
        class: "w-6 h-6 group-hover:text-primary-600"
      },
      {},
      {}
    )}</button> </div>`;
  })}</div>`;
});
const ExportModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = "success" } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<div class="flex flex-col items-center text-center"><img src="/party.svg" alt="Success" class="w-20"> <h3 class="text-lg font-normal text-gray-500 dark:text-gray-300 mb-8">${escape(message)}</h3> <p class="text-sm mb-5" data-svelte-h="svelte-mfgpo0">Thanks for using Simply Made Readme! Feel free to reach out to me with any feedback at
		rabiibouhestine@gmail.com</p> </div>`;
});
const templates = {
  "empty": ["title-and-description"],
  "profile": [
    "github-profile-intro",
    "github-profile-about-me",
    "github-profile-skills",
    "github-profile-links",
    "github-profile-other",
    "attribution"
  ],
  "project": [
    "title-and-description",
    "badges",
    "demo",
    "installation",
    "usage-examples",
    "support",
    "roadmap",
    "contributing",
    "authors",
    "acknowledgement",
    "license",
    "attribution"
  ]
};
const sections = [
  {
    id: "custom-section",
    name: "Custom Section",
    description: `Use this empty section if none of the other sections seem helpful.`,
    markdown: ``
  },
  {
    id: "title-and-description",
    name: "Title and Description",
    description: `A brief description of what this project does and who it's for.`,
    markdown: `
  # Project Title
  
  A brief description of what this project does and who it's for.
  
  `
  },
  {
    id: "installation",
    name: "Installation",
    description: `Listing specific steps helps remove ambiguity and confusion.`,
    markdown: `
  ## Installation
  
  Install my-project with npm
  
  \`\`\`bash
    npm install my-project
    cd my-project
  \`\`\`
      `
  },
  {
    id: "logo",
    name: "Logo",
    description: `It can be a good idea to include a logo for your project.`,
    markdown: `
  ![Logo](https://placehold.co/600x200)
  
  `
  },
  {
    id: "run-locally",
    name: "Run Locally",
    description: `Listing specific steps helps remove ambiguity and confusion.`,
    markdown: `
  ## Run Locally
  
  Clone the project
  
  \`\`\`bash
    git clone https://link-to-project
  \`\`\`
  
  Go to the project directory
  
  \`\`\`bash
    cd my-project
  \`\`\`
  
  Install dependencies
  
  \`\`\`bash
    npm install
  \`\`\`
  
  Start the server
  
  \`\`\`bash
    npm run start
  \`\`\`
  
  `
  },
  {
    id: "screenshots",
    name: "Screenshots",
    description: `It can be a good idea to include screenshots of your project.`,
    markdown: `
  ## Screenshots
  
  ![App Screenshot](https://placehold.co/600x400)
  
  `
  },
  {
    id: "env-variables",
    name: "Environment Variables",
    description: `List environment variables that are required to run the project.`,
    markdown: `
  ## Environment Variables
  
  To run this project, you will need to add the following environment variables to your .env file
  
  \`API_KEY\`
  
  \`ANOTHER_API_KEY\`
  
  `
  },
  {
    id: "features",
    name: "Features",
    description: `List the features of your project to highlight what sets it apart.`,
    markdown: `
  ## Features
  
  - Light/dark mode toggle
  - Live previews
  - Fullscreen mode
  - Cross platform
  
  `
  },
  {
    id: "usage-examples",
    name: "Usage/Examples",
    description: `Use examples liberally, and show the expected output if you can.`,
    markdown: `
  ## Usage/Examples
  
  \`\`\`javascript
  import Component from 'my-project'
  
  function App() {
    return <Component />
  }
  \`\`\`
  
  `
  },
  {
    id: "api",
    name: "API Reference",
    description: `Include a table of API parameters with their type and description.`,
    markdown: `
  ## API Reference
  
  #### Get all items
  
  \`\`\`http
    GET /api/items
  \`\`\`
  
  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | \`api_key\` | \`string\` | **Required**. Your API key |
  
  #### Get item
  
  \`\`\`http
    GET /api/items/\${id}
  \`\`\`
  
  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | \`id\`      | \`string\` | **Required**. Id of item to fetch |
  
  #### add(num1, num2)
  
  Takes two numbers and returns the sum.
  
  `
  },
  {
    id: "contributing",
    name: "Contributing",
    description: `State what your requirements are for accepting contributions.`,
    markdown: `
  ## Contributing
  
  Contributions are always welcome!
  
  See \`contributing.md\` for ways to get started.
  
  Please adhere to this project's \`code of conduct\`.
  
  `
  },
  {
    id: "tests",
    name: "Running Tests",
    description: `Listing specific steps helps remove ambiguity and confusion.`,
    markdown: `
  ## Running Tests
  
  To run tests, run the following command
  
  \`\`\`bash
    npm run test
  \`\`\`
  
  `
  },
  {
    id: "license",
    name: "License",
    description: `For some projects, it is important to say how they are licensed.`,
    markdown: `
  ## License
  
  [MIT](https://choosealicense.com/licenses/mit/)
  
  `
  },
  {
    id: "badges",
    name: "Badges",
    description: `Add badges from somewhere like shields to convey metadata.`,
    markdown: `
  ## Badges
  
  Add badges from somewhere like: [shields.io](https://shields.io/)
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
  [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
  
  `
  },
  {
    id: "roadmap",
    name: "Roadmap",
    description: `It is a good idea to list ideas for future relases in the readme.`,
    markdown: `
  ## Roadmap
  
  - Additional browser support
  
  - Add more integrations
  
  `
  },
  {
    id: "authors",
    name: "Authors",
    description: `Show your appreciation to those who have contributed.`,
    markdown: `
  ## Authors
  
  - [@rabiibouhestine](https://www.github.com/rabiibouhestine)
  
  `
  },
  {
    id: "acknowledgement",
    name: "Acknowledgements",
    description: `Show your appreciation to the ustilised projects or tools.`,
    markdown: `
  ## Acknowledgements
  
   - [readme.so](https://readme.so/)
   - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
   - [Awesome README](https://github.com/matiassingers/awesome-readme)
   - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
  
  `
  },
  {
    id: "support",
    name: "Support",
    description: `Tell people how they can get help. Ex: a link, an email address, etc.`,
    markdown: `
  ## Support
  
  For support, email fake@fake.com or join our Slack channel.
  
  `
  },
  {
    id: "feedback",
    name: "Feedback",
    description: `Tell people how they can provide feedbacks. Ex: an email address.`,
    markdown: `
  ## Feedback
  
  If you have any feedback, please reach out to us at fake@fake.com
  
  `
  },
  {
    id: "related",
    name: "Related",
    description: `Tell people about alternatives or other similar or related projects.`,
    markdown: `
  ## Related
  
  Here are some related projects
  
  [readme.so](https://readme.so/)
  
  `
  },
  {
    id: "demo",
    name: "Demo",
    description: `Include a video that showcases a demo of your project.`,
    markdown: `
  ## Demo
  
  Insert gif or link to demo
  
  `
  },
  {
    id: "tech",
    name: "Tech",
    description: `What Tech Stack did you use in your project? E.g. React, Redux...`,
    markdown: `
  ## Tech Stack
  
  **Client:** React, Redux, TailwindCSS
  
  **Server:** Node, Express
  
  `
  },
  {
    id: "optimizations",
    name: "Optimizations",
    description: `What optimizations did you make in your code? E.g. refactors, etc.`,
    markdown: `
  ## Optimizations
  
  What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility
  
  `
  },
  {
    id: "lessons",
    name: "Lessons",
    description: `What did you learn while building this project? Any challenges?`,
    markdown: `
  ## Lessons Learned
  
  What did you learn while building this project? What challenges did you face and how did you overcome them?
  
  `
  },
  {
    id: "faq",
    name: "FAQ",
    description: `Answer what you would expect as frequently asked questions.`,
    markdown: `
  ## FAQ
  
  #### Question 1
  
  Answer 1
  
  #### Question 2
  
  Answer 2
  
  `
  },
  {
    id: "used-by",
    name: "Used By",
    description: `Include organisations that are currently using this project.`,
    markdown: `
  ## Used By
  
  This project is used by the following companies:
  
  - Company 1
  - Company 2
  
  `
  },
  {
    id: "documentation",
    name: "Documentation",
    description: `Include a link to a detailed documentation of the project.`,
    markdown: `
  ## Documentation
  
  [Documentation](https://linktodocumentation)
  
  `
  },
  {
    id: "deployment",
    name: "Deployment",
    description: `Listing specific steps helps remove ambiguity and confusion.`,
    markdown: `
  ## Deployment
  
  To deploy this project run
  
  \`\`\`bash
    npm run deploy
  \`\`\`
  
  `
  },
  {
    id: "appendix",
    name: "Appendix",
    description: `Add any additionnal information in the appendix of the readme.`,
    markdown: `
  ## Appendix
  
  Any additional information goes here
  
  `
  },
  {
    id: "github-profile-intro",
    name: "Github Profile - Introduction",
    description: `Add a brief introduction. Example: 'Hi, I'm John Doe! 👋'`,
    markdown: `
  # Hi, I'm John Doe! 👋
  
  `
  },
  {
    id: "github-profile-about-me",
    name: "Github Profile - About Me",
    description: `Say a few things about yourself. Example: 'I'm a developer...'`,
    markdown: `
  ## 🚀 About Me
  I'm a full stack developer...
  
  `
  },
  {
    id: "github-profile-skills",
    name: "Github Profile - Skills",
    description: `List your skills, all of your skills, the more the merrier :)`,
    markdown: `
  ## 🛠 Skills
  Javascript, HTML, CSS...
  
  `
  },
  {
    id: "github-profile-links",
    name: "Github Profile - Links",
    description: `List your socials or other links, nicely displayed in badges.`,
    markdown: `
  ## 🔗 Links
  [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://rabiibouhestine.com/)
  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
  [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
  
  `
  },
  {
    id: "github-profile-other",
    name: "Github Profile - Other",
    description: `What are you currently working on? Learning? Fun Facts?`,
    markdown: `
  ## Other Common Github Profile Sections
  👩‍💻 I'm currently working on...
  
  🧠 I'm currently learning...
  
  👯‍♀️ I'm looking to collaborate on...
  
  🤔 I'm looking for help with...
  
  💬 Ask me about...
  
  📫 How to reach me...
  
  😄 Pronouns...
  
  ⚡️ Fun fact...
  
  `
  },
  {
    id: "colorreference",
    name: "Color Reference",
    description: `Add a nicely formatted table to provide color reference.`,
    markdown: `## Color Reference
  
  | Color             | Hex                                                                |
  | ----------------- | ------------------------------------------------------------------ |
  | Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
  | Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
  | Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
  | Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |
  
  `
  },
  {
    id: "attribution",
    name: "Attribution",
    description: `Because you're awesome and enjoy Simply Made Readme.`,
    markdown: `
\\
\\
\\
This readme was made with [Simply Made Readme](https://simplymadereadme.com).
    
    `
  }
];
const style$1 = `
<style>
/*light*/

.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #1F2328;
  background-color: #ffffff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body ul {
  list-style-type: disc;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #0969da;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid hsla(210,18%,87%,1);
}

.markdown-body mark {
  background-color: #fff8c5;
  color: #1F2328;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: #ffffff;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 40px;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid hsla(210,18%,87%,1);
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #d0d7de;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #6e7781;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body details:not([open])>*:not(summary) {
  display: none !important;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #1F2328;
  vertical-align: middle;
  background-color: #f6f8fa;
  border: solid 1px rgba(175,184,193,0.2);
  border-bottom-color: rgba(175,184,193,0.2);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(175,184,193,0.2);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid hsla(210,18%,87%,1);
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #656d76;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #656d76;
  border-left: .25em solid #d0d7de;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: 8px !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #d1242f;
}

.markdown-body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #1F2328;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #d0d7de;
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: #ffffff;
  border-top: 1px solid hsla(210,18%,87%,1);
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #d0d7de;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #1F2328;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: rgba(175,184,193,0.2);
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #1F2328;
  background-color: #f6f8fa;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: #ffffff;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #f6f8fa;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #656d76;
  border-top: 1px solid #d0d7de;
}

.markdown-body .footnotes ol {
  padding-left: 16px;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid #0969da;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #1F2328;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: #57606a;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #0550ae;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #6639ba;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #24292f;
}

.markdown-body .pl-ent {
  color: #116329;
}

.markdown-body .pl-k {
  color: #cf222e;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #0a3069;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #953800;
}

.markdown-body .pl-bu {
  color: #82071e;
}

.markdown-body .pl-ii {
  color: #f6f8fa;
  background-color: #82071e;
}

.markdown-body .pl-c2 {
  color: #f6f8fa;
  background-color: #cf222e;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #116329;
}

.markdown-body .pl-ml {
  color: #3b2300;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #0550ae;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #24292f;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #24292f;
}

.markdown-body .pl-md {
  color: #82071e;
  background-color: #ffebe9;
}

.markdown-body .pl-mi1 {
  color: #116329;
  background-color: #dafbe1;
}

.markdown-body .pl-mc {
  color: #953800;
  background-color: #ffd8b5;
}

.markdown-body .pl-mi2 {
  color: #eaeef2;
  background-color: #0550ae;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #8250df;
}

.markdown-body .pl-ba {
  color: #57606a;
}

.markdown-body .pl-sg {
  color: #8c959f;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #0a3069;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 4px;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list {
  position: relative;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: 8px 16px;
  margin-bottom: 16px;
  color: inherit;
  border-left: .25em solid #d0d7de;
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: #0969da;
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #0969da;
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: #8250df;
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: #8250df;
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: #9a6700;
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #9a6700;
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: #1f883d;
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #1a7f37;
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: #cf222e;
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #d1242f;
}
</style>

`;
const style = `
<style>
/*dark*/

.markdown-body-dark {
  color-scheme: dark;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #e6edf3;
  background-color: #0d1117;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body-dark ul {
  list-style-type: disc;
}

.markdown-body-dark .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body-dark h1:hover .anchor .octicon-link:before,
.markdown-body-dark h2:hover .anchor .octicon-link:before,
.markdown-body-dark h3:hover .anchor .octicon-link:before,
.markdown-body-dark h4:hover .anchor .octicon-link:before,
.markdown-body-dark h5:hover .anchor .octicon-link:before,
.markdown-body-dark h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body-dark details,
.markdown-body-dark figcaption,
.markdown-body-dark figure {
  display: block;
}

.markdown-body-dark summary {
  display: list-item;
}

.markdown-body-dark [hidden] {
  display: none !important;
}

.markdown-body-dark a {
  background-color: transparent;
  color: #2f81f7;
  text-decoration: none;
}

.markdown-body-dark abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body-dark b,
.markdown-body-dark strong {
  font-weight: 600;
}

.markdown-body-dark dfn {
  font-style: italic;
}

.markdown-body-dark h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #21262d;
}

.markdown-body-dark mark {
  background-color: rgba(187,128,9,0.15);
  color: #e6edf3;
}

.markdown-body-dark small {
  font-size: 90%;
}

.markdown-body-dark sub,
.markdown-body-dark sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body-dark sub {
  bottom: -0.25em;
}

.markdown-body-dark sup {
  top: -0.5em;
}

.markdown-body-dark img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: #0d1117;
}

.markdown-body-dark code,
.markdown-body-dark kbd,
.markdown-body-dark pre,
.markdown-body-dark samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body-dark figure {
  margin: 1em 40px;
}

.markdown-body-dark hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #21262d;
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #30363d;
  border: 0;
}

.markdown-body-dark input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body-dark [type=button],
.markdown-body-dark [type=reset],
.markdown-body-dark [type=submit] {
  -webkit-appearance: button;
  appearance: button;
}

.markdown-body-dark [type=checkbox],
.markdown-body-dark [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body-dark [type=number]::-webkit-inner-spin-button,
.markdown-body-dark [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body-dark [type=search]::-webkit-search-cancel-button,
.markdown-body-dark [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body-dark ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body-dark ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body-dark a:hover {
  text-decoration: underline;
}

.markdown-body-dark ::placeholder {
  color: #6e7681;
  opacity: 1;
}

.markdown-body-dark hr::before {
  display: table;
  content: "";
}

.markdown-body-dark hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body-dark table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body-dark td,
.markdown-body-dark th {
  padding: 0;
}

.markdown-body-dark details summary {
  cursor: pointer;
}

.markdown-body-dark details:not([open])>*:not(summary) {
  display: none !important;
}

.markdown-body-dark a:focus,
.markdown-body-dark [role=button]:focus,
.markdown-body-dark input[type=radio]:focus,
.markdown-body-dark input[type=checkbox]:focus {
  outline: 2px solid #2f81f7;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body-dark a:focus:not(:focus-visible),
.markdown-body-dark [role=button]:focus:not(:focus-visible),
.markdown-body-dark input[type=radio]:focus:not(:focus-visible),
.markdown-body-dark input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body-dark a:focus-visible,
.markdown-body-dark [role=button]:focus-visible,
.markdown-body-dark input[type=radio]:focus-visible,
.markdown-body-dark input[type=checkbox]:focus-visible {
  outline: 2px solid #2f81f7;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body-dark a:not([class]):focus,
.markdown-body-dark a:not([class]):focus-visible,
.markdown-body-dark input[type=radio]:focus,
.markdown-body-dark input[type=radio]:focus-visible,
.markdown-body-dark input[type=checkbox]:focus,
.markdown-body-dark input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body-dark kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #e6edf3;
  vertical-align: middle;
  background-color: #161b22;
  border: solid 1px rgba(110,118,129,0.4);
  border-bottom-color: rgba(110,118,129,0.4);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(110,118,129,0.4);
}

.markdown-body-dark h1,
.markdown-body-dark h2,
.markdown-body-dark h3,
.markdown-body-dark h4,
.markdown-body-dark h5,
.markdown-body-dark h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body-dark h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #21262d;
}

.markdown-body-dark h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body-dark h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body-dark h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body-dark h6 {
  font-weight: 600;
  font-size: .85em;
  color: #848d97;
}

.markdown-body-dark p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body-dark blockquote {
  margin: 0;
  padding: 0 1em;
  color: #848d97;
  border-left: .25em solid #30363d;
}

.markdown-body-dark ul,
.markdown-body-dark ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body-dark ol ol,
.markdown-body-dark ul ol {
  list-style-type: lower-roman;
}

.markdown-body-dark ul ul ol,
.markdown-body-dark ul ol ol,
.markdown-body-dark ol ul ol,
.markdown-body-dark ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body-dark dd {
  margin-left: 0;
}

.markdown-body-dark tt,
.markdown-body-dark code,
.markdown-body-dark samp {
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
}

.markdown-body-dark pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body-dark .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body-dark input::-webkit-outer-spin-button,
.markdown-body-dark input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body-dark .mr-2 {
  margin-right: 8px !important;
}

.markdown-body-dark::before {
  display: table;
  content: "";
}

.markdown-body-dark::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body-dark>*:first-child {
  margin-top: 0 !important;
}

.markdown-body-dark>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body-dark a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body-dark .absent {
  color: #f85149;
}

.markdown-body-dark .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body-dark .anchor:focus {
  outline: none;
}

.markdown-body-dark p,
.markdown-body-dark blockquote,
.markdown-body-dark ul,
.markdown-body-dark ol,
.markdown-body-dark dl,
.markdown-body-dark table,
.markdown-body-dark pre,
.markdown-body-dark details {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body-dark blockquote>:first-child {
  margin-top: 0;
}

.markdown-body-dark blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body-dark h1 .octicon-link,
.markdown-body-dark h2 .octicon-link,
.markdown-body-dark h3 .octicon-link,
.markdown-body-dark h4 .octicon-link,
.markdown-body-dark h5 .octicon-link,
.markdown-body-dark h6 .octicon-link {
  color: #e6edf3;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body-dark h1:hover .anchor,
.markdown-body-dark h2:hover .anchor,
.markdown-body-dark h3:hover .anchor,
.markdown-body-dark h4:hover .anchor,
.markdown-body-dark h5:hover .anchor,
.markdown-body-dark h6:hover .anchor {
  text-decoration: none;
}

.markdown-body-dark h1:hover .anchor .octicon-link,
.markdown-body-dark h2:hover .anchor .octicon-link,
.markdown-body-dark h3:hover .anchor .octicon-link,
.markdown-body-dark h4:hover .anchor .octicon-link,
.markdown-body-dark h5:hover .anchor .octicon-link,
.markdown-body-dark h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body-dark h1 tt,
.markdown-body-dark h1 code,
.markdown-body-dark h2 tt,
.markdown-body-dark h2 code,
.markdown-body-dark h3 tt,
.markdown-body-dark h3 code,
.markdown-body-dark h4 tt,
.markdown-body-dark h4 code,
.markdown-body-dark h5 tt,
.markdown-body-dark h5 code,
.markdown-body-dark h6 tt,
.markdown-body-dark h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body-dark summary h1,
.markdown-body-dark summary h2,
.markdown-body-dark summary h3,
.markdown-body-dark summary h4,
.markdown-body-dark summary h5,
.markdown-body-dark summary h6 {
  display: inline-block;
}

.markdown-body-dark summary h1 .anchor,
.markdown-body-dark summary h2 .anchor,
.markdown-body-dark summary h3 .anchor,
.markdown-body-dark summary h4 .anchor,
.markdown-body-dark summary h5 .anchor,
.markdown-body-dark summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body-dark summary h1,
.markdown-body-dark summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body-dark ul.no-list,
.markdown-body-dark ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body-dark ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body-dark ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body-dark ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body-dark ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body-dark ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body-dark div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body-dark ul ul,
.markdown-body-dark ul ol,
.markdown-body-dark ol ol,
.markdown-body-dark ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body-dark li>p {
  margin-top: 16px;
}

.markdown-body-dark li+li {
  margin-top: .25em;
}

.markdown-body-dark dl {
  padding: 0;
}

.markdown-body-dark dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body-dark dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body-dark table th {
  font-weight: 600;
}

.markdown-body-dark table th,
.markdown-body-dark table td {
  padding: 6px 13px;
  border: 1px solid #30363d;
}

.markdown-body-dark table td>:last-child {
  margin-bottom: 0;
}

.markdown-body-dark table tr {
  background-color: #0d1117;
  border-top: 1px solid #21262d;
}

.markdown-body-dark table tr:nth-child(2n) {
  background-color: #161b22;
}

.markdown-body-dark table img {
  background-color: transparent;
}

.markdown-body-dark img[align=right] {
  padding-left: 20px;
}

.markdown-body-dark img[align=left] {
  padding-right: 20px;
}

.markdown-body-dark .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body-dark span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body-dark span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #30363d;
}

.markdown-body-dark span.frame span img {
  display: block;
  float: left;
}

.markdown-body-dark span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #e6edf3;
}

.markdown-body-dark span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body-dark span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body-dark span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body-dark span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body-dark span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body-dark span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body-dark span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body-dark span.float-left span {
  margin: 13px 0 0;
}

.markdown-body-dark span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body-dark span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body-dark code,
.markdown-body-dark tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: rgba(110,118,129,0.4);
  border-radius: 6px;
}

.markdown-body-dark code br,
.markdown-body-dark tt br {
  display: none;
}

.markdown-body-dark del code {
  text-decoration: inherit;
}

.markdown-body-dark samp {
  font-size: 85%;
}

.markdown-body-dark pre code {
  font-size: 100%;
}

.markdown-body-dark pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body-dark .highlight {
  margin-bottom: 16px;
}

.markdown-body-dark .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body-dark .highlight pre,
.markdown-body-dark pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #e6edf3;
  background-color: #161b22;
  border-radius: 6px;
}

.markdown-body-dark pre code,
.markdown-body-dark pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body-dark .csv-data td,
.markdown-body-dark .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body-dark .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: #0d1117;
  border: 0;
}

.markdown-body-dark .csv-data tr {
  border-top: 0;
}

.markdown-body-dark .csv-data th {
  font-weight: 600;
  background: #161b22;
  border-top: 0;
}

.markdown-body-dark [data-footnote-ref]::before {
  content: "[";
}

.markdown-body-dark [data-footnote-ref]::after {
  content: "]";
}

.markdown-body-dark .footnotes {
  font-size: 12px;
  color: #848d97;
  border-top: 1px solid #30363d;
}

.markdown-body-dark .footnotes ol {
  padding-left: 16px;
}

.markdown-body-dark .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.markdown-body-dark .footnotes li {
  position: relative;
}

.markdown-body-dark .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid #1f6feb;
  border-radius: 6px;
}

.markdown-body-dark .footnotes li:target {
  color: #e6edf3;
}

.markdown-body-dark .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body-dark .pl-c {
  color: #8b949e;
}

.markdown-body-dark .pl-c1,
.markdown-body-dark .pl-s .pl-v {
  color: #79c0ff;
}

.markdown-body-dark .pl-e,
.markdown-body-dark .pl-en {
  color: #d2a8ff;
}

.markdown-body-dark .pl-smi,
.markdown-body-dark .pl-s .pl-s1 {
  color: #c9d1d9;
}

.markdown-body-dark .pl-ent {
  color: #7ee787;
}

.markdown-body-dark .pl-k {
  color: #ff7b72;
}

.markdown-body-dark .pl-s,
.markdown-body-dark .pl-pds,
.markdown-body-dark .pl-s .pl-pse .pl-s1,
.markdown-body-dark .pl-sr,
.markdown-body-dark .pl-sr .pl-cce,
.markdown-body-dark .pl-sr .pl-sre,
.markdown-body-dark .pl-sr .pl-sra {
  color: #a5d6ff;
}

.markdown-body-dark .pl-v,
.markdown-body-dark .pl-smw {
  color: #ffa657;
}

.markdown-body-dark .pl-bu {
  color: #f85149;
}

.markdown-body-dark .pl-ii {
  color: #f0f6fc;
  background-color: #8e1519;
}

.markdown-body-dark .pl-c2 {
  color: #f0f6fc;
  background-color: #b62324;
}

.markdown-body-dark .pl-sr .pl-cce {
  font-weight: bold;
  color: #7ee787;
}

.markdown-body-dark .pl-ml {
  color: #f2cc60;
}

.markdown-body-dark .pl-mh,
.markdown-body-dark .pl-mh .pl-en,
.markdown-body-dark .pl-ms {
  font-weight: bold;
  color: #1f6feb;
}

.markdown-body-dark .pl-mi {
  font-style: italic;
  color: #c9d1d9;
}

.markdown-body-dark .pl-mb {
  font-weight: bold;
  color: #c9d1d9;
}

.markdown-body-dark .pl-md {
  color: #ffdcd7;
  background-color: #67060c;
}

.markdown-body-dark .pl-mi1 {
  color: #aff5b4;
  background-color: #033a16;
}

.markdown-body-dark .pl-mc {
  color: #ffdfb6;
  background-color: #5a1e02;
}

.markdown-body-dark .pl-mi2 {
  color: #c9d1d9;
  background-color: #1158c7;
}

.markdown-body-dark .pl-mdr {
  font-weight: bold;
  color: #d2a8ff;
}

.markdown-body-dark .pl-ba {
  color: #8b949e;
}

.markdown-body-dark .pl-sg {
  color: #484f58;
}

.markdown-body-dark .pl-corl {
  text-decoration: underline;
  color: #a5d6ff;
}

.markdown-body-dark g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body-dark g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body-dark .task-list-item {
  list-style-type: none;
}

.markdown-body-dark .task-list-item label {
  font-weight: 400;
}

.markdown-body-dark .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body-dark .task-list-item+.task-list-item {
  margin-top: 4px;
}

.markdown-body-dark .task-list-item .handle {
  display: none;
}

.markdown-body-dark .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body-dark .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body-dark .contains-task-list {
  position: relative;
}

.markdown-body-dark .contains-task-list:hover .task-list-item-convert-container,
.markdown-body-dark .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body-dark ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body-dark .markdown-alert {
  padding: 8px 16px;
  margin-bottom: 16px;
  color: inherit;
  border-left: .25em solid #30363d;
}

.markdown-body-dark .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body-dark .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body-dark .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.markdown-body-dark .markdown-alert.markdown-alert-note {
  border-left-color: #1f6feb;
}

.markdown-body-dark .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #2f81f7;
}

.markdown-body-dark .markdown-alert.markdown-alert-important {
  border-left-color: #8957e5;
}

.markdown-body-dark .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: #a371f7;
}

.markdown-body-dark .markdown-alert.markdown-alert-warning {
  border-left-color: #9e6a03;
}

.markdown-body-dark .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #d29922;
}

.markdown-body-dark .markdown-alert.markdown-alert-tip {
  border-left-color: #238636;
}

.markdown-body-dark .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #3fb950;
}

.markdown-body-dark .markdown-alert.markdown-alert-caution {
  border-left-color: #da3633;
}

.markdown-body-dark .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #f85149;
}
</style>

`;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  marked.use({ gfm: true });
  let template = $page.url.searchParams.get("template") || "";
  let templateSectionsIDS = templates[template];
  let sections$1 = templateSectionsIDS.map((id) => {
    let section = sections.find((section2) => section2.id === id);
    return { ...section };
  });
  let currentSectionID;
  let sectionSearch = "";
  let showNewReadmeModal = false;
  let showAddSectionModal = false;
  let showDeleteSectionModal = false;
  let showDownloadModal = false;
  let showCopyModal = false;
  let concatenatedMarkdown = sections$1.map((section) => section.markdown).join("\n\n");
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="grow flex flex-col"><div class="container mx-auto w-full flex flex-col md:flex-row gap-2 justify-between border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-2">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
      default: () => {
        return `${validate_component(InfoCircleOutline, "InfoCircleOutline").$$render($$result, { class: "w-4 h-4 me-2" }, {}, {})}
			New Readme`;
      }
    })} <div class="flex flex-col md:flex-row gap-2">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
      default: () => {
        return `${validate_component(ClipboardSolid, "ClipboardSolid").$$render($$result, { class: "w-4 h-4 me-2" }, {}, {})}
				Copy`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(DownloadSolid, "DownloadSolid").$$render($$result, { class: "w-4 h-4 me-2" }, {}, {})}
				Download`;
      }
    })}</div></div> <div class="h-full lg:h-fs container mx-auto w-full flex flex-col lg:flex-row gap-6 justify-between py-6">${`<div class="flex flex-col items-center gap-2 w-full h-full overflow-scroll no-scrollbar">${validate_component(SectionList, "SectionList").$$render($$result, { items: sections$1 }, {}, {})} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "w-full",
        color: "light",
        size: "xl"
      },
      {},
      {
        default: () => {
          return `${validate_component(CirclePlusOutline, "CirclePlusOutline").$$render($$result, { class: "w-5 h-5 mr-2" }, {}, {})}
					Add Section`;
        }
      }
    )}</div>`} <div class="flex flex-col gap-4 w-full"><div class="markdown-body-dark w-full h-full rounded-lg border p-4 lg:overflow-scroll hidden dark:block border-gray-700"><!-- HTML_TAG_START -->${style}<!-- HTML_TAG_END --> <!-- HTML_TAG_START -->${marked.parse(concatenatedMarkdown)}<!-- HTML_TAG_END --></div> <div class="markdown-body w-full h-full rounded-lg border p-4 lg:overflow-scroll block dark:hidden"><!-- HTML_TAG_START -->${style$1}<!-- HTML_TAG_END --> <!-- HTML_TAG_START -->${marked.parse(concatenatedMarkdown)}<!-- HTML_TAG_END --></div></div></div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Add Section",
        size: "sm",
        autoclose: true,
        open: showAddSectionModal
      },
      {
        open: ($$value) => {
          showAddSectionModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Textarea, "Textarea").$$render(
            $$result,
            {
              id: "textarea-id",
              placeholder: "Search section...",
              rows: "1",
              name: "message",
              unWrappedClass: "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none",
              value: sectionSearch
            },
            {
              value: ($$value) => {
                sectionSearch = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        },
        default: () => {
          return `<div class="flex flex-col gap-4">${each(sections.filter((section) => section.name.toLowerCase().includes(sectionSearch)), (section) => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                color: "light",
                size: "xl",
                class: "justify-start"
              },
              {},
              {
                default: () => {
                  return `${escape(section.name)} `;
                }
              }
            )}`;
          })}</div>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        open: showNewReadmeModal
      },
      {
        open: ($$value) => {
          showNewReadmeModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-center">${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render(
            $$result,
            {
              class: "mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            },
            {},
            {}
          )} <h3 class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-131qjq4">Are you sure you want to start a new readme?
			<br>
			You will lose all current progress!</h3> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              href: "/new",
              color: "red",
              class: "me-2"
            },
            {},
            {
              default: () => {
                return `Yes, I&#39;m sure`;
              }
            }
          )} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `No, cancel`;
            }
          })}</div>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        open: showDeleteSectionModal
      },
      {
        open: ($$value) => {
          showDeleteSectionModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-center">${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render(
            $$result,
            {
              class: "mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            },
            {},
            {}
          )} <h3 class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">Please confirm the deletion of the section
			<br> ${escape(sections$1.find((section) => section.id === currentSectionID).name)}</h3> ${validate_component(Button, "Button").$$render($$result, { color: "red", class: "me-2" }, {}, {
            default: () => {
              return `Delete`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })}</div>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        open: showDownloadModal
      },
      {
        open: ($$value) => {
          showDownloadModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ExportModal, "ExportModal").$$render($$result, { message: "Readme Downloaded" }, {}, {})}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        open: showCopyModal
      },
      {
        open: ($$value) => {
          showCopyModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ExportModal, "ExportModal").$$render($$result, { message: "Readme Copied to Clipboard" }, {}, {})}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};

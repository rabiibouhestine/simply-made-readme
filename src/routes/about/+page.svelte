<script>
	import { AccordionItem, Accordion, Heading, P } from 'flowbite-svelte';
</script>

<div class="w-full max-w-5xl mx-auto flex flex-col gap-20 my-32 items-center">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
		About
	</Heading>
	<div class="flex flex-col gap-6">
		<P>
			Simply Made Readme is an online web app for creating readme.md files for your projects! Our
			goal is to provide a simple and intuitive tool that allows developers to quickly and easily
			generate readme files without any hassle.
		</P>
		<P>
			Unlike other similar tools, our web app doesn't require any sign-up, authentication, or
			backend. You can start using it immediately, straight from your browser, with no data being
			collected or stored on our servers. Everything is saved securely in your browser's local
			storage.
		</P>
		<!-- <P>
			We believe in the power of open source and the importance of freely accessible tools for
			developers. That's why our project is fully open source, and we welcome contributions from the
			community to make it even better.
		</P> -->
		<P>
			Whether you're working on a small personal project or a large-scale open source endeavor, our
			web app is here to help you create informative and well-structured readme files. So dive in,
			start crafting your project documentation, and let us know how we can improve your experience!
		</P>
	</div>
</div>

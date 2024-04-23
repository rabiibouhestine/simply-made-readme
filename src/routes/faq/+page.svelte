<script>
	import { AccordionItem, Accordion, Heading, P } from 'flowbite-svelte';
</script>

<div class="w-full max-w-5xl mx-auto flex flex-col gap-20 my-32 items-center">
	<div class="flex flex-col items-center max-w-4xl mx-auto">
		<Heading
			tag="h1"
			class="mb-4"
			customSize="text-center text-4xl font-extrabold  md:text-5xl lg:text-6xl"
		>
			Frequently Asked Questions
		</Heading>
	</div>
	<Accordion flush class="w-full">
		<AccordionItem>
			<span slot="header">How does the web app work without any sign-up or authentication?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Our web app operates entirely on the client-side, meaning all functionality is executed
				within the user's browser. No data is sent to or stored on any servers. Users can access the
				tool immediately without the need for sign-up or authentication.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Is my data safe if it's stored in the browser's local storage?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Yes, your data is safe. Local storage is a secure method provided by web browsers to store
				data within the user's device. It can only be accessed by the same website that stored it,
				and it's not shared with other websites or servers.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Can I access my readme files from different devices?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Unfortunately, since the data is stored locally in your browser, it's not accessible from
				other devices. However, you can easily export your readme files and import them into another
				browser on a different device.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">How can I export or save my readme file?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				You can export your readme file as a .md file directly from the web app. Simply click on the
				export button, and the file will be saved to your device. Alternatively, you can copy the
				markdown content and paste it into any text editor to save it.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">What features does the web app offer for creating readme files?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Our web app provides a simple and intuitive interface for creating readme files. Users can
				add sections such as project title, description, installation instructions, usage examples,
				and more. It also supports markdown syntax for formatting.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Can I customize the layout and style of my readme file?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Yes, you can customize the layout and style of your readme file using markdown syntax. Our
				web app supports various markdown features, allowing you to create visually appealing and
				informative readme files.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Is there a limit to the number of readme files I can create?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				No, there is no limit. You can create as many readme files as you need. Since everything is
				stored locally, you have full control over your projects and their associated readme files.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Can I suggest new features or report issues with the web app?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Absolutely! We welcome feedback, suggestions, and bug reports. Feel free to reach out to us
				through our contact form or GitHub repository. We're constantly looking to improve the tool
				based on user feedback.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Is the web app open source?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				Yes, our web app is 100% open source. You can view the source code and contribute to its
				development on our GitHub repository. We believe in transparency and community-driven
				development.
			</p>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">How can I support the project?</span>
			<p class="mb-2 text-gray-500 dark:text-gray-400">
				You can support the project by spreading the word, contributing to its development on
				GitHub, or by donating to help cover hosting costs. Every contribution, no matter how small,
				is greatly appreciated and helps keep the project free for everyone.
			</p>
		</AccordionItem>
	</Accordion>
</div>

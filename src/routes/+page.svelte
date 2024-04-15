<script>
	import { Heading, P, Button } from 'flowbite-svelte';
</script>

<div class="flex flex-col gap-32 my-32 items-center">
	<div class="flex flex-col items-center max-w-3xl mx-auto">
		<Heading
			tag="h1"
			class="mb-4"
			customSize="text-center text-4xl font-extrabold  md:text-5xl lg:text-6xl"
		>
			The easiest way to create a <span class="text-primary-600">README</span>
		</Heading>
		<P class="mb-6 text-center text-lg lg:text-xl px-16  dark:text-gray-400">
			A simple editor that allows you to easily add and customize all the sections you need for your
			project's readme
		</P>
		<div class="flex flex-col gap-2 items-center">
			<Button size="xl" href="/type" class="px-10">Get Started</Button>
			<p class="text-sm text-slate-600">No Email Required</p>
		</div>
	</div>
	<img
		src="https://readme.so/_next/image?url=%2Fscreenshot.png&w=3840&q=75"
		alt="editor screenshot"
		class="rounded-lg max-w-6xl mx-auto"
	/>
	<p class="flex gap-1">
		Made with <span class="text-red-500">♡</span> by
		<a href="https://rabiibouhestine.com" target="_blank" class="text-primary-600 hover:underline">
			Rabii Bouhestine
		</a>
	</p>
</div>

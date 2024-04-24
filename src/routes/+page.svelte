<script>
	import { Heading, P, Button } from 'flowbite-svelte';
	import { GithubSolid } from 'flowbite-svelte-icons';
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
			<Button size="xl" href="/new" class="px-10">Make a Readme</Button>
			<p class="text-sm text-slate-600 dark:text-gray-400">No sign-up required</p>
		</div>
	</div>
	<img
		src="/images/editorLight.png"
		alt="editor screenshot"
		class="flex dark:hidden border rounded-lg max-w-6xl mx-auto"
	/>
	<img
		src="/images/editorDark.png"
		alt="editor screenshot"
		class="hidden dark:flex border border-gray-700 rounded-lg max-w-6xl mx-auto"
	/>
	<div class="flex flex-col items-center gap-4">
		<P class="flex gap-1 items-center">
			Made with <span class="text-xl">☕</span> by
			<a
				href="https://rabiibouhestine.com"
				target="_blank"
				class="text-primary-600 hover:underline"
			>
				Rabii Bouhestine
			</a>
		</P>
		<Button
			href="https://github.com/rabiibouhestine/simply-made-readme"
			target="_blank"
			color="light"
			class="w-fit"
		>
			<GithubSolid class="w-4 h-4 me-2" />
			Star on Github
		</Button>
	</div>
</div>

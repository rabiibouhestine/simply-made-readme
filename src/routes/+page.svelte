<script>
	import { Heading, P, Button, Card } from 'flowbite-svelte';
	import { GithubSolid, GiftBoxSolid } from 'flowbite-svelte-icons';
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
	<div class="flex flex-col gap-6">
		<Heading tag="h2" class="mb-4" customSize="text-center font-extrabold  text-4xl lg:text-5xl">
			Features
		</Heading>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each [1, 2, 3, 4, 5, 6] as feature}
				<Card class="col-span-1">
					<GiftBoxSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
					<a href="/">
						<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Need a help in Claim?
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
						Go to this step by step guideline process on how to certify for your weekly benefits:
					</p>
				</Card>
			{/each}
		</div>
	</div>
	<div class="flex flex-col items-center gap-4">
		<P class="flex gap-1 ">
			Made with <span class="text-primary-600">♡</span> by
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

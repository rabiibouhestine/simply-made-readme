<script lang="ts">
	import { Heading, P, Button } from 'flowbite-svelte';

	const types = [
		{
			img: 'https://resumeninja.io/lemo-template.jpg',
			label: 'Github Profile'
		},
		{
			img: 'https://resumeninja.io/classic-template.jpg',
			label: 'Package/Library'
		},
		{
			img: 'https://resumeninja.io/harvard-template.jpg',
			label: 'Web Application'
		}
	];
</script>

<div class="flex flex-col gap-20 my-32 items-center">
	<div class="flex flex-col items-center max-w-3xl mx-auto">
		<Heading
			tag="h1"
			class="mb-4"
			customSize="text-center text-4xl font-extrabold  md:text-5xl lg:text-6xl"
		>
			Choose a Template
		</Heading>
		<P class="mb-6 text-center text-lg lg:text-xl px-16  dark:text-gray-400">
			Find the ideal template to highlight your expertise and qualifications from our curated
			selection of professional resume templates.
		</P>
	</div>
	<div class="flex gap-8">
		{#each types as type}
			<a href="/editor" class="flex flex-col gap-2 items-center group">
				<img
					src={type.img}
					alt="editor screenshot"
					class="rounded-lg w-80 border group-hover:border-primary-600 transition duration-150 ease-in-out"
				/>
				<p class="text-lg font-medium">{type.label}</p>
			</a>
		{/each}
	</div>
</div>

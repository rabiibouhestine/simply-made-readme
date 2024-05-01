<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';

	const types = [
		{
			img: '/images/emptyLight.png',
			imgDark: '/images/emptyDark.png',
			label: 'Empty Readme',
			link: '/editor?template=empty'
		},
		{
			img: '/images/profileLight.png',
			imgDark: '/images/profileDark.png',
			label: 'Github Profile',
			link: '/editor?template=profile'
		},
		{
			img: '/images/projectLight.png',
			imgDark: '/images/projectDark.png',
			label: 'Project Readme',
			link: '/editor?template=project'
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
			Pick the template that fits your needs. You can add/remove sections and edit as needed.
			Template suggestions are welcome.
		</P>
	</div>
	<div class="grid grid-cols-3 gap-8">
		{#each types as type}
			<a href={type.link} class="flex flex-col gap-2 items-center group">
				<img
					src={type.img}
					alt="editor screenshot"
					class="flex dark:hidden rounded-lg w-80 border group-hover:border-primary-600 transition duration-150 ease-in-out"
				/>
				<img
					src={type.imgDark}
					alt="editor screenshot"
					class="hidden dark:flex rounded-lg w-80 border border-gray-700 group-hover:border-primary-600 transition duration-150 ease-in-out"
				/>
				<p class="text-lg font-medium dark:text-gray-300">{type.label}</p>
			</a>
		{/each}
	</div>
</div>

<script>
	import '../app.css';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Navbar class="bg-gray-50">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Simply Made Readme
			</span>
		</NavBrand>
		<NavHamburger />
		<NavUl
			ulClass="flex items-center flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium"
		>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/faq">FAQ</NavLi>
			<DarkMode />
		</NavUl>
	</Navbar>
	<div class="bg-gray-50 dark:bg-gray-900 grow flex flex-col">
		<slot />
	</div>
</div>

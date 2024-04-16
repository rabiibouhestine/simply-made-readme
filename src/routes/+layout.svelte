<script>
	import '../app.css';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<svelte:head>
	<script
		data-name="BMC-Widget"
		data-cfasync="false"
		src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
		data-id="rabiibouhestine"
		data-description="Support me on Buy me a coffee!"
		data-message=""
		data-color="#FF813F"
		data-position="Right"
		data-x_margin="18"
		data-y_margin="18"
	></script>
</svelte:head>

<Navbar>
	<NavBrand href="/">
		<!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
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
		<NavLi href="/docs/components/navbar">FAQ</NavLi>
		<DarkMode />
	</NavUl>
</Navbar>
<slot />

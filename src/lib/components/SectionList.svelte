<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { TrashBinOutline, DotsVerticalOutline } from 'flowbite-svelte-icons';

	let items = [
		{ id: 1, name: 'Title' },
		{ id: 2, name: 'Description' },
		{ id: 3, name: 'Paragraph' },
		{ id: 4, name: 'Attribution (Not Required)' }
	];

	const flipDurationMs = 300;
	const dropTargetStyle = {};

	function handleDndConsider(e: any) {
		items = e.detail.items;
	}
	function handleDndFinalize(e: any) {
		items = e.detail.items;
	}
</script>

<div
	class="w-full"
	use:dndzone={{ items, flipDurationMs, dropTargetStyle }}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div class="flex mb-2" animate:flip={{ duration: flipDurationMs }}>
			<div class="bg-gray-50 p-4 border flex rounded-l-lg">
				<DotsVerticalOutline class="w-6 h-6" />
				<DotsVerticalOutline class="w-6 h-6 -ml-4" />
				<DotsVerticalOutline class="w-6 h-6 -ml-4" />
			</div>
			<div class="bg-gray-50 p-4 border-t border-b grow">
				{item.name}
			</div>
			<div
				class="bg-gray-50 text-gray-500 hover:bg-red-500 hover:text-gray-100 p-4 border rounded-r-lg"
			>
				<TrashBinOutline class="w-6 h-6 " />
			</div>
		</div>
	{/each}
</div>

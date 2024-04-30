<script lang="ts">
	import Sortable from 'sortablejs';
	import { flip } from 'svelte/animate';
	import { TrashBinOutline, DotsVerticalOutline } from 'flowbite-svelte-icons';
	import { createEventDispatcher, onMount } from 'svelte';

	export let items: any[] = [];

	const dispatch = createEventDispatcher();

	function editSection(id: number) {
		dispatch('editSection', {
			id
		});
	}
	function deleteSection(id: number) {
		dispatch('deleteSection', {
			id
		});
	}

	function moveElement(array: any[], fromIndex: any, toIndex: any) {
		// Remove the element from its current position
		const element = array.splice(fromIndex, 1)[0];

		// Insert the element at the new position
		array.splice(toIndex, 0, element);

		return array;
	}

	onMount(() => {
		let el: HTMLElement = document.getElementById('items') as HTMLElement;
		new Sortable(el, {
			handle: '.handle',
			animation: 150,
			onEnd: function (evt) {
				items = moveElement(items, evt.oldIndex, evt.newIndex);
				dispatch('listUpdated', {
					items
				});
			}
		});
	});
</script>

<div id="items" class="w-full flex flex-col gap-2">
	{#each items as item (item.id)}
		<div class="flex" animate:flip={{ duration: 200 }}>
			<div
				class="handle bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white p-4 border flex rounded-l-lg hover:cursor-grab"
			>
				<DotsVerticalOutline class="w-6 h-6" />
				<DotsVerticalOutline class="w-6 h-6 -ml-4" />
			</div>
			<button
				on:click={() => {
					editSection(item.id);
				}}
				class="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white p-4 border-t border-b grow text-left hover:dark:text-primary-600 hover:text-primary-600"
			>
				{item.name}
			</button>
			<button
				on:click={() => {
					deleteSection(item.id);
				}}
				class="bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white text-gray-500 p-4 border rounded-r-lg group"
			>
				<TrashBinOutline class="w-6 h-6 group-hover:text-primary-600" />
			</button>
		</div>
	{/each}
</div>

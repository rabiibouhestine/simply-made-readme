<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone, SOURCES, TRIGGERS } from 'svelte-dnd-action';
	import { TrashBinOutline, DotsVerticalOutline } from 'flowbite-svelte-icons';
	import { createEventDispatcher } from 'svelte';

	export let items: any[] = [];

	const flipDurationMs = 200;
	const dropTargetStyle = {};
	let dragDisabled = true;

	const dispatch = createEventDispatcher();

	function handleConsider(e: any) {
		const {
			items: newItems,
			info: { source, trigger }
		} = e.detail;
		items = newItems;
		// Ensure dragging is stopped on drag finish via keyboard
		if (source === SOURCES.KEYBOARD && trigger === TRIGGERS.DRAG_STOPPED) {
			dragDisabled = true;
		}
	}
	function handleFinalize(e: any) {
		const {
			items: newItems,
			info: { source }
		} = e.detail;
		items = newItems;
		// Ensure dragging is stopped on drag finish via pointer (mouse, touch)
		if (source === SOURCES.POINTER) {
			dragDisabled = true;
		}
		dispatch('listUpdated', {
			items
		});
	}
	function startDrag(e: any) {
		// preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
		e.preventDefault();
		dragDisabled = false;
	}
	function handleKeyDown(e: any) {
		if ((e.key === 'Enter' || e.key === ' ') && dragDisabled) dragDisabled = false;
	}

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
</script>

<div
	class="w-full flex flex-col gap-2"
	use:dndzone={{ items, dragDisabled, flipDurationMs, dropTargetStyle }}
	on:consider={handleConsider}
	on:finalize={handleFinalize}
>
	{#each items as item (item.id)}
		<div class="flex" animate:flip={{ duration: flipDurationMs }}>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				tabindex={dragDisabled ? 0 : -1}
				aria-label="drag-handle"
				style={dragDisabled ? 'cursor: grab' : 'cursor: grabbing'}
				on:mousedown={startDrag}
				on:touchstart={startDrag}
				on:keydown={handleKeyDown}
				class="bg-white p-4 border flex rounded-l-lg"
			>
				<DotsVerticalOutline class="w-6 h-6" />
				<DotsVerticalOutline class="w-6 h-6 -ml-4" />
			</div>
			<button
				on:click={() => {
					editSection(item.id);
				}}
				class="bg-white p-4 border-t border-b grow text-left hover:text-primary-600"
			>
				{item.name}
			</button>
			<button
				on:click={() => {
					deleteSection(item.id);
				}}
				class="bg-white text-gray-500 p-4 border rounded-r-lg group"
			>
				<TrashBinOutline
					class="w-6 h-6 group-hover:text-red-500 group-hover:scale-105 transition duration-150 ease-in-out"
				/>
			</button>
		</div>
	{/each}
</div>

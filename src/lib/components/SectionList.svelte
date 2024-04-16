<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone, SOURCES, TRIGGERS } from 'svelte-dnd-action';
	import { TrashBinOutline, DotsVerticalOutline } from 'flowbite-svelte-icons';
	import { createEventDispatcher } from 'svelte';

	const flipDurationMs = 200;
	const dropTargetStyle = {};
	let dragDisabled = true;
	let items = [
		{ id: 1, name: 'Title' },
		{ id: 2, name: 'Description' },
		{ id: 3, name: 'Paragraph' },
		{ id: 4, name: 'Attribution (Not Required)' }
	];

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
	}
	function startDrag(e: any) {
		// preventing default to prevent lag on touch devices (because of the browser checking for screen scrolling)
		e.preventDefault();
		dragDisabled = false;
	}
	function handleKeyDown(e: any) {
		if ((e.key === 'Enter' || e.key === ' ') && dragDisabled) dragDisabled = false;
	}

	function sectionClick(id: number) {
		dispatch('sectionClick', {
			id
		});
	}
</script>

<div
	class="w-full"
	use:dndzone={{ items, dragDisabled, flipDurationMs, dropTargetStyle }}
	on:consider={handleConsider}
	on:finalize={handleFinalize}
>
	{#each items as item (item.id)}
		<div class="flex mb-2" animate:flip={{ duration: flipDurationMs }}>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				tabindex={dragDisabled ? 0 : -1}
				aria-label="drag-handle"
				style={dragDisabled ? 'cursor: grab' : 'cursor: grabbing'}
				on:mousedown={startDrag}
				on:touchstart={startDrag}
				on:keydown={handleKeyDown}
				class="bg-gray-50 p-4 border flex rounded-l-lg"
			>
				<DotsVerticalOutline class="w-6 h-6" />
				<DotsVerticalOutline class="w-6 h-6 -ml-4" />
			</div>
			<button
				on:click={() => {
					sectionClick(item.id);
				}}
				class="bg-gray-50 p-4 border-t border-b grow text-left hover:text-primary-600"
			>
				{item.name}
			</button>
			<button
				class="bg-gray-50 text-gray-500 hover:bg-red-500 hover:text-gray-100 p-4 border rounded-r-lg"
			>
				<TrashBinOutline class="w-6 h-6 " />
			</button>
		</div>
	{/each}
</div>

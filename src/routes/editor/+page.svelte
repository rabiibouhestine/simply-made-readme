<script lang="ts">
	import { marked } from 'marked';
	import { ButtonGroup, Button, Modal, Textarea } from 'flowbite-svelte';
	import GithubStyle from '$lib/githubStyle';
	import SectionList from '$lib/components/SectionList.svelte';

	import {
		UserCircleSolid,
		ExclamationCircleOutline,
		DownloadSolid,
		ClipboardSolid
	} from 'flowbite-svelte-icons';

	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Enter markdown here'
	};
	let showTextEditor = false;
	let popupModal = false;
	let downloadModal = false;
	let copyModal = false;
	let style = GithubStyle;

	let sections = [
		{
			id: 1,
			name: 'Title',
			markdown: `## Used B

This project is used by the following companies:

- Company 1
- Company 2`
		},
		{ id: 2, name: 'Description', markdown: '2222' },
		{ id: 3, name: 'Paragraph', markdown: '33333' },
		{ id: 4, name: 'Attribution (Not Required)', markdown: '44444' },
		{ id: 5, name: 'Title', markdown: '55555' },
		{ id: 6, name: 'Description', markdown: '' },
		{ id: 7, name: 'Paragraph', markdown: '' },
		{ id: 8, name: 'Attribution (Not Required)', markdown: '' },
		{ id: 9, name: 'Title', markdown: '' },
		{ id: 10, name: 'Description', markdown: '' }
	];

	let currentSectionID: any;
	let markdownInput = '';
	let concatenatedMarkdown = '';

	sections.forEach((section) => {
		concatenatedMarkdown += section.markdown;
	});

	function updateSections() {
		sections.filter((section) => section.id == currentSectionID)[0].markdown = markdownInput;
	}

	function updateOutput() {
		concatenatedMarkdown = '';
		sections.forEach((section) => {
			concatenatedMarkdown += section.markdown;
		});
	}
</script>

<div class="flex justify-between max-w-7xl mx-auto border bg-gray-50 rounded-lg p-1">
	<Button on:click={() => (popupModal = true)}>
		<UserCircleSolid class="w-3 h-3 me-2" />
		New Readme
	</Button>
	<ButtonGroup>
		<Button on:click={() => (copyModal = true)}>
			<ClipboardSolid class="w-3 h-3 me-2" />
			Copy
		</Button>
		<Button on:click={() => (downloadModal = true)}>
			<DownloadSolid class="w-3 h-3 me-2" />
			Download
		</Button>
	</ButtonGroup>
</div>

<div class="flex gap-6 justify-between max-w-7xl mx-auto mt-6">
	{#if showTextEditor}
		<div class="w-full flex flex-col">
			<div class="flex">
				<div class="border rounded-tl-lg p-4 grow">
					<h2>Section Title</h2>
				</div>
				<button
					on:click={() => {
						showTextEditor = false;
					}}
					class="border border-l-0 rounded-tr-lg p-4"
				>
					<h2>Close</h2>
				</button>
			</div>
			<textarea
				class="h-full rounded-b-lg border-t-0 border-gray-200 focus:border-gray-200 focus:ring-0 resize-none"
				placeholder="Enter markdown here"
				bind:value={markdownInput}
				on:input={() => {
					updateSections();
					updateOutput();
				}}
			/>
		</div>
	{:else}
		<SectionList
			items={sections}
			on:editSection={(event) => {
				currentSectionID = event.detail.id;
				markdownInput = sections.filter((section) => section.id == event.detail.id)[0].markdown;
				showTextEditor = true;
			}}
			on:deleteSection={(event) => {
				sections = sections.filter((section) => section.id !== event.detail.id);
				updateOutput();
			}}
		/>
	{/if}
	<div class="flex flex-col gap-4 w-full">
		<div class="markdown-body w-full h-[550px] rounded-lg border p-4">
			{@html style}
			{@html marked(concatenatedMarkdown)}
		</div>
	</div>
</div>

<Modal bind:open={popupModal} size="xs" autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">
			Are you sure you want to start a new readme?
		</h3>
		<p class="mb-5">You will not be able to restore your current document</p>
		<Button href="/new" color="red" class="me-2">Yes, I'm sure</Button>
		<Button color="alternative">No, cancel</Button>
	</div>
</Modal>
<Modal bind:open={downloadModal} size="xs" autoclose>
	<div class="flex flex-col items-center text-center">
		<img src="/party.svg" alt="Success" class="w-20" />
		<h3 class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-8">Readme Downloaded</h3>
		<p class="text-sm mb-5">
			Thanks for using Simply Made Readme! Feel free to reach out to me with any feedback at
			rabiibouhestine@gmail.com
		</p>
		<p class="text-sm mb-8">If you found this product helpful, consider supporting me!</p>
		<a href="https://www.buymeacoffee.com/rabiibouhestine" target="_blank">
			<img
				src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
				alt="Buy Me A Coffee"
				style="height: 60px !important;width: 217px !important;"
			/>
		</a>
	</div>
</Modal>
<Modal bind:open={copyModal} size="xs" autoclose>
	<div class="flex flex-col items-center text-center">
		<img src="/party.svg" alt="Success" class="w-20" />
		<h3 class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-8">
			Readme Copied to Clipboard
		</h3>
		<p class="text-sm mb-5">
			Thanks for using Simply Made Readme! Feel free to reach out to me with any feedback at
			rabiibouhestine@gmail.com
		</p>
		<p class="text-sm mb-8">If you found this product helpful, consider supporting me!</p>
		<a href="https://www.buymeacoffee.com/rabiibouhestine" target="_blank">
			<img
				src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
				alt="Buy Me A Coffee"
				style="height: 60px !important;width: 217px !important;"
			/>
		</a>
	</div>
</Modal>

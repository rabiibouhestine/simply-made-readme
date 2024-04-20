<script lang="ts">
	import { marked } from 'marked';
	import { ButtonGroup, Button, Card, Modal } from 'flowbite-svelte';
	import GithubStyle from '$lib/githubStyle';
	import templates from '$lib/templates';
	import premadeSections from '$lib/sections';
	import SectionList from '$lib/components/SectionList.svelte';
	import { page } from '$app/stores';
	import ExportModal from '$lib/components/ExportModal.svelte';

	let template = $page.url.searchParams.get('template') || '';
	let sections: any[] = (templates as any)[template];

	import {
		UserCircleSolid,
		ExclamationCircleOutline,
		DownloadSolid,
		ClipboardSolid,
		CirclePlusOutline
	} from 'flowbite-svelte-icons';

	let style = GithubStyle;
	let showTextEditor = false;

	let currentSectionID: any;

	let markdownInput = '';
	let titleInput = '';

	let showNewReadmeModal = false;
	let showAddSectionModal = false;
	let showDeleteSectionModal = false;
	let showDownloadModal = false;
	let showCopyModal = false;

	let concatenatedMarkdown = '';
	sections.forEach((section: any) => {
		concatenatedMarkdown +=
			section.markdown +
			`
			
`;
	});

	function handleCopy() {
		// Copy concatenated markdown to clipboard
		navigator.clipboard.writeText(concatenatedMarkdown);

		// Show copy success modal
		showCopyModal = true;
	}

	function handleDownload() {
		// Create a Blob containing the text with Markdown content type
		const blob = new Blob([concatenatedMarkdown], { type: 'text/markdown' });

		// Create a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create a temporary anchor element
		const a = document.createElement('a');

		// Set the anchor's attributes
		a.href = url;
		a.download = 'readme.md';

		// Append the anchor to the document body
		document.body.appendChild(a);

		// Trigger a click event on the anchor
		a.click();

		// Remove the anchor from the document body
		document.body.removeChild(a);

		// Revoke the URL to release memory
		URL.revokeObjectURL(url);

		// Show Download Success Modal
		showDownloadModal = true;
	}

	function addSection(id: any) {
		// Get selected section from premadeSections
		const selectedSection = premadeSections.filter((section: any) => section.id == id)[0];

		// Append selected section to the sections
		sections = [...sections, selectedSection];

		// Update concatenated markdown
		reconcatenateMarkdown();

		// Close modal
		showAddSectionModal = false;
	}

	function deleteSection(id: any) {
		sections = sections.filter((section) => section.id !== id);
		reconcatenateMarkdown();
	}

	function updateSections() {
		sections.filter((section: any) => section.id == currentSectionID)[0].markdown = markdownInput;
	}

	function updateSectionTitle() {
		sections.filter((section: any) => section.id == currentSectionID)[0].name = titleInput;
	}

	function reconcatenateMarkdown() {
		concatenatedMarkdown = '';
		sections.forEach((section: any) => {
			concatenatedMarkdown +=
				section.markdown +
				`
			
`;
		});
	}
</script>

<div class="flex justify-between max-w-7xl mx-auto border bg-gray-50 rounded-lg p-1">
	<Button on:click={() => (showNewReadmeModal = true)}>
		<UserCircleSolid class="w-3 h-3 me-2" />
		New Readme
	</Button>
	<ButtonGroup>
		<Button on:click={handleCopy}>
			<ClipboardSolid class="w-3 h-3 me-2" />
			Copy
		</Button>
		<Button on:click={handleDownload}>
			<DownloadSolid class="w-3 h-3 me-2" />
			Download
		</Button>
	</ButtonGroup>
</div>

<div class="flex gap-6 justify-between max-w-7xl mx-auto mt-6">
	{#if showTextEditor}
		<div class="w-full flex flex-col">
			<div class="flex">
				<textarea
					class="border rounded-tl-lg grow border-gray-200 focus:border-gray-200 focus:ring-0 resize-none"
					bind:value={titleInput}
					on:input={updateSectionTitle}
				/>
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
					reconcatenateMarkdown();
				}}
			/>
		</div>
	{:else}
		<div class="flex flex-col gap-2 w-full h-[550px] overflow-scroll no-scrollbar">
			<SectionList
				items={sections}
				on:editSection={(event) => {
					currentSectionID = event.detail.id;
					titleInput = sections.filter((section) => section.id == event.detail.id)[0].name;
					markdownInput = sections.filter((section) => section.id == event.detail.id)[0].markdown;
					showTextEditor = true;
				}}
				on:deleteSection={(event) => {
					currentSectionID = event.detail.id;
					showDeleteSectionModal = true;
				}}
				on:listUpdated={(e) => {
					sections = e.detail.items;
					reconcatenateMarkdown();
				}}
			/>
			<Button on:click={() => (showAddSectionModal = true)} class="py-4">
				<CirclePlusOutline class="w-4 h-4 mr-2" />
				Add Section
			</Button>
		</div>
	{/if}
	<div class="flex flex-col gap-4 w-full">
		<div class="markdown-body w-full h-[550px] rounded-lg border p-4 overflow-scroll">
			{@html style}
			{@html marked(concatenatedMarkdown)}
		</div>
	</div>
</div>

<Modal bind:open={showAddSectionModal} size="xl" autoclose>
	<h2 class="text-4xl text-gray-900 dark:text-white">Add Section</h2>
	<div class="grid grid-cols-4 gap-4">
		{#each premadeSections as section}
			<button
				on:click={() => {
					addSection(section.id);
				}}
				class="text-left hover:scale-105 transition duration-150 ease-in-out"
			>
				<Card>
					<h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
						{section.name}
					</h5>
					<p class="font-normal text-gray-500 dark:text-gray-400">
						{section.description}
					</p>
				</Card>
			</button>
		{/each}
	</div>
</Modal>
<Modal bind:open={showNewReadmeModal} size="xs" autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
			Are you sure you want to start a new readme?
			<br />
			You will lose all current progress!
		</h3>
		<Button href="/new" color="red" class="me-2">Yes, I'm sure</Button>
		<Button color="alternative">No, cancel</Button>
	</div>
</Modal>
<Modal bind:open={showDeleteSectionModal} size="xs" autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
		<h3 class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
			Are you sure you want to delete the section:
			<br />
			{sections.filter((section) => section.id == currentSectionID)[0].name}
		</h3>
		<Button
			on:click={() => {
				deleteSection(currentSectionID);
				showDeleteSectionModal = false;
			}}
			color="red"
			class="me-2">Yes, I'm sure</Button
		>
		<Button color="alternative">No, cancel</Button>
	</div>
</Modal>
<Modal bind:open={showDownloadModal} size="xs" autoclose>
	<ExportModal message="Readme Downloaded" />
</Modal>
<Modal bind:open={showCopyModal} size="xs" autoclose>
	<ExportModal message="Readme Copied to Clipboard" />
</Modal>

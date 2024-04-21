<script lang="ts">
	import { marked } from 'marked';
	import { v4 as uuidv4 } from 'uuid';
	import { ButtonGroup, Button, Card, Modal, Textarea } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import SectionList from '$lib/components/SectionList.svelte';
	import ExportModal from '$lib/components/ExportModal.svelte';
	import templates from '$lib/templates';
	import premadeSections from '$lib/sections';
	import GithubStyle from '$lib/githubStyle';

	let template = $page.url.searchParams.get('template') || '';
	let sections: any[] = (templates as any)[template];

	import {
		InfoCircleOutline,
		ExclamationCircleOutline,
		DownloadSolid,
		ClipboardSolid,
		CirclePlusOutline,
		CloseCircleSolid
	} from 'flowbite-svelte-icons';

	let style = GithubStyle;
	let showTextEditor = false;

	let currentSectionID: any;

	let markdownInput = '';
	let sectionNameInput = '';

	let showNewReadmeModal = false;
	let showAddSectionModal = false;
	let showDeleteSectionModal = false;
	let showDownloadModal = false;
	let showCopyModal = false;

	let concatenatedMarkdown = sections.map((section) => section.markdown).join('\n\n');

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
		const selectedSection = premadeSections.find((section) => section.id === id);

		// Copy selected section
		const copiedSection = { ...selectedSection };

		// Generate a new id for the copied section
		copiedSection.id = uuidv4();

		// Append selected section to the sections
		sections = [...sections, copiedSection];

		// Update concatenated markdown
		reconcatenateMarkdown();

		// Close modal
		showAddSectionModal = false;
	}

	function deleteSection(id: any) {
		// Remove selected section from the sections
		sections = sections.filter((section) => section.id !== id);

		// Update concatenated markdown
		reconcatenateMarkdown();
	}

	function updateSectionMarkdown() {
		const sectionIndex = sections.findIndex((section) => section.id === currentSectionID);
		if (sectionIndex !== -1) {
			sections[sectionIndex].markdown = markdownInput;
		}
	}

	function updateSectionName() {
		const sectionIndex = sections.findIndex((section) => section.id === currentSectionID);
		if (sectionIndex !== -1) {
			sections[sectionIndex].name = sectionNameInput;
		}
	}

	function reconcatenateMarkdown() {
		concatenatedMarkdown = sections.map((section) => section.markdown).join('\n\n');
	}
</script>

<div class="grow flex flex-col">
	<div
		class="w-full flex justify-between max-w-7xl mx-auto border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-2"
	>
		<Button on:click={() => (showNewReadmeModal = true)} color="light">
			<InfoCircleOutline class="w-4 h-4 me-2" />
			New Readme
		</Button>
		<div class="flex gap-2">
			<Button on:click={handleCopy} color="light">
				<ClipboardSolid class="w-4 h-4 me-2" />
				Copy
			</Button>
			<Button on:click={handleDownload}>
				<DownloadSolid class="w-4 h-4 me-2" />
				Download
			</Button>
		</div>
	</div>

	<div class="full-height w-full flex gap-6 justify-between max-w-7xl mx-auto py-6">
		{#if showTextEditor}
			<div class="w-full h-full">
				<div
					class="w-full h-full flex flex-col gap-2 border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700"
				>
					<div class="flex gap-2">
						<Textarea
							id="textarea-id"
							placeholder="Enter Section Name here"
							rows="1"
							name="name"
							unWrappedClass="p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none"
							bind:value={sectionNameInput}
							on:input={updateSectionName}
						/>
						<Button on:click={() => (showTextEditor = false)}>
							<CloseCircleSolid class="w-4 h-4 me-2" />
							Close
						</Button>
					</div>
					<Textarea
						id="textarea-id"
						placeholder="Enter markdown here"
						rows="4"
						name="markdown"
						unWrappedClass="p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 h-full resize-none"
						bind:value={markdownInput}
						on:input={() => {
							updateSectionMarkdown();
							reconcatenateMarkdown();
						}}
					/>
				</div>
			</div>
		{:else}
			<div class="flex flex-col items-center gap-2 w-full h-full overflow-scroll no-scrollbar">
				<SectionList
					items={sections}
					on:editSection={(event) => {
						currentSectionID = event.detail.id;
						sectionNameInput = sections.find((section) => section.id === event.detail.id).name;
						markdownInput = sections.find((section) => section.id === event.detail.id).markdown;
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
				<Button
					on:click={() => (showAddSectionModal = true)}
					class="w-full"
					color="light"
					size="xl"
				>
					<CirclePlusOutline class="w-5 h-5 mr-2" />
					Add Section
				</Button>
			</div>
		{/if}
		<div class="flex flex-col gap-4 w-full">
			<div
				class="markdown-body w-full h-full rounded-lg border p-4 overflow-scroll dark:bg-gray-800 dark:text-white dark:border-gray-700"
			>
				{@html style}
				{@html marked(concatenatedMarkdown)}
			</div>
		</div>
	</div>
</div>

<Modal bind:open={showAddSectionModal} size="sm" autoclose>
	<h2 class="text-4xl text-gray-900 dark:text-white">Add Section</h2>
	<div class="flex flex-col gap-4">
		{#each premadeSections as section}
			<Button
				on:click={() => {
					addSection(section.id);
				}}
				color="light"
				size="xl"
				class="justify-start"
			>
				{section.name}
			</Button>
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
			{sections.find((section) => section.id === currentSectionID).name}
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

<style>
	.full-height {
		height: calc(100vh - 150px);
	}
</style>

<script>
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
	let popupModal = false;
	let markdown = '';
	let style = GithubStyle;
</script>

<div class="flex justify-between max-w-7xl mx-auto border bg-gray-50 rounded-lg p-1">
	<Button on:click={() => (popupModal = true)}>
		<UserCircleSolid class="w-3 h-3 me-2" />
		New Readme
	</Button>
	<ButtonGroup>
		<Button>
			<ClipboardSolid class="w-3 h-3 me-2" />
			Copy
		</Button>
		<Button>
			<DownloadSolid class="w-3 h-3 me-2" />
			Download
		</Button>
	</ButtonGroup>
</div>

<div class="flex gap-6 justify-between max-w-7xl mx-auto mt-6">
	<!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
	<Textarea {...textareaprops} bind:value={markdown} class="w-full" />

	<!-- Convert the markdown to HTML and display it -->
	<div class="markdown-body w-full rounded-lg border">
		{@html style}
		{@html marked(markdown)}
	</div>
</div>

<SectionList />

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

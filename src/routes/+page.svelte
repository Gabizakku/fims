<script lang="ts">
    import Icon from '@iconify/svelte';
    import FacultyRecordRow from './(ui)/FacultyRecordRow.svelte';
    const { data } = $props();
    const { facultyRecordList, canViewChangeLogs } = $derived(data);
</script>

<br />

<div class="mx-auto mt-20 w-full max-w-4xl px-6">
    <form method="GET" action="/" class="flex items-center gap-4">
        <div class="relative w-full">
            <input 
                type="text" 
                name="search" 
                value={data.searchTerm} 
                placeholder="Search faculty by name..." 
                class="h-12 w-full rounded-full border-2 border-fims-green bg-white px-6 py-2 outline-none focus:ring-2 focus:ring-fims-green"
            />
        </div>
        <button type="submit" class="h-12 rounded-full bg-fims-green px-8 font-semibold text-white hover:bg-opacity-90">
            Search
        </button>
        {#if data.searchTerm}
            <a href="/" class="text-fims-red font-medium underline">Clear</a>
        {/if}
    </form>
</div>

<div>
    <div class="mt-10">
        <!-- Faculty Record List Table -->
        <div
            class="flex justify-center [&>*>span]:text-center [&>*>span]:font-semibold [&>*>span]:text-white [&>div]:flex [&>div]:h-12 [&>div]:items-center [&>div]:bg-fims-green [&>div]:px-6"
        >
            <!-- Header -->
            <div class="w-25 justify-center"><span>Select</span></div>
            <div class={canViewChangeLogs ? 'w-66 2xl:w-132' : 'w-91 2xl:w-182'}>
                <span>Full Name</span>
                <Icon icon="tabler:arrow-up" class="ml-3 h-5 w-5 text-white" />
            </div>
            <div class="w-50 justify-center 2xl:w-75">
                <span>Status</span>
                <Icon icon="tabler:arrow-up" class="ml-3 h-5 w-5 text-white" />
            </div>
            <div class="w-62.5 justify-center 2xl:w-75">
                <span>Rank</span>
                <Icon icon="tabler:arrow-up" class="ml-3 h-5 w-5 text-white" />
            </div>
            <div class="w-62.5 justify-center 2xl:w-75">
                <span>Administrative Position</span>
                <Icon icon="tabler:arrow-up" class="ml-3 h-5 w-5 text-white" />
            </div>
            {#if canViewChangeLogs}
                <div class="w-50 justify-center"><span>Change Logs</span></div>
            {/if}
        </div>

        <!-- Rows -->
        {#each facultyRecordList as facultyRecord (facultyRecord.facultyid)}
            <FacultyRecordRow {facultyRecord} {canViewChangeLogs} />
        {/each}
    </div>
</div>

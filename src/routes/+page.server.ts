import { getFacultyRecordList } from '$lib/server/db-helpers';
import type { PageServerLoad } from './$types'; // 1. Import the generated type

export const load: PageServerLoad = async ({ url }) => { 
    // Extract 'search' from the URL (e.g., localhost:5173/?search=Zach)
    const searchTerm = url.searchParams.get('search') || '';
    
    // Pass the term to your helper
    const facultyRecordList = await getFacultyRecordList(searchTerm);

    return { 
        facultyRecordList,
        searchTerm // We send this back to the UI
    };
}
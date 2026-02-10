import { getFacultyRecordList } from "$lib/server/db-helpers";

<<<<<<< HEAD
export async function load() {
    // const facultyRecordList = await getFacultyRecordList();
    const facultyRecordList = [
        {
            facultyid: 1,
            lastname: 'Dela Cruz',
            firstname: 'Juan',
            status: 'Active',
            ranktitle: 'Professor 7',
            adminposition: 'Department Chair',
        }
    ]

    return { facultyRecordList }
}
=======
import {db} from "$lib/server/db";
import { accountRoles } from "$lib/server/schema";
import * as accountDAO from "$lib/server/accountDAO";

let results = await accountDAO.listAll();
console.log(results);

console.log ("Page loaded")
>>>>>>> 182436e (changed from email to id; more test code)

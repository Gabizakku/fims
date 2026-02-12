import { expect, describe, beforeEach, beforeAll, afterEach, afterAll } from "vitest"
import { db } from "../src/lib/server/db"
import { appuser } from "../src/lib/server/db/schema"
import { eq } from "drizzle-orm"
import * as AccountDAO from "../src/lib/server/accountDAO"

describe("account listing", async () => {
    let accounts = await AccountDAO.listAll()
    expect(accounts.length).toBeGreaterThan(0)
    expect(accounts.find((elem) => {elem.accountId == "oP77pgWyY6fcUjyanDUbyPOWOr9eNSt1"})).not.toBe([]);
});

describe("account creation and deletion", async () => {

});

import { test, expect, Page } from '@playwright/test';
import { usernameArr } from '../helperFunctions/usernameGen';
test.describe.configure({mode: 'serial'})// because we need to confirm we can enter the current username in.

test.describe("Generate array of usernames to use for logins", () => {
   let names = usernameArr(4,18);
   console.log(names) //just so you can see the logging

   names.forEach(function (username) {
     test(`Go to google and input ${username} into search`, async ({page}) => {
       // Go to https://www.google.com/
        await page.goto('https://www.google.com/');
        // Click [aria-label="Search"]
        await page.locator('[aria-label="Search"]').click();
        // Fill [aria-label="Search"]
        await page.locator('[aria-label="Search"]').fill(username);
     })
   })
})
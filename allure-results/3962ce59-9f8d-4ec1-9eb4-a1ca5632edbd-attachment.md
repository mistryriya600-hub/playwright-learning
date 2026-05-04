# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project4_TTA.spec.ts >> TTA Bank Validation
- Location: tests\Projects\Project4_TTA.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[contains(text(),\'Transfer Funds\')]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: TTA Bank
      - navigation [ref=e12]:
        - button "Dashboard" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
          - text: Dashboard
        - button "Transfer Funds" [ref=e19] [cursor=pointer]:
          - img [ref=e20]
          - text: Transfer Funds
        - button "Expense Tracker" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
          - text: Expense Tracker
        - button "Transactions" [ref=e27] [cursor=pointer]:
          - img [ref=e28]
          - text: Transactions
        - button "AI Support" [ref=e32] [cursor=pointer]:
          - img [ref=e33]
          - text: AI Support
        - button "Settings" [ref=e35] [cursor=pointer]:
          - img [ref=e36]
          - text: Settings
      - generic [ref=e39]:
        - generic [ref=e40]:
          - img "User" [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]: Riya
            - generic [ref=e44]: Riya@example.com
        - button "Sign Out" [ref=e45] [cursor=pointer]:
          - img [ref=e46]
          - text: Sign Out
    - main [ref=e49]:
      - generic [ref=e50]:
        - heading "Dashboard" [level=1] [ref=e51]
        - button [ref=e53] [cursor=pointer]:
          - img [ref=e54]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - paragraph [ref=e64]: Total Balance
                - heading "$50,000.00" [level=3] [ref=e65]
              - img [ref=e67]
            - generic [ref=e70]:
              - generic [ref=e71]:
                - img [ref=e72]
                - text: +2.5%
              - generic [ref=e75]: from last month
          - generic [ref=e76]:
            - generic [ref=e77]:
              - generic [ref=e78]:
                - paragraph [ref=e79]: Monthly Income
                - heading "$50,000" [level=3] [ref=e80]
              - img [ref=e82]
            - paragraph [ref=e85]: Based on recent activity
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - paragraph [ref=e89]: Monthly Expenses
                - heading "$315.48" [level=3] [ref=e90]
              - img [ref=e92]
            - paragraph [ref=e95]: Total debit transactions
        - generic [ref=e96]:
          - generic [ref=e97]:
            - heading "Balance History" [level=3] [ref=e98]
            - generic [ref=e101]:
              - generic:
                - status:
                  - paragraph: Thu
                  - list:
                    - listitem: "balance : 48000"
              - application [ref=e102]:
                - generic [ref=e114]:
                  - generic [ref=e115]:
                    - generic [ref=e117]: Mon
                    - generic [ref=e119]: Tue
                    - generic [ref=e121]: Wed
                    - generic [ref=e123]: Thu
                    - generic [ref=e125]: Fri
                    - generic [ref=e127]: Sat
                    - generic [ref=e129]: Sun
                  - generic [ref=e130]:
                    - generic [ref=e132]: $0k
                    - generic [ref=e134]: $15k
                    - generic [ref=e136]: $30k
                    - generic [ref=e138]: $45k
                    - generic [ref=e140]: $60k
          - generic [ref=e141]:
            - generic [ref=e142]:
              - heading "Recent Activity" [level=3] [ref=e143]
              - button "View All" [ref=e144] [cursor=pointer]
            - generic [ref=e145]:
              - generic [ref=e146]:
                - generic [ref=e147]:
                  - img [ref=e149]
                  - generic [ref=e151]:
                    - paragraph [ref=e152]: Whole Foods Market
                    - paragraph [ref=e153]: 10/25/2023
                - generic [ref=e154]: "-$129.99"
              - generic [ref=e155]:
                - generic [ref=e156]:
                  - img [ref=e158]
                  - generic [ref=e161]:
                    - paragraph [ref=e162]: Opening Deposit
                    - paragraph [ref=e163]: 10/24/2023
                - generic [ref=e164]: +$50000.00
              - generic [ref=e165]:
                - generic [ref=e166]:
                  - img [ref=e168]
                  - generic [ref=e170]:
                    - paragraph [ref=e171]: Netflix Subscription
                    - paragraph [ref=e172]: 10/23/2023
                - generic [ref=e173]: "-$15.99"
              - generic [ref=e174]:
                - generic [ref=e175]:
                  - img [ref=e177]
                  - generic [ref=e179]:
                    - paragraph [ref=e180]: Uber Ride
                    - paragraph [ref=e181]: 10/22/2023
                - generic [ref=e182]: "-$24.50"
            - button "Quick Transfer" [ref=e183] [cursor=pointer]
  - generic [ref=e184]: $0k
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('TTA Bank Validation', async ({page}) =>{
  4  |     //1.Open the URL
  5  |     await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  6  | 
  7  |     //2.Click on sign in button
  8  |     let SignInBtn = page.locator("//button[contains(text(),'Sign Up')]");
  9  |     await SignInBtn.click();
  10 | 
  11 |     //3.Enter the Details
  12 |     let Full_Name = page.getByPlaceholder('John Doe');
  13 |     await Full_Name.fill("Riya");
  14 | 
  15 |     let Email = page.locator("//input[contains(@type,'email')]");
  16 |     await Email.fill("Riya@example.com");
  17 | 
  18 |     let Password = page.locator("//input[contains(@type,'password')]");
  19 |     await Password.fill("Riya@123");
  20 | 
  21 |     let CreateBtn = page.locator("//button[@type='submit']");
  22 |     await CreateBtn.click();
  23 | 
  24 |     //4.Open the Tranfer Fund Page
> 25 |     await page.locator("//a[contains(text(),'Transfer Funds')]").click();
     |                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  26 |     
  27 |     //5.Enter the transfer details
  28 |     let Amount = page.locator("//input[@type='number']");
  29 |     await Amount.fill("7000");
  30 | 
  31 |     let Note = page.getByPlaceholder("e.g. Rent for October");
  32 |     await Note.fill("Grocery");
  33 | 
  34 |     let TransferBtn = await page.getByRole('button', {name : 'Transfer Funds'}).click();
  35 | 
  36 |     //6.Open the Dashboard Page
  37 |     let DashnoardBtn = page.getByRole('button',{name : 'Dashboard'});
  38 |     await DashnoardBtn.click();
  39 | 
  40 |     //7.Verify the Total Balance Amount
  41 |     let TotalBalance = page.locator("//h3[@class='mt-2 text-3xl font-bold']");
  42 |     console.log(await expect(TotalBalance).toHaveText("$43,000.00"));
  43 |     
  44 | 
  45 | 
  46 | });
```
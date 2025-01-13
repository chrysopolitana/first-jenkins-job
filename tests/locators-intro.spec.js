import { test } from "@playwright/test";

test("Simple google test ", async ({ page }) => {
  // test code

  await page.goto("https://www.google.com/");

  await page.waitForTimeout(2000);

  let rejectButton = page.locator("//div[text()='Reject all']");

  await rejectButton.click();

  let searchBar = page.locator("//textarea[@class='gLFyf']");

  await page.waitForTimeout(2000);

  // await searchBar.type("CYDEO");
  await searchBar.fill("CYDEO");

  await page.waitForTimeout(2000);

  await searchBar.press("Enter");

  await page.waitForTimeout(2000);
});

/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjdssfkudyKAxV-WEEAHfPgIVQQ39UDCAY" aria-activedescendant="" style=""></textarea>

<div class="QS5gu sy4vM" role="none">Reject all</div>
*/
import { test, expect } from "@playwright/test";

test("spa home loads local photography, navigation, and all editorial sections", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("Salt Glow — Spa & Wellness");
  await expect(
    page.getByRole("heading", { name: "Elevate your everyday." }),
  ).toBeVisible();
  await expect(page.locator(".hero-image")).toHaveJSProperty("complete", true);
  expect(
    await page.locator(".hero-image").evaluate((image) => image.naturalWidth),
  ).toBeGreaterThan(0);
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Services" })
    .click();
  await expect(page).toHaveURL(/#services$/);
  await expect(
    page.getByRole("heading", { name: "Find your ritual." }),
  ).toBeVisible();
  await expect(page.locator(".service-card")).toHaveCount(3);
  expect(await page.locator('.service-image').first().evaluate(async element => {
    const image = new Image();
    image.src = getComputedStyle(element).backgroundImage.slice(5, -2);
    await image.decode();
    return image.naturalWidth;
  })).toBeGreaterThan(0);
  for (const id of ["about", "philosophy", "contact"]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
  await expect(page.locator("#contact a")).toHaveAttribute(
    "href",
    "https://www.instagram.com/saltglow661/",
  );
  expect(errors).toEqual([]);
});

test("ritual details lead to a validated appointment request and manual confirmation", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Explore Salt Cave Therapy Session", exact: true })
    .click();
  const details = page.getByRole("dialog", { name: "Salt Cave Therapy Session" });
  await expect(details).toBeVisible();
  await details.getByRole("button", { name: "Book an appointment" }).click();
  const planner = page.getByRole("dialog", { name: "Plan your pause." });
  await expect(planner).toBeVisible();
  await expect(planner.getByRole("combobox", {name:"Service", exact:true})).toHaveValue(
    "Salt Cave Therapy Session",
  );
  await page.getByRole("button", { name: "Prepare my request" }).click();
  await expect(planner).toBeVisible();
  expect(
    await page
      .locator("#appointment-form")
      .evaluate((form) => form.checkValidity()),
  ).toBe(false);
  await page.getByLabel("First name", {exact:true}).fill("Avery <Test>");
  await page.getByLabel("Last name", {exact:true}).fill("Morgan");
  await page.getByLabel("Phone number", {exact:true}).fill("555-123-4567");
  await page.getByLabel("Email", {exact:true}).fill("avery@example.com");
  const date = new Date();
  date.setDate(date.getDate() + 7);
  const future = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  await page.getByLabel("Preferred date").fill(future);
  await page.getByLabel("Preferred time").fill("14:30");
  await page.getByRole("button", { name: "Prepare my request" }).click();
  await expect(
    page.getByRole("heading", { name: "Your moment, in the making." }),
  ).toBeVisible();
  const request = page.getByLabel("Your appointment request");
  await expect(request).toHaveValue(/Avery <Test>/);
  await expect(request).toHaveValue(/Salt Cave Therapy Session/);
  await expect(request).toHaveValue(/2:30|14:30/);
  await expect(page.getByRole("dialog")).toContainText(
    "confirmed only when our team replies",
  );
  await page.getByRole("button", { name: /^copy my request$/i }).click();
  await expect(page.locator(".copy-status")).toContainText(/Copied|selected/);
  await expect(
    page.getByRole("link", { name: /Continue on Instagram/i }),
  ).toHaveAttribute("href", "https://www.instagram.com/saltglow661/");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("mobile navigation, dialog controls, and layouts work at narrow widths", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: /^(Open|Close) navigation$/ });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Contact" })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#contact$/);
  await page.locator("#contact [data-book]").click();
  await expect(
    page.getByRole("dialog", { name: "Plan your pause." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close appointment planner" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});

async function fillAppointment(page, service = 'Private Shopping Experience') {
  await page.goto('/');
  await page.locator('.header-book').click();
  const dialog = page.getByRole('dialog', { name: 'Plan your pause.' });
  await dialog.getByLabel('First name', { exact:true }).fill('Taylor');
  await dialog.getByLabel('Last name', { exact:true }).fill('Morgan');
  await dialog.getByLabel('Phone number', { exact:true }).fill('+1 (661) 555-0123');
  await dialog.getByLabel('Email', { exact:true }).fill('taylor@example.com');
  await dialog.getByRole('combobox', { name:'Service', exact:true }).selectOption(service);
  const date = new Date(); date.setDate(date.getDate()+7);
  await dialog.getByLabel('Preferred date').fill(`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`);
  await dialog.getByLabel('Preferred time').fill('11:15');
  return dialog;
}

test('shopping notes and a standing schedule are included with customer contact details', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  const dialog=await fillAppointment(page);
  const notes=dialog.getByLabel('Occasion or style you’re shopping for');
  await expect(notes).toBeVisible();
  await dialog.getByRole('button',{name:'Prepare my request'}).click();
  await expect(notes).toBeFocused();
  await notes.fill('Wedding guest outfit; neutral colors and relaxed tailoring.');
  await dialog.getByRole('checkbox',{name:'Make this a standing appointment'}).check();
  await dialog.getByRole('combobox', { name:'How often?', exact:true }).selectOption('fortnightly');
  expect(await dialog.evaluate(el=>el.scrollWidth <= el.clientWidth)).toBe(true);
  await dialog.getByRole('button',{name:'Prepare my request'}).click();
  const request=page.getByLabel('Your appointment request');
  for(const value of ['Taylor','Morgan','+1 (661) 555-0123','taylor@example.com','Private Shopping Experience','11:15','Every two weeks','Wedding guest outfit']) expect(await request.inputValue()).toContain(value);
});

test('switching services removes shopping notes, and turning off standing visits excludes recurrence', async ({page}) => {
  const dialog=await fillAppointment(page);
  await dialog.getByLabel('Occasion or style you’re shopping for').fill('Private style preference');
  await dialog.getByRole('checkbox',{name:'Make this a standing appointment'}).check();
  await dialog.getByRole('combobox', { name:'How often?', exact:true }).selectOption('monthly');
  await dialog.getByRole('checkbox',{name:'Make this a standing appointment'}).uncheck();
  await expect(dialog.getByRole('combobox', { name:'How often?', exact:true })).toBeHidden();
  await dialog.getByRole('combobox', { name:'Service', exact:true }).selectOption('LightStim Red Light Therapy Session');
  await expect(dialog.getByLabel('Occasion or style you’re shopping for')).toBeHidden();
  await dialog.getByLabel('Phone number', { exact:true }).fill('not a phone');
  await dialog.getByRole('button',{name:'Prepare my request'}).click();
  await expect(dialog.getByLabel('Phone number', { exact:true })).toBeFocused();
  await dialog.getByLabel('Phone number', { exact:true }).fill('6615550123');
  await dialog.getByRole('button',{name:'Prepare my request'}).click();
  const request=page.getByLabel('Your appointment request');
  await expect(request).toHaveValue(/one-time appointment/);
  await expect(request).not.toHaveValue(/Private style preference|Every month/);
});

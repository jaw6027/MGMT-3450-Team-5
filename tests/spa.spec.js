import { test, expect } from "@playwright/test";

test("spa home loads local photography, navigation, and all editorial sections", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("Salt Glow — Spa & Wellness");
  await expect(
    page.getByRole("heading", { name: "Your moment to unwind." }),
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
    .getByRole("button", { name: "Explore Salt & stillness", exact: true })
    .click();
  const details = page.getByRole("dialog", { name: "Salt & stillness" });
  await expect(details).toBeVisible();
  await details.getByRole("button", { name: "Plan my visit" }).click();
  const planner = page.getByRole("dialog", { name: "Plan your pause." });
  await expect(planner).toBeVisible();
  await expect(planner.getByLabel("Your ritual")).toHaveValue(
    "Salt & stillness",
  );
  await page.getByRole("button", { name: "Prepare my request" }).click();
  await expect(planner).toBeVisible();
  expect(
    await page
      .locator("#appointment-form")
      .evaluate((form) => form.checkValidity()),
  ).toBe(false);
  await page.getByLabel("Your name").fill("Avery <Test>");
  const date = new Date();
  date.setDate(date.getDate() + 7);
  const future = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  await page.getByLabel("Preferred date").fill(future);
  await page.getByLabel("Preferred time").selectOption("Afternoon");
  await page.getByRole("button", { name: "Prepare my request" }).click();
  await expect(
    page.getByRole("heading", { name: "Your moment, in the making." }),
  ).toBeVisible();
  const request = page.getByLabel("Your appointment request");
  await expect(request).toHaveValue(/Avery <Test>/);
  await expect(request).toHaveValue(/Salt & stillness/);
  await expect(request).toHaveValue(/Afternoon/);
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

import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");
});

test("タイトル", async ({ page }) => {
  await expect(page).toHaveTitle(/都道府県別人口推移/);
});

test("チェックボックスが 47 個ある", async ({ page }) => {
  await expect(page.locator("input[type=checkbox]")).toHaveCount(47);
});

test("東京都のチェックボックスのチェックの切り替え", async ({ page }) => {
  // 東京都のチェックボックスをクリックする
  await page.check("#東京都");

  // 東京都のチェックボックスがチェックされている
  await expect(page.locator("#東京都")).toBeChecked();

  // Highcharts に折れ線グラフが 1 本描画されている
  await expect(page.locator(".highcharts-tracker-line")).toHaveCount(1);

  // Highcharts の凡例に "東京都" の 1 つだけが表示されている
  const legendItem = page.locator(".highcharts-legend-item");
  await expect(legendItem).toHaveCount(1);
  await expect(legendItem).toHaveText("東京都");

  // 東京都のチェックボックスのチェックを外す
  await page.uncheck("#東京都");

  // Highcharts の折れ線グラフがない
  await expect(page.locator(".highcharts-tracker-line")).toHaveCount(0);

  // Highcharts の凡例がない
  await expect(page.locator(".highcharts-legend-item")).toHaveCount(0);
});

test("複数の都道府県を選択する", async ({ page }) => {
  // 北海道、群馬県のチェックボックスをクリックする
  await page.check("#北海道");
  await page.check("#群馬県");

  // 折れ線グラフが 2 本描画されている
  await expect(page.locator(".highcharts-tracker-line")).toHaveCount(2);

  // 凡例が 2 つ表示されている
  const legendItem = page.locator(".highcharts-legend-item");
  await expect(legendItem).toHaveCount(2);

  // 東京都、京都府のチェックボックスをクリックする
  await page.check("#東京都");
  await page.check("#京都府");

  await expect(page.locator(".highcharts-tracker-line")).toHaveCount(4);
  await expect(legendItem).toHaveCount(4);

  // 北海道と京都府のチェックボックスのチェックを外す
  await page.uncheck("#北海道");
  await page.uncheck("#京都府");

  // 折れ線グラフが 2 本描画されている
  await expect(page.locator(".highcharts-tracker-line")).toHaveCount(2);

  // 凡例に群馬県と東京都のみが表示されている
  await expect(legendItem).toHaveCount(2);
  await expect(legendItem.nth(0)).toHaveText("群馬県");
  await expect(legendItem.nth(1)).toHaveText("東京都");
});

test("人口のタブを切り替える", async ({ page }) => {
  // 埼玉県のチェックボックスをクリックする
  await page.check("#埼玉県");

  const title = page.locator(".highcharts-title");

  // Highcharts の class が highcharts-point である要素が 19 個ある
  await expect(page.locator(".highcharts-point")).toHaveCount(19);

  // Highcharts のタイトルがデフォルトで "総人口の推移" になっている
  await expect(title).toHaveText("総人口の推移");

  // "年少人口" タブをクリックする
  await page.click("text=年少人口");

  // Highcharts のタイトルが "年少人口の推移" になっている
  await expect(title).toHaveText("年少人口の推移");

  // 折れ線グラフの要素に 1960 年の埼玉県の年少人口データが含まれている
  await expect(
    page.locator('[aria-label="1960, 752,024. 埼玉県."]'),
  ).toHaveCount(1);

  // "生産年齢人口" タブをクリックする
  await page.click("text=生産年齢人口");
  await expect(title).toHaveText("生産年齢人口の推移");
  await expect(
    page.locator('[aria-label="1960, 1,545,841. 埼玉県."]'),
  ).toHaveCount(1);

  // "老年人口" タブをクリックする
  await page.click("text=老年人口");
  await expect(title).toHaveText("老年人口の推移");
  await expect(
    page.locator('[aria-label="1960, 133,006. 埼玉県."]'),
  ).toHaveCount(1);

  // "総人口" タブをクリックする
  await page.click("text=総人口");
  await expect(title).toHaveText("総人口の推移");
  await expect(
    page.locator('[aria-label="1960, 2,430,871. 埼玉県."]'),
  ).toHaveCount(1);
});

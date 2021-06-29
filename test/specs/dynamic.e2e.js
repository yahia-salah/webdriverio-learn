describe("Dynamic Loading", () => {
  it("shoud show message after loading", async () => {
    browser.url("/dynamic_loading/1");
    const start = $("#start button");
    const finish = $("#finish h4");
    const loading = $("#loading");
    await (await start).click();
    // await browser.pause(5000);
    // await (await finish).waitForDisplayed({ timeout: 15000 });
    await (await loading).waitForDisplayed({ timeout: 15000, reverse: true });
    expect(await (await finish).getText()).toBe("Hello World!");
  });
});

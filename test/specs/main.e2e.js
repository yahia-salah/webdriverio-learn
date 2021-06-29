describe("Main Page", () => {
  it("Should show the list correctly", async () => {
    browser.url("/");
    const items = $$("ul li");
    await expect(await items).toBeElementsArrayOfSize(44);
  });
});

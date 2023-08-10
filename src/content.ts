// specific to archive.is (select first row's link)
const link = document.querySelector("#CONTENT #row0 a");

if (link) {
  // @ts-expect-error
  link.click();
}

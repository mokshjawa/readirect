// specific to archive.is (select first row's link)
const link = <HTMLElement>document.querySelector("#CONTENT #row0 a");

if (link) {
  link.click();
}

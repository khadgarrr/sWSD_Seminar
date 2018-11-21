import { TableHelper } from "./TableHelper";
import * as $ from "jquery";

$(document).ready(() => {
  var th: TableHelper = new TableHelper();
  var div: HTMLDivElement = document.querySelector("div#table");

  th.addHTML(div as HTMLDivElement);
});

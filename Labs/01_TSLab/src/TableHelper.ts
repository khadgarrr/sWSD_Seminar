import * as $ from "jquery";
import { Voucher } from "./model";

export class TableHelper {
  constructor() {}

  addHTML(div: HTMLDivElement) {
    console.log("Hello World");

    $.getJSON("./vouchers.json").then((data: Voucher[]) => {
      let tbody: string = "";

      data.forEach((v: Voucher) => {
        tbody += `<tr>
                    <td>${v.Text}</td>
                    <td>${v.Amount}</td>
                    <td>${v.Date}</td>
                  </tr>`;
      });

      div.innerHTML = `<table>
                        <tr>
                          <th>Text</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                        ${tbody}
                      </table>`;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../index';
import { Router } from '@angular/router';
import { EventBusService } from '../event-bus/event-bus.service';
import { CmdItem } from './cmd-item';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  cmds : CmdItem[];

  constructor(private router: Router, private Store: DataStoreService, private ebus : EventBusService) { }

  ngOnInit() {
    this.ebus.Commands.subscribe(items=>this.cmds = items);
  }

  dispatchAction(action : string){
    this.ebus.triggerCmd(action);
  }

}

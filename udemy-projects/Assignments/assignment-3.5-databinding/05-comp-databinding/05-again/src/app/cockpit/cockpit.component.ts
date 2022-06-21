import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './cockpit.component.css',
  ],
})
export class CockpitComponent implements OnInit {
  // creating custom events with EventEmitter & @Output() decorator
  // @Output() decorator - making it "listenable" outside of this component
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  // @ViewChild('selector', {static: true/false}) prop: type;
  @ViewChild('content') contentInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // Viewchild() - static:true, here
  }

  onAddServer(input: HTMLInputElement) {
    // emit a new event of type serverCreated
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.contentInput.nativeElement.value,
    });
  }

  onAddBlueprint(input: HTMLInputElement) {
    // emit a new event of type blueprintCreated
    this.blueprintCreated.emit({
      serverName: input.value,
      serverContent: this.contentInput.nativeElement.value,
    });
  }
}

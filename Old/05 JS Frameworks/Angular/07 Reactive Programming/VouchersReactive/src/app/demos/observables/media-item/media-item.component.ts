import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener,
  ChangeDetectionStrategy
} from "@angular/core";
import { MediaItem } from "../../media-item";


@Component({
  selector: "app-mediaitem",
  templateUrl: "./media-item.component.html",
  styleUrls: ["./media-item.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaItemComponent implements OnInit {
  @Input() item: MediaItem;
  @Input() isPlaying: boolean;
  @Output() onHover: EventEmitter<MediaItem> = new EventEmitter();

  @HostListener("mouseenter")
  onMouseEnter() {
    this.hover(true);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.hover(false);
  }

  constructor() {}

  ngOnInit() {}

  hover(overIt: boolean) {
    if (overIt) {
      this.onHover.emit(this.item);
    } else {
      this.onHover.emit(null);
    }
  }
}

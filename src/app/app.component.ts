import { DataService } from './data.service';
import { ShareService } from './share.service';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headlines:any;
  loading=true;
  started = false;
 
}

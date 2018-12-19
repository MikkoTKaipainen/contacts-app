import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarAction} from '../toolbar-action';
import {ToolbarOptions} from '../toolbar-options';
import {ToolbarService} from '../toolbar.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<any>;
  options: ToolbarOptions;
  mainAction: ToolbarAction;
  searchParam: string;

  constructor(private toolbar: ToolbarService, private location: Location, private router: Router, private route: ActivatedRoute) {
    this.menuClick = new EventEmitter<any>();
    this.options = new ToolbarOptions('menu', 'Contacts application');
    this.mainAction = new ToolbarAction(this.onMenuClick.bind(this), 'menu');
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe(options => {
      this.options = options;
      if (this.options.mode === 'menu') {
        this.mainAction = new ToolbarAction(this.onMenuClick.bind(this), 'menu');
      } else if (this.options.mode === 'back') {
        this.mainAction = new ToolbarAction(this.onNavigateBack.bind(this), 'arrow_back');
      }
    });
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  onNavigateBack() {
    this.location.back();
  }

  onClickSearch() {
    if (!this.route.snapshot.paramMap.get('search')) {
     this.router.navigate(['/']).then(() => {
       this.router.navigate(['/contacts/search/', this.searchParam]);
     });
    } else {
      this.router.navigate(['/contacts/search/', this.searchParam]);
    }
  }
}

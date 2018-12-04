import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css']
})
export class ContactMapComponent implements OnInit {

  streetAddress: string;
  city: string;
  mapUrl: string;

  constructor(private toolBar: ToolbarService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.toolBar.setToolbarOptions(new ToolbarOptions('back', 'Map'));
    this.streetAddress = this.route.snapshot.paramMap.get('streetAddress');
    this.city = this.route.snapshot.paramMap.get('city');
    console.log(this.streetAddress);
    console.log(this.city);
    this.createMapUrl();
  }

  createMapUrl() {
    const googleMapsUrlBase = 'https://www.google.com/maps?q=';
    const googleMapsUrlParams = '&output=embed';
    this.mapUrl = googleMapsUrlBase + this.streetAddress + this.city + googleMapsUrlParams;
    console.log(this.mapUrl);
  }

}

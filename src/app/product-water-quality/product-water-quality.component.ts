import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-water-quality',
  templateUrl: './product-water-quality.component.html',
  styleUrls: ['./product-water-quality.component.css']
})
export class ProductWaterQualityComponent implements OnInit {

  values: any[] = [
    {"name": "CONDUCTIVITY", "value": 45, "logo": "assets/ConductivityLogo.png"},
    {"name": "SALINITY", "value": 60, "logo": "assets/SalinityLogo.png"},
    {"name": "TURBIDITY", "value": 25, "logo": "assets/TurrbidityLogo.png"},
    {"name": "PH", "value": 75, "logo": "assets/PHLogo.png"}
  ];

  locationUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31094.982834751776!2d80.26630104029162!3d13.043764167213897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52689bb60132bb%3A0x549cf8edf62b60a!2sMarina%20Beach!5e0!3m2!1sen!2sin!4v1625484304711!5m2!1sen!2sin";

  constructor(protected sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
  }

  getLocation() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.locationUrl);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  searchQuery: string = '';
  location: string = '';

  onSearch() {
    console.log('🔍 البحث عن:', this.searchQuery);
    console.log('📍 الموقع:', this.location);
    // هنا يمكنك تنفيذ منطق البحث الفعلي مثل استدعاء API
  }
}

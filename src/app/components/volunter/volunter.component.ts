import { Component } from '@angular/core';

@Component({
  selector: 'app-volunter',
  templateUrl: './volunter.component.html',
  styleUrls: ['./volunter.component.scss']
})
export class VolunterComponent {
  selectedIndex: number | null = null; // تتبع العنصر المحدد

  cards = [
    { image: '../../../assets/images/logs/tools_8924630.svg', title: 'فني' },
    { image: '../../../assets/images/logs/Dollar.svg', title: 'مالي' },
    { image: '../../../assets/images/logs/Garage.svg', title: 'قانوني' },
    { image: '../../../assets/images/logs/Leaf.svg', title: 'بيئي' },
    { image: '../../../assets/images/logs/Vector.svg', title: 'تدريبي' },
    { image: '../../../assets/images/logs/Panorama.svg', title: 'ترفيهي' },
    { image: '../../../assets/images/logs/Health.svg', title: 'صحي' },
    { image: '../../../assets/images/logs/USB.svg', title: 'تقني' },
    { image: '../../../assets/images/logs/Pie Chart 2.svg', title: 'تسويقي' },
    { image: '../../../assets/images/logs/Book Bookmark.svg', title: 'التربية والتعليم' },
    { image: '../../../assets/images/logs/Pulse.svg', title: 'الأمن والسلامة' },
    { image: '../../../assets/images/logs/File.svg', title: 'عام' },
    { image: '../../../assets/images/logs/Users Group Rounded.svg', title: 'اجتماعي' },
    { image: '../../../assets/images/logs/Ghost.svg', title: 'نفسي' },
    { image: '../../../assets/images/logs/Clapperboard Open.svg', title: 'ثقافي' },
    { image: '../../../assets/images/logs/Dropper Minimalistic 2.svg', title: 'إغاثة' },
    { image: '../../../assets/images/logs/Hand Stars.svg', title: 'خدمي' },
    { image: '../../../assets/images/logs/Dumbbell Large.svg', title: 'رياضي' },
    { image: '../../../assets/images/logs/Ruler Pen.svg', title: 'هندسي' },
    { image: '../../../assets/images/logs/User Hand Up.svg', title: 'إداري' },
    { image: '../../../assets/images/logs/Home.svg', title: 'ديني' },
    { image: '../../../assets/images/logs/Buildings 2.svg', title: 'إسكان' },
    { image: '../../../assets/images/logs/Smile Circle.svg', title: 'ضيوف الرحمن' },
    { image: '../../../assets/images/logs/Map Point Wave.svg', title: 'تنظيمي' },
  ];

  selectCard(index: number) {
    this.selectedIndex = index;
    console.log(index);
    
  }
}

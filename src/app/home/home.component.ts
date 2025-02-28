import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  qualities = ["Expertise It Solutions", "Comprehensive recruiting Services", "Personlized Approach", "Agility & Flexibility", "End-to-end Support", "End-to-end Support", "End-to-end Support"]


  ngAfterViewInit() {

    const video = document.getElementById("bg-video") as HTMLVideoElement;
    const vd1 = document.getElementById("vd1") as HTMLVideoElement;
    const vd2 = document.getElementById("vd2") as HTMLVideoElement;
    const vd3 = document.getElementById("vd3") as HTMLVideoElement;
    if (video) {
      video.play().catch(err => console.error("Autoplay blocked:", err));
    }

    if (vd1) {
      vd1.play().catch(err => console.error("Autoplay blocked:", err));
    }

    if (vd2) {
      vd2.play().catch(err => console.error("Autoplay blocked:", err));
    }

    if (vd3) {
      vd3.play().catch(err => console.error("Autoplay blocked:", err));
    }

    document.querySelectorAll("video").forEach((video) => {
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        video.muted = true; // Mute and retry for autoplay compliance
        video.play();
      });
    });

  }


}

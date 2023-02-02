import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  
  iselectedbtn() {
    let infobtn = document.getElementById('info');
    let feedbackbtn = document.getElementById("feedback");

      feedbackbtn.style.backgroundColor = "#ECEEF1";
      feedbackbtn.style.color = "#000000";
  
      infobtn.style.backgroundColor = "#0060A1";
      infobtn.style.color = "#ffffff";

  }
  
  fselectedbtn() {
    let infobtn = document.getElementById('info');
    let feedbackbtn = document.getElementById("feedback");

      infobtn.style.backgroundColor = "#ECEEF1";
      infobtn.style.color = "#000000";
  
  
      feedbackbtn.style.backgroundColor = "#0060A1";
      feedbackbtn.style.color = "#ffffff";
  

  }

}

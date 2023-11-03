import { minutes } from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import { removeSelected } from "./actionsSounds.js";

export function playCount() {
   state.isRunning = true;
   timer.countdown();
   sounds.buttonPressAudio.play();
}

export function resetCount() {
   state.isRunning = false;
   timer.updateDisplay();
   sounds.buttonPressAudio.play();
   removeSelected();
}

export function addCount() {
   let minute = Number(minutes.textContent);

   minute += 5;

   if(minute > 59) {
      minute = 59;
   }
   timer.updateMinutes(minute);
   sounds.buttonPressAudio.play();
}

export function minusCount() {
   let minute = Number(minutes.textContent);

   minute -= 5;

   if(minute < 0) {
      minute = 0;
   }
   timer.updateMinutes(minute);
   sounds.buttonPressAudio.play();
}
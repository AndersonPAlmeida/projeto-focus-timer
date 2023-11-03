import * as controls from "./elements.js";
import * as actions from "./actions.js";
import * as actionsSounds from "./actionsSounds.js";

export function registerControls() {
   controls.controlsTimer.addEventListener('click', (event) => {
      const action = event.target.dataset.action;
      
      if (typeof actions[action] != 'function') {
         return;
      }

      actions[action]();
   });
}

export function soundsControls() {
   controls.controlsSoundForest.addEventListener('click', (event) => { 
      actionsSounds.playForest();
   });
   controls.controlsSoundRain.addEventListener('click', (event) => { 
      actionsSounds.playRain();
   });
   controls.controlsSoundCoffeShop.addEventListener('click', (event) => { 
      actionsSounds.playCoffeShop();
   });
   controls.controlsSoundFirePlace.addEventListener('click', (event) => { 
      actionsSounds.playFireplace();
   });
}
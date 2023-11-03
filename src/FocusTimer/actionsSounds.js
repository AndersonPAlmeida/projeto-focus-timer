import state from "./state.js";
import * as sounds from "./sounds.js";
import * as el from "./elements.js";

export function playForest() {
   state.isMute = false;
   
   if (el.controlsSoundForest.classList.contains('selected')) {
      el.controlsSoundForest.classList.remove('selected');
      sounds.buttonPressForest.pause();
   } else {
      removeSelected()
      el.controlsSoundForest.classList.add('selected');
      sounds.buttonPressForest.play();
   }
}
export function playRain() {
   state.isMute = false;

   if (el.controlsSoundRain.classList.contains('selected')) {
      el.controlsSoundRain.classList.remove('selected');
      sounds.buttonPressRain.pause();
   } else {
      removeSelected();
      el.controlsSoundRain.classList.add('selected');
      sounds.buttonPressRain.play();
   }
}

export function playCoffeShop() {
   state.isMute = false;
   
   if (el.controlsSoundCoffeShop.classList.contains('selected')) {
      el.controlsSoundCoffeShop.classList.remove('selected');
      sounds.buttonPressRestaurant.pause();
   } else {
      removeSelected();
      el.controlsSoundCoffeShop.classList.add('selected');
      sounds.buttonPressRestaurant.play();
   }
}

export function playFireplace() {
   state.isMute = false;
   
   if (el.controlsSoundFirePlace.classList.contains('selected')) {
      el.controlsSoundFirePlace.classList.remove('selected');
      sounds.buttonPressFire.pause();
   } else {
      removeSelected();
      el.controlsSoundFirePlace.classList.add('selected');
      sounds.buttonPressFire.play();
   }
}

export function removeSelected() {
   el.controlsSounds.forEach(button => {
      if(button.classList.contains('selected')) {
         button.classList.remove('selected');
         pauseMusic(button.classList);
      }
   });
}

function pauseMusic(classes) {
   for (const sound of classes) {
      switch (sound) {
         case 'forest':
            sounds.buttonPressForest.pause();
         break;
         case 'rain':
            sounds.buttonPressRain.pause();
         break;
         case 'coffeShop':
            sounds.buttonPressRestaurant.pause();
         break;
         case 'fireplace':
            sounds.buttonPressFire.pause();
         break;
         default:
         break;
      }
   }
}

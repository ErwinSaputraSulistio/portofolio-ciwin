// IMPORT
import { useState } from "react";
import { NavbarButton } from "../components/diminutive";
import { Introduction, Skill, Welcome } from "../components/substantial";

// EXPORT
export default function LandingPage() {
   const [navbar, selectNavbar] = useState(1)
   let i = 1;
   // TEXT-TYPING ANIMATION
   const typingAnimation = (text, setText) => {
      const newText = text[0].substring(0, i);
      const changeText = () => {
         setText([text[0], newText]);
         i++;
         if(i <= text[0].length) {
            typingAnimation(text, setText);
         }
      }
      const lastAlphabet = newText.charAt(newText.length - 2);
      if(lastAlphabet === "," || lastAlphabet === "." || lastAlphabet === "?") { setTimeout(() => { changeText() }, 500) }
      else { setTimeout(() => { changeText() }, 50) }
   }
   // RETURN
   return(
      <div className="landingPage">
         { 
         navbar === 1 ? <Welcome f={ typingAnimation }/>
         :
         navbar === 2 ? <Introduction f={ typingAnimation }/>
         :
         navbar === 3 ? <Skill f={ typingAnimation }/>
         :
         navbar === 4 ? <div>4</div>
         :
         navbar === 5 ? <div>5</div>
         :
         <div>.</div>
         }
         <div className="navbarArea">
            <NavbarButton f={ selectNavbar } n={ navbar } s={ 1 }/>
            <div className="navbarLine"/>
            <NavbarButton f={ selectNavbar } n={ navbar } s={ 2 }/>
            <div className="navbarLine"/>
            <NavbarButton f={ selectNavbar } n={ navbar } s={ 3 }/>
            <div className="navbarLine"/>
            <NavbarButton f={ selectNavbar } n={ navbar } s={ 4 }/>
            <div className="navbarLine"/>
            <NavbarButton f={ selectNavbar } n={ navbar } s={ 5 }/>
         </div>
      </div>
   )
}
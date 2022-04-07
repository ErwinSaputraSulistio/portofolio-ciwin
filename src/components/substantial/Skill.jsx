// IMPORT
import { useEffect, useState } from 'react';
import { SkillCard } from '../diminutive';

// EXPORT
export default function Skill ({ f }) {
   const [title, setTitle] = useState(["[ TECHNICAL SKILLS ]", ""])
   const [cardPosition, shuffleCard] = useState([
      ["4vw", "-11vw"],
      ["4vw", "-1vw"],
      ["4vw", "9vw"],
      ["16vw", "-11vw"],
      ["16vw", "-1vw"],
      ["16vw", "9vw"],
      ["28vw", "-11vw"],
      ["28vw", "-1vw"],
      ["28vw", "9vw"]
   ])
   const [shuffleCount, addShuffleCount] = useState(0)
   const startShuffle = () => {
      shuffleCard(cardPosition.sort(() => Math.random() - 0.5))
      addShuffleCount(shuffleCount + 1)
   }
   useEffect(() => { 
      f(title, setTitle)
   }, [])
   return(
      <div className="skill">
         <p className="titleText">{ title[1] }</p>
         <div className="skillCollection">
            {
               title[0] === title[1] &&
               <div className="skillCollection">
                  <SkillCard 
                     x={ cardPosition[0][0] } 
                     y={ cardPosition[0][1] } 
                     img={ "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[1][0] } 
                     y={ cardPosition[1][1] } 
                     img={ "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[2][0] } 
                     y={ cardPosition[2][1] } 
                     img={ "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[3][0] } 
                     y={ cardPosition[3][1] } 
                     img={ "https://www.bridgetech.co.id/storage/2018/01/React-Logo-1.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[4][0] }
                     y={ cardPosition[4][1] } 
                     img={ "https://cdn.icon-icons.com/icons2/2415/PNG/512/vuejs_original_wordmark_logo_icon_146305.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[5][0] } 
                     y={ cardPosition[5][1] } 
                     img={ "https://www.logolynx.com/images/logolynx/c5/c509c38cb89bcf556b2051222663f398.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[6][0] } 
                     y={ cardPosition[6][1] } 
                     img={ "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[7][0] } 
                     y={ cardPosition[7][1] } 
                     img={ "https://www.pc-freak.net/images/how-to-install-postgresql-on-obsolete-old-debian-squeeze-tutorial.png" }
                  />
                  <SkillCard 
                     x={ cardPosition[8][0] } 
                     y={ cardPosition[8][1] } 
                     img={ "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" }
                  />
                  <div className="shuffle" onClick={ () => { startShuffle() } }>Shuffle</div>
               </div> 
            }
         </div>
      </div>
   )
}
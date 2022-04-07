export default function SkillCard({ x, y, img }) {
   return(
      <div className="skillCard" style={{ marginTop: x, marginLeft: y }}>
         <div class="skillCardInner">
            <div class="skillCardFront"/>
            <div class="skillCardBack">
               <img class="skillCardImage" src={ img }/>
            </div>
         </div>
      </div>
   )
}
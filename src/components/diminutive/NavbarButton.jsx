export default function NavbarButton({ f, n, s }) {
   return(
      <div 
         className="navbarButton" 
         onClick={ () => { f(s) } }
         style={{ backgroundColor: n === s ? 'rgb(85, 82, 82)' : 'white' }}
      />
   )
}
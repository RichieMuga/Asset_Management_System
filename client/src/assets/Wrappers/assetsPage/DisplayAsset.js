import styled from 'styled-components'

const Wrapper = styled.section`
display: grid;
grid-template-columns: repeat(1,1fr);
h2{
    font-size: 2em;
}
@media (min-width: 370px) {
       display: grid;
grid-template-columns: repeat(1,1fr); 
grid-gap:2em ;

}

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap:2em ;

 }
  
/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap:2em ;

 }
  
/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap:2em ;
 }
`

export default Wrapper
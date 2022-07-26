import styled from 'styled-components'

const Wrapper = styled.section`
display: grid;
grid-template-columns: repeat(1,1fr);
@media (min-width: 570px) {
       display: grid;
grid-template-columns: repeat(2,1fr); 
}

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    display: grid;
grid-template-columns: repeat(2,1fr);
 }
  
/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    display: grid;
grid-template-columns: repeat(3,1fr);
 }
  
/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    display: grid;
grid-template-columns: repeat(4,1fr);
 }
`

export default Wrapper
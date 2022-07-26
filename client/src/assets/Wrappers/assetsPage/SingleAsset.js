import styled from 'styled-components'

const Wrapper = styled.section`
background: var(--font-white);
border-radius: 20px;
width:95%;
h4{
    padding: .5em;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container{
    display: flex;
    flex-direction: column;
    h4{
        /* grid-column-start: 1;
        grid-row-start: 0; */
        display: flex;
        flex-direction: row;
    }
}
.more-info{
        margin-top: .6em;
    
}
.icons{
    opacity:.5;
}
.assetName{
    opacity: .8;
}
.circle{
    margin-top:.35em;
}
 
@media (min-width: 370px) {
    .more-info{
        margin-left: 18.5em;
    
}}
@media (min-width: 992px) { 
    .more-info{
        margin-left: .5em;
    }
 }

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    .more-info{
        margin-left: 17.5em;
    }

 } 
 @media (min-width: 1200px) { 
    .more-info{
        margin-left: 16.2em;
    }

 } 






`

export default Wrapper
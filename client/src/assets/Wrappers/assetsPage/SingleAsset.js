import styled from 'styled-components'

const Wrapper = styled.section`
background: var(--font-white);
border-radius: 20px;
h4{
    padding: .5em;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px;
  cursor: pointer;
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
        margin-left: 23.5em;
        margin-top: .6em;
    
}
.icons{
    opacity:.5;
}
.assetName{
    opacity: .8;
}

@media (min-width: 480px) {
    .more-info{
        margin-left: 25.5em;
        margin-top: .6em;
    
}
}



`

export default Wrapper
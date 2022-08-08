import styled from 'styled-components'

const Wrapper = styled.section`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background: rgba(0,0,0,.1);
  .modal-content{
    margin: auto;
    margin-top:.8em ;
    background: var(--font-white);
    height: fit-content;
    width:70%;
    border-radius: 5px;
    height: 70%;
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--deep-red);
    margin-top: .5em;
    margin-left: .5em;
    cursor: pointer;
    position: relative;
    left: 4;
  }
    .form-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr ;
    grid-row-gap: 1em;
    grid-column-gap: 4em;
    padding: 0 4em;
  }
  span{
    font-weight: 700;
  }
  .both-btns{
    margin-top: 3em;
  }
`
export default Wrapper
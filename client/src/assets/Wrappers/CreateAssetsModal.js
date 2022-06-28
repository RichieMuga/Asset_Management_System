import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  
.modal-content{
    margin: auto;
    margin-top:.8em ;
    background: var(--font-white);
    height: 90%;
    width:70%;
    border-radius: 5px;
  }
.close-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--deep-red);
    margin-top: .5em;
    margin-left: .5em;
    cursor: pointer;
  }
  
`

export default Wrapper
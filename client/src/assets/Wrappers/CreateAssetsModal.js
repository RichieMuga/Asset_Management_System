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
    height: fit-content;
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
  .form-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2em;
    grid-column-gap: 4em;
    padding: 0 4em;
  }
  .btn-both{
    height: 3em;
    width: 6em;
  }
  .stepper-image{
    margin: .5em auto;
    height: 3em;
  }

`

export default Wrapper
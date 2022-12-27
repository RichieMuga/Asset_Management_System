import styled from 'styled-components'
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .form {
    max-width: 30em;
    height: 30em;
    border-top: 5px solid var(--primary-500);
    margin: 2em 0;
    background: var(--font-white);
    border-radius: var(--borderRadius);
    padding: 1em 4em;
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--link-color);
    cursor: pointer;
  }
  .btn-purple{
    margin-left:6.5em;
  }
`
export default Wrapper
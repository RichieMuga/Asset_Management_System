import styled from 'styled-components'
const Wrapper = styled.div`
.container{
  background: var(--font-white);
  height: auto;
  width: 70vw;
  border-radius: var(--borderRadius);
    display: flex;
  flex-direction: row;
}
.form-input{
    width: 70vh;
}
.form-row{
    width: 50%;
    padding: .4em 4em;
}
`
export default Wrapper
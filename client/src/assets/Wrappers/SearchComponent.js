import styled from 'styled-components'

const Wrapper = styled.div`
.displayNone{
  display: none;
}
.container-main{
  border-radius: var(--borderRadius);
  width: 100%;
  background:transparent;
  padding: 3rem 2rem 4rem;
}
.form-holder{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 1fr;
    gap: .5em;
}
.green-btn{
    width: 20%;
    height: 65%;
    margin-top: 7px;
  }
  .createAsset{
    display: flex;
    flex-direction: row;
    height: 65%;
    gap: .5em;
    width:auto;
    background-color: purple;
    border: none;
    color: var(--font-white);
    padding: .5em .5em;
    text-align: center;
    border-radius: 5px;
  }
  .createAsset span{
    position: relative;
    top: .245em;
  }


`

export default Wrapper
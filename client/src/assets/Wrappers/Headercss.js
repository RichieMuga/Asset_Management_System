import styled from 'styled-components'

const Wrapper = styled.div`
flex-shrink: 0;
width: 100%;
header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #02577A;
    color: white;
    padding: 1em 2em;
    font-weight: 500;
    font-size: 1.2em;
    line-height: 2em;
}
.nav_links li{
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        padding: 0 4em;
        text-transform: uppercase;
}
.nav_links li :hover{
  background-color: #538fa8;
  text-align: center;
  border-spacing: 1em;
  border-radius: 5px;
}
#button-copy{
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    background-color: #FFFF;
    border: none;
    color: #02577A;
    padding: .2em .5em;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
}
#button-copy:hover{
  background-color: #4D4A91;
  cursor: pointer;
  color: white;
  .email-svg{
      color: white;
  }
}
.email-svg{
    padding-right: .5em;
    margin-top: .20em;
    color: #4D4A91;
}
a{
    padding:.1em .4em;
}

.button-copy::before {
  width: auto;
  background-color: #656375;
  color: white;
  position: absolute;
  top: 9%;
  content: "copied!";
  padding: 1px;
  border-radius: 5px;
  z-index: 1;
  font-size: 0.8em;
}

.button-copy::after {
  content: "";
  background: #656375;
  padding: 4px;
  position: absolute;
  right: 20rem;
  top: 8.7%;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

`
export default Wrapper
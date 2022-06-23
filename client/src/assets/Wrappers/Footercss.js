import styled from 'styled-components'
const Wrapper = styled.div`
width: 100%;
.footer {
  color: white;
}


.footer h4{
  padding:0.5em .3em;
}

.footer h4:hover {
  padding: 0em 0.4em;
  background: #538fa8;
  text-align: center;
  width: auto;
  border-radius: 10px;
  height: 1em .4em;
}

.footer .decoration-line {
  width: 100%;
  height: 1em;
  background: #286681;
  margin-top: 5em;
}

.footer .socials {
  background: #89d6fb;
  height: 4em;
}

.footer .socials ul {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer .socials ul li {
  height: fit-content;
  margin: 1em 5em;
  color:black;
}

.footer .links {
  display: -ms-grid;
  height: 20vh;
  background: #286681;
}

.footer .links .footer-grid-1 {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.footer .links .footer-grid-2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: space-between;
}

.footer .links .footer-grid-2 .vertical-line {
  background: white;
  margin: auto 2em;
  height: 6em;
  width: 2px;
}

.footer .links .footer-grid-2 .footer-grid-2-section-1 {
  margin: 2em 7em;
}

/* .footer .links .footer-grid-2 .footer-grid-2-section-1 .location {
  margin: 20% auto;
} */

.footer .copyright {
  background: #02577a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 1.2em;
}

.footer .copyright P {
  color: #f4f2f2;
  margin: 0 auto;
  font-weight: 500;
  font-size: 0.652em;
  padding: 0.1em;
}

`
export default Wrapper
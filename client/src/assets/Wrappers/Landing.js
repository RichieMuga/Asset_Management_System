import styled from 'styled-components'
const Wrapper = styled.main`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
body {
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;
  margin: 0;
  height: 100vh;
  width: auto;
}

a:visited {
  color: white;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Times New Roman", Times, serif;
}

li {
  list-style: none;
  margin: 0%;
  padding: 0%;
  text-decoration: none;
}

a {
  text-decoration: none;
  margin: 0%;
}

.header {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 7.9em 4fr 0.5fr;
      grid-template-columns: 7.9em 4fr 0.5fr;
  -ms-grid-rows: 1fr 0.25fr;
      grid-template-rows: 1fr 0.25fr;
}

.header .header-child-1 {
  background: #286681;
}

.header .header-child-1 .logo {
  float: left;
  margin: 1em 0.9em;
  margin-top: 1.9em;
}

.header .header-child-2 {
  background: #286681;
}

.header .header-child-2 .header-content {
  color: white;
}

.header .header-child-2 ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  font-size: 1.33em;
  padding-right: 3em;
  line-height: 1.7em;
  margin-top: 1.5em;
}

.header .header-child-2 ul li:hover {
  background-color: #538fa8;
  text-align: center;
  width: 6em;
  border-radius: 5px;
}

.header .header-child-3 {
  background: #286681;
}

.header .header-child-3 button {
  margin-right: 2em;
  margin-top: 0.92em;
  float: right;
  height: 2em;
  width: 16em;
  border-radius: 0.8em;
  font-size: 1.1em;
  background: white;
  border: none;
  padding: 1em;
  line-height: 0em;
}

.header .header-child-3 button span {
  position: relative;
  bottom: 1.3em;
  color: #286681;
  left: 0.8em;
}

.header .header-child-3 button .btn-mail {
  position: relative;
  bottom: 0.6em;
  right: 6.5em;
}

.header .header-child-3 .btn-cp::before {
  background-color: #656375;
  color: white;
  position: absolute;
  top: 1%;
  content: "copied!";
  padding: 10px;
  border-radius: 20px;
  z-index: 1;
  font-size: 0.9em;
}

.header .header-child-3 .btn-cp::after {
  content: "";
  background: #656375;
  padding: 4px;
  position: absolute;
  right: 10rem;
  top: 3.8%;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.header .header-child-3 button:hover {
  background-color: #0000;
  cursor: pointer;
}

.header .header-child-3 button:hover span {
  color: white;
}

.outside-parent-header {
  background: #89d6fb;
  -ms-grid-column: 1;
  -ms-grid-column-span: 3;
  grid-column: 1 / span 3;
  height: 2.5em;
}

.outside-parent-header button {
  border-radius: 3px;
  margin: 0.5em 1em;
  height: 2.1em;
  width: 7em;
  color: white;
  font-weight: 700;
  -webkit-box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
  border: none;
}

.outside-parent-header button:hover {
  background: #6e8a9b;
  border: solid 2px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.outside-parent-header .login {
  border: none;
  background: #0788d8;
}

.outside-parent-header .sign-up {
  background: #ebe25e;
  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.outside-parent-header .demo-login {
  background: #de4e5e;
}

.outside-parent-header .right {
  float: right;
}

.introduction {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr 0.1fr;
      grid-template-columns: 1fr 1fr 0.1fr;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

.introduction .introduction-child-1 {
  background: #ffffff;
}

.introduction .introduction-child-1 h1 {
  text-align: center;
}

.introduction .introduction-child-1 #waving {
  height: 200vh;
}

.introduction .introduction-child-1 #type-animation {
  color: black;
  text-decoration: underline;
}

.introduction .introduction-child-1 .ityped-cursor {
  color: black;
  font-size: 2.2rem;
  opacity: 1;
  -webkit-animation: blink 0.3s infinite;
          animation: blink 0.3s infinite;
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
}

@-webkit-keyframes blink {
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

.introduction .introduction-child-1 .waving {
  display: block;
  margin: auto;
}

.introduction .introduction-child-1 #Waving-hand {
  -webkit-animation: waving-motion 2s ease-in-out infinite alternate;
          animation: waving-motion 2s ease-in-out infinite alternate;
  -webkit-transform-origin: center;
          transform-origin: center;
  transform-box: fill-box;
}

.introduction .introduction-child-1 #Head {
  -webkit-animation: waving-head 3s ease-in-out infinite alternate;
          animation: waving-head 3s ease-in-out infinite alternate;
  -webkit-transform-origin: center;
          transform-origin: center;
  transform-box: fill-box;
}

@-webkit-keyframes waving-motion {
  100% {
    -webkit-transform: rotatez(-18deg);
            transform: rotatez(-18deg);
  }
}

@keyframes waving-motion {
  100% {
    -webkit-transform: rotatez(-18deg);
            transform: rotatez(-18deg);
  }
}

@-webkit-keyframes waving-head {
  50% {
    -webkit-transform: rotatez(11deg);
            transform: rotatez(11deg);
  }
  100% {
    -webkit-transform: rotatez(-11deg);
            transform: rotatez(-11deg);
  }
}

@keyframes waving-head {
  50% {
    -webkit-transform: rotatez(11deg);
            transform: rotatez(11deg);
  }
  100% {
    -webkit-transform: rotatez(-11deg);
            transform: rotatez(-11deg);
  }
}

.introduction .introduction-child-2 {
  background: #ffffff;
}

.introduction .introduction-child-2 h2,
.introduction .introduction-child-2 p {
  color: black;
}

.introduction .introduction-child-2 h2 {
  font-size: 2.5em;
}

.introduction .introduction-child-2 p {
  font-size: 1.3em;
}

.introduction .downArrow {
  width: auto;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 90%;
  left: 25%;
  -webkit-animation: bounce 3s infinite;
          animation: bounce 3s infinite;
}

@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
  60% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
  60% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
}

.service-head {@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
body {
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;
  margin: 0;
  height: 100vh;
  width: auto;
}

a:visited {
  color: white;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Times New Roman", Times, serif;
}

li {
  list-style: none;
  margin: 0%;
  padding: 0%;
  text-decoration: none;
}

a {
  text-decoration: none;
  margin: 0%;
}

.header {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 7.9em 4fr 0.5fr;
      grid-template-columns: 7.9em 4fr 0.5fr;
  -ms-grid-rows: 1fr 0.25fr;
      grid-template-rows: 1fr 0.25fr;
}

.header .header-child-1 {
  background: #286681;
}

.header .header-child-1 .logo {
  float: left;
  margin: 1em 0.9em;
  margin-top: 1.9em;
}

.header .header-child-2 {
  background: #286681;
}

.header .header-child-2 .header-content {
  color: white;
}

.header .header-child-2 ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  font-size: 1.33em;
  padding-right: 3em;
  line-height: 1.7em;
  margin-top: 1.5em;
}

.header .header-child-2 ul li:hover {
  background-color: #538fa8;
  text-align: center;
  width: 6em;
  border-radius: 5px;
}

.header .header-child-3 {
  background: #286681;
}

.header .header-child-3 button {
  margin-right: 2em;
  margin-top: 0.92em;
  float: right;
  height: 2em;
  width: 16em;
  border-radius: 0.8em;
  font-size: 1.1em;
  background: white;
  border: none;
  padding: 1em;
  line-height: 0em;
}

.header .header-child-3 button span {
  position: relative;
  bottom: 1.3em;
  color: #286681;
  left: 0.8em;
}

.header .header-child-3 button .btn-mail {
  position: relative;
  bottom: 0.6em;
  right: 6.5em;
}

.header .header-child-3 .btn-cp::before {
  background-color: #656375;
  color: white;
  position: absolute;
  top: 1%;
  content: "copied!";
  padding: 10px;
  border-radius: 20px;
  z-index: 1;
  font-size: 0.9em;
}

.header .header-child-3 .btn-cp::after {
  content: "";
  background: #656375;
  padding: 4px;
  position: absolute;
  right: 10rem;
  top: 3.8%;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.header .header-child-3 button:hover {
  background-color: #538fa8;
  cursor: pointer;
}

.header .header-child-3 button:hover span {
  color: white;
}

.outside-parent-header {
  background: #89d6fb;
  -ms-grid-column: 1;
  -ms-grid-column-span: 3;
  grid-column: 1 / span 3;
  height: 2.5em;
}

.outside-parent-header button {
  border-radius: 3px;
  margin: 0.5em 1em;
  height: 2.1em;
  width: 7em;
  color: white;
  font-weight: 700;
  -webkit-box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
  border: none;
}

.outside-parent-header button:hover {
  background: #6e8a9b;
  border: solid 2px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.outside-parent-header .login {
  border: none;
  background: #0788d8;
}

.outside-parent-header .sign-up {
  background: #ebe25e;
  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.outside-parent-header .demo-login {
  background: #de4e5e;
}

.outside-parent-header .right {
  float: right;
}

.introduction {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr 0.1fr;
      grid-template-columns: 1fr 1fr 0.1fr;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

.introduction .introduction-child-1 {
  background: #ffffff;
}

.introduction .introduction-child-1 h1 {
  text-align: center;
}

.introduction .introduction-child-1 #waving {
  height: 200vh;
}

.introduction .introduction-child-1 #type-animation {
  color: black;
  text-decoration: underline;
}

.introduction .introduction-child-1 .ityped-cursor {
  color: black;
  font-size: 2.2rem;
  opacity: 1;
  -webkit-animation: blink 0.3s infinite;
          animation: blink 0.3s infinite;
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
}

@-webkit-keyframes blink {
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

.introduction .introduction-child-1 .waving {
  display: block;
  margin: auto;
}

.introduction .introduction-child-1 #Waving-hand {
  -webkit-animation: waving-motion 2s ease-in-out infinite alternate;
          animation: waving-motion 2s ease-in-out infinite alternate;
  -webkit-transform-origin: center;
          transform-origin: center;
  transform-box: fill-box;
}

.introduction .introduction-child-1 #Head {
  -webkit-animation: waving-head 3s ease-in-out infinite alternate;
          animation: waving-head 3s ease-in-out infinite alternate;
  -webkit-transform-origin: center;
          transform-origin: center;
  transform-box: fill-box;
}

@-webkit-keyframes waving-motion {
  100% {
    -webkit-transform: rotatez(-18deg);
            transform: rotatez(-18deg);
  }
}

@keyframes waving-motion {
  100% {
    -webkit-transform: rotatez(-18deg);
            transform: rotatez(-18deg);
  }
}

@-webkit-keyframes waving-head {
  50% {
    -webkit-transform: rotatez(11deg);
            transform: rotatez(11deg);
  }
  100% {
    -webkit-transform: rotatez(-11deg);
            transform: rotatez(-11deg);
  }
}

@keyframes waving-head {
  50% {
    -webkit-transform: rotatez(11deg);
            transform: rotatez(11deg);
  }
  100% {
    -webkit-transform: rotatez(-11deg);
            transform: rotatez(-11deg);
  }
}

.introduction .introduction-child-2 {
  background: #ffffff;
}

.introduction .introduction-child-2 h2,
.introduction .introduction-child-2 p {
  color: black;
}

.introduction .introduction-child-2 h2 {
  font-size: 2.5em;
}

.introduction .introduction-child-2 p {
  font-size: 1.3em;
}

.introduction .downArrow {
  width: auto;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 90%;
  left: 25%;
  -webkit-animation: bounce 3s infinite;
          animation: bounce 3s infinite;
}

@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
  60% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
  60% {
    -webkit-transform: translateY(-0.4em);
            transform: translateY(-0.4em);
  }
}

.service-head {
  text-align: center;
  margin-top: 5em;
  color: #286681;
  font-size: 1.5em;
}

.services-page {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 0.1fr 1fr 1fr;
      grid-template-columns: 0.1fr 1fr 1fr;
  -ms-grid-rows: 2fr 2fr;
      grid-template-rows: 2fr 2fr;
  overflow: hidden;
  height: 100%;
}

.services-page .services-page-child-2 p {
  color: black;
  font-size: 1.4em;
}

.services-page .services-page-child-2 ul li {
  word-break: break-word;
}

.services-page .services-page-child-3 img {
  position: relative;
  right: 0;
}

.Testimonials {
  margin-top: 1em;
}

.Testimonials .Testimonial-heading-container {
  background-color: #89d6fb;
  height: 4em;
}

.Testimonials .Testimonial-heading-container h1 {
  display: block;
  color: #286681;
  text-align: center;
  font-size: 2.1em;
  line-height: 1.9;
  padding: 0;
  margin: 0;
}

.Testimonials .Testimonial-child-1 {
  position: relative;
  color: white;
}

.Testimonials .Testimonial-child-1 .arrow {
  position: absolute;
}

.Testimonials .Testimonial-child-1 #arrow1 {
  width: 0;
  height: 0;
  background-color: #286681;
  border-top: 25px solid transparent;
  border-right: 50px solid #89d6fb;
  border-bottom: 25px solid transparent;
  border-left: #ffffff;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  left: 2%;
  border-radius: 10%;
  cursor: pointer;
  z-index: 1;
}

.Testimonials .Testimonial-child-1 .quote-1 {
  position: absolute;
  left: 3%;
  font-size: 3.5em;
  z-index: 1;
}

.Testimonials .Testimonial-child-1 .grid-2 {
  overflow: hidden;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row {
  padding: 20px;
  height: 400px;
  position: relative;
  -webkit-transition: -webkit-transform ease-in 1s;
  transition: -webkit-transform ease-in 1s;
  transition: transform ease-in 1s;
  transition: transform ease-in 1s, -webkit-transform ease-in 1s;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  margin: 0 auto;
  background: #286681;
  width: 100%;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .text {
  text-align: left;
  font-size: 1.8em;
  position: relative;
  left: 2%;
  padding: 0 4em;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .text .text-paragraph {
  margin-top: 0px;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .text .text-name {
  text-align: center;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .images {
  height: 100px;
  width: 100px;
  display: block;
  margin: 0 auto 0 auto;
  border-radius: 70%;
  -o-object-fit: cover;
     object-fit: cover;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .rating-stars {
  margin-top: 2em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.Testimonials .Testimonial-child-1 #arrow2 {
  position: absolute;
  width: 0;
  height: 0;
  background-color: #286681;
  border-top: 25px solid transparent;
  border-left: 50px solid #89d6fb;
  border-bottom: 25px solid transparent;
  border-right: #ffffff;
  position: absolute;
  top: 50%;
  right: 2%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  border-radius: 10%;
  cursor: pointer;
}

.Testimonials .Testimonial-child-1 .quote-2 {
  position: absolute;
  right: 2%;
  top: 20%;
  font-size: 3.5em;
}

.Testimonials .Testimonial-child-2 {
  background: black;
}

.faq-container {
  width: 100%;
  margin: 10em 0;
  height: auto;
  color: black;
  text-align: center;
}

.faq-container .list-container {
  height: auto;
  margin: 0 auto;
  width: 90%;
}

.faq-container .list-container .faqs-header {
  color: #286681;
  font-size: 2.5em;
  text-align: center;
  color: #286681;
}

.faq-container .list-container ul {
  margin: auto;
  padding: 0;
  text-align: left;
  background: #286681;
}

.faq-container .list-container ul li {
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  border-color: white;
}

.faq-container .list-container ul li button {
  margin-left: auto;
  margin-right: 1em;
  height: 1.8em;
  width: 0;
  height: 0;
  background-color: transparent;
  border-top: 13px solid transparent;
  border-right: 24px solid white;
  border-bottom: 13px solid transparent;
  border-left: transparent;
  cursor: pointer;
}

.faq-container .list-container ul li .show-more {
  display: block;
  -webkit-transition: 500ms;
  transition: 500ms;
}

.faq-container .list-container ul li .rotate-btn {
  rotate: -90deg;
  -webkit-transition: 500ms;
  transition: 500ms;
}

.faq-container .list-container ul li p {
  padding-left: 2em;
}

.faq-container .list-container ul li:first-child {
  padding-top: 0.8em;
}

.faq-container .list-container ul .faq-text {
  color: black;
  page-break-after: always;
  display: none;
  border-style: solid;
  border-color: #89d6fb;
  background: #ffffff;
  padding: 0.5em 3em;
}

.parent-msg {
  height: auto;
  margin: 0 auto;
  color: white;
  width: 70%;
  padding: 1.5em 1em;
  background: #3f3d56;
  border-radius: 10px;
  z-index: 1;
  -webkit-box-shadow: 5px 10px;
          box-shadow: 5px 10px;
}

.parent-msg .grid-msg-container {
  height: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.parent-msg .grid-msg-container .grid-msg-1 {
  background: #1ba9f2;
}

.parent-msg .grid-msg-container .grid-msg-1 h2 {
  padding: 50% 0.5em;
}

.parent-msg .grid-msg-container .grid-msg-2 {
  background: #e8d81a;
  padding: 20% 1em;
}

.parent-msg .grid-msg-container .grid-msg-2 input {
  border-radius: 2px;
  border: none;
}

.parent-msg .grid-msg-container .grid-msg-2 button {
  margin-top: 1em;
  color: white;
  background: #1ba9f2;
  height: 2.1em;
  width: 7em;
  color: white;
  font-weight: 700;
  -webkit-box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
  border: none;
}

.parent-msg .grid-msg-container .grid-msg-2 button:hover {
  cursor: pointer;
  background: #6e8a9b;
  border: solid 2px rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.footer {
  color: white;
}

.footer h4:hover {
  padding: 0.5em 0.2em;
  background: #538fa8;
  text-align: center;
  width: 5em;
  border-radius: 10px;
  height: 1em;
}

.footer .decoration-line {
  width: 100%;
  height: 1em;
  background: #286681;
  margin-top: 5em;
}

.footer .socials {
  background: #89d6fb;
  height: 3em;
}

.footer .socials ul {
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footer .socials ul li {
  margin: 1% 5em;
}

.footer .links {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  background: #286681;
}

.footer .links .footer-grid-1 {
  margin: 0 auto;
}

.footer .links .footer-grid-2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footer .links .footer-grid-2 .vertical-line {
  background: white;
  margin: auto auto;
  height: 5em;
  width: 2px;
}

.footer .links .footer-grid-2 .footer-grid-2-section-1 {
  margin: 0 3em;
}

.footer .links .footer-grid-2 .footer-grid-2-section-1 .location {
  margin: 20% auto;
}

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

@media only screen and (max-width: 1100px) {
  .header {
    -ms-grid-columns: 9em 6fr 0.2fr;
        grid-template-columns: 9em 6fr 0.2fr;
  }
  .header .header-child-3 button {
    width: 4.125em;
  }
  .header .header-child-3 .btn-mail {
    left: 0.1px;
  }
  .header .header-child-3 span {
    display: none;
  }
  .introduction {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .introduction .introduction-child-1 {
    margin: 0 auto;
  }
  .introduction .introduction-child-2 h2 {
    text-align: center;
  }
  .introduction .introduction-child-2 p {
    font-size: 1.3em;
  }
  .services-page {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .services-page .services-page-child-3 {
    display: none;
  }
  .downArrow {
    display: none;
  }
}

@media only screen and (max-width: 785px) {
  .slide-column {
    height: 900px;
  }
  .header {
    -ms-grid-columns: 2em 3fr none;
        grid-template-columns: 2em 3fr none;
  }
  .header .logo {
    margin-left: 0.1px;
  }
  .header .header-child-2 ul {
    gap: 0.2em;
  }
  .header .header-child-2 #faqs {
    display: none;
  }
  .header .header-child-2 #about {
    display: none;
  }
  .rating-stars {
    padding-top: 0.2em;
  }
}

.outside-parent-header .right {
  margin-right: 1em;
}

.footer #ams {
  padding-left: 15px;
}

@media only screen and (max-width: 650px) {
  .header {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 6em 2fr 125px;
        grid-template-columns: 6em 2fr 125px;
  }
  .header .header-child-2 {
    background: #286681;
  }
  .header .header-child-2 ul {
    font-size: 1.1em;
    padding-right: 1em;
    margin-top: 2em;
  }
  .header .logo {
    position: relative;
    left: 0;
    top: 0;
  }
}

@media only screen and (max-width: 480px) {
  .header {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 6em 4fr 125px;
        grid-template-columns: 6em 4fr 125px;
  }
  .header .header-child-2 {
    background: #286681;
  }
  .header .header-child-2 ul {
    font-size: 1em;
    padding-right: 0.8em;
    padding-left: 50px;
    margin-top: 2.3em;
  }
}
/*# sourceMappingURL=main.css.map */
  text-align: center;
  margin-top: 5em;
  color: #286681;
  font-size: 1.5em;
}

.services-page {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 0.1fr 1fr 1fr;
      grid-template-columns: 0.1fr 1fr 1fr;
  -ms-grid-rows: 2fr 2fr;
      grid-template-rows: 2fr 2fr;
  overflow: hidden;
  height: 100%;
}

.services-page .services-page-child-2 p {
  color: black;
  font-size: 1.4em;
}

.services-page .services-page-child-2 ul li {
  word-break: break-word;
}

.services-page .services-page-child-3 img {
  position: relative;
  right: 0;
}

.Testimonials {
  margin-top: 1em;
}

.Testimonials .Testimonial-heading-container {
  background-color: #89d6fb;
  height: 4em;
}

.Testimonials .Testimonial-heading-container h1 {
  display: block;
  color: #286681;
  text-align: center;
  font-size: 2.1em;
  line-height: 1.9;
  padding: 0;
  margin: 0;
}

.Testimonials .Testimonial-child-1 {
  position: relative;
  color: white;
}

.Testimonials .Testimonial-child-1 .arrow {
  position: absolute;
}

.Testimonials .Testimonial-child-1 #arrow1 {
  width: 0;
  height: 0;
  background-color: #286681;
  border-top: 25px solid transparent;
  border-right: 50px solid #89d6fb;
  border-bottom: 25px solid transparent;
  border-left: #ffffff;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  left: 2%;
  border-radius: 10%;
  cursor: pointer;
  z-index: 1;
}

.Testimonials .Testimonial-child-1 .quote-1 {
  position: absolute;
  left: 3%;
  font-size: 3.5em;
  z-index: 1;
}

.Testimonials .Testimonial-child-1 .grid-2 {
  overflow: hidden;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row {
  padding: 20px;
  height: 400px;
  position: relative;
  -webkit-transition: -webkit-transform ease-in 1s;
  transition: -webkit-transform ease-in 1s;
  transition: transform ease-in 1s;
  transition: transform ease-in 1s, -webkit-transform ease-in 1s;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  margin: 0 auto;
  background: #286681;
  width: 100%;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .text {
  text-align: left;
  font-size: 1.8em;
  position: relative;
  left: 2%;
  padding: 0 4em;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .text .text-paragraph {
  margin-top: 0px;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .text .text-name {
  text-align: center;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .images {
  height: 100px;
  width: 100px;
  display: block;
  margin: 0 auto 0 auto;
  border-radius: 70%;
  -o-object-fit: cover;
     object-fit: cover;
}

.Testimonials .Testimonial-child-1 .grid-2 .slide-row .slide-column .rating-stars {
  margin-top: 2em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.Testimonials .Testimonial-child-1 #arrow2 {
  position: absolute;
  width: 0;
  height: 0;
  background-color: #286681;
  border-top: 25px solid transparent;
  border-left: 50px solid #89d6fb;
  border-bottom: 25px solid transparent;
  border-right: #ffffff;
  position: absolute;
  top: 50%;
  right: 2%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  border-radius: 10%;
  cursor: pointer;
}

.Testimonials .Testimonial-child-1 .quote-2 {
  position: absolute;
  right: 2%;
  top: 20%;
  font-size: 3.5em;
}

.Testimonials .Testimonial-child-2 {
  background: black;
}

.faq-container {
  width: 100%;
  margin: 10em 0;
  height: auto;
  color: black;
  text-align: center;
}

.faq-container .list-container {
  height: auto;
  margin: 0 auto;
  width: 90%;
}

.faq-container .list-container .faqs-header {
  color: #286681;
  font-size: 2.5em;
  text-align: center;
  color: #286681;
}

.faq-container .list-container ul {
  margin: auto;
  padding: 0;
  text-align: left;
  background: #286681;
}

.faq-container .list-container ul li {
  color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  border-color: white;
}

.faq-container .list-container ul li button {
  margin-left: auto;
  margin-right: 1em;
  height: 1.8em;
  width: 0;
  height: 0;
  background-color: transparent;
  border-top: 13px solid transparent;
  border-right: 24px solid white;
  border-bottom: 13px solid transparent;
  border-left: transparent;
  cursor: pointer;
}

.faq-container .list-container ul li .show-more {
  display: block;
  -webkit-transition: 500ms;
  transition: 500ms;
}

.faq-container .list-container ul li .rotate-btn {
  rotate: -90deg;
  -webkit-transition: 500ms;
  transition: 500ms;
}

.faq-container .list-container ul li p {
  padding-left: 2em;
}

.faq-container .list-container ul li:first-child {
  padding-top: 0.8em;
}

.faq-container .list-container ul .faq-text {
  color: black;
  page-break-after: always;
  display: none;
  border-style: solid;
  border-color: #89d6fb;
  background: #ffffff;
  padding: 0.5em 3em;
}

.parent-msg {
  height: auto;
  margin: 0 auto;
  color: white;
  width: 70%;
  padding: 1.5em 1em;
  background: #3f3d56;
  border-radius: 10px;
  z-index: 1;
  -webkit-box-shadow: 5px 10px;
          box-shadow: 5px 10px;
}

.parent-msg .grid-msg-container {
  height: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.parent-msg .grid-msg-container .grid-msg-1 {
  background: #1ba9f2;
}

.parent-msg .grid-msg-container .grid-msg-1 h2 {
  padding: 50% 0.5em;
}

.parent-msg .grid-msg-container .grid-msg-2 {
  background: #e8d81a;
  padding: 20% 1em;
}

.parent-msg .grid-msg-container .grid-msg-2 input {
  border-radius: 2px;
  border: none;
}

.parent-msg .grid-msg-container .grid-msg-2 button {
  margin-top: 1em;
  color: white;
  background: #1ba9f2;
  height: 2.1em;
  width: 7em;
  color: white;
  font-weight: 700;
  -webkit-box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.2);
  border: none;
}

.parent-msg .grid-msg-container .grid-msg-2 button:hover {
  cursor: pointer;
  background: #6e8a9b;
  border: solid 2px rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.footer {
  color: white;
}

.footer h4:hover {
  padding: 0.5em 0.2em;
  background: #538fa8;
  text-align: center;
  width: 5em;
  border-radius: 10px;
  height: 1em;
}

.footer .decoration-line {
  width: 100%;
  height: 1em;
  background: #286681;
  margin-top: 5em;
}

.footer .socials {
  background: #89d6fb;
  height: 3em;
}

.footer .socials ul {
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footer .socials ul li {
  margin: 1% 5em;
}

.footer .links {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  background: #286681;
}

.footer .links .footer-grid-1 {
  margin: 0 auto;
}

.footer .links .footer-grid-2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.footer .links .footer-grid-2 .vertical-line {
  background: white;
  margin: auto auto;
  height: 5em;
  width: 2px;
}

.footer .links .footer-grid-2 .footer-grid-2-section-1 {
  margin: 0 3em;
}

.footer .links .footer-grid-2 .footer-grid-2-section-1 .location {
  margin: 20% auto;
}

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

@media only screen and (max-width: 1100px) {
  .header {
    -ms-grid-columns: 9em 6fr 0.2fr;
        grid-template-columns: 9em 6fr 0.2fr;
  }
  .header .header-child-3 button {
    width: 4.125em;
  }
  .header .header-child-3 .btn-mail {
    left: 0.1px;
  }
  .header .header-child-3 span {
    display: none;
  }
  .introduction {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .introduction .introduction-child-1 {
    margin: 0 auto;
  }
  .introduction .introduction-child-2 h2 {
    text-align: center;
  }
  .introduction .introduction-child-2 p {
    font-size: 1.3em;
  }
  .services-page {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .services-page .services-page-child-3 {
    display: none;
  }
  .downArrow {
    display: none;
  }
}

@media only screen and (max-width: 785px) {
  .slide-column {
    height: 900px;
  }
  .header {
    -ms-grid-columns: 2em 3fr none;
        grid-template-columns: 2em 3fr none;
  }
  .header .logo {
    margin-left: 0.1px;
  }
  .header .header-child-2 ul {
    gap: 0.2em;
  }
  .header .header-child-2 #faqs {
    display: none;
  }
  .header .header-child-2 #about {
    display: none;
  }
  .rating-stars {
    padding-top: 0.2em;
  }
}

.outside-parent-header .right {
  margin-right: 1em;
}

.footer #ams {
  padding-left: 15px;
}

@media only screen and (max-width: 650px) {
  .header {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 6em 2fr 125px;
        grid-template-columns: 6em 2fr 125px;
  }
  .header .header-child-2 {
    background: #286681;
  }
  .header .header-child-2 ul {
    font-size: 1.1em;
    padding-right: 1em;
    margin-top: 2em;
  }
  .header .logo {
    position: relative;
    left: 0;
    top: 0;
  }
}

@media only screen and (max-width: 480px) {
  .header {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 6em 4fr 125px;
        grid-template-columns: 6em 4fr 125px;
  }
  .header .header-child-2 {
    background: #286681;
  }
  .header .header-child-2 ul {
    font-size: 1em;
    padding-right: 0.8em;
    padding-left: 50px;
    margin-top: 2.3em;
  }
}
/*# sourceMappingURL=main.css.map */
`
export default Wrapper
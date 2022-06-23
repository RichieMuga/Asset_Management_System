import styled from 'styled-components'
const Wrapper = styled.div`
//service head

.service-head {
  text-align: center;
  margin-top: 4em;
  color: rgb(40, 102, 129);
  font-size: 2rem;
}
//services page
.services-page {
  display: flex;
  flex-direction:row;
  height: fit-content;
  // .services-page-child-1 {
  // }
  .services-page-child-1 {
    padding: .2em 5em .2em 2em;
    p {
      color: black;
      font-size: 1.2em;
      line-height: 1.7;
    }
    li{
      padding: 1em 0;
    }
  }
  .services-page-child-2 {
    padding: .2em 2em;
    img{
      width:80em;
    }
  }
}
`

export default Wrapper
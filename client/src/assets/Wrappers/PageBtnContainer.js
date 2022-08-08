import styled from 'styled-components'

const Wrapper = styled.section`
 height: 6rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--font-white);
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 40px;
    height: 30px;
    font-weight: 700;
    font-size: 1.25rem;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .active {
    background: var(--purple-primary);
    color:var(--font-white);
  }
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    background: var(--font-white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: #000;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--purple-primary);
    color: var(--font-white);
  }
`
export default Wrapper
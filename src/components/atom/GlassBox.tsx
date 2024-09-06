import styled from "styled-components";

const GlassBox = styled.div`
  background: rgba(255, 255, 255, 0.4); /* 반투명 배경 */
  border-radius: 15px; /* 모서리를 둥글게 처리 */
  backdrop-filter: blur(10px); /* 블러 효과 */
  -webkit-backdrop-filter: blur(10px); /* 사파리 브라우저 지원 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* 테두리 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* 그림자 효과 */
`;

export default GlassBox;

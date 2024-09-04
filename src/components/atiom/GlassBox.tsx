import styled from "styled-components";

const GlassBox = styled.div<{
  width?: number;
  height?: number;
  padding?: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: rgba(255, 255, 255, 0.5); /* 반투명 배경 */
  border-radius: 15px; /* 모서리를 둥글게 처리 */
  backdrop-filter: blur(20px); /* 블러 효과 */
  -webkit-backdrop-filter: blur(20px); /* 사파리 브라우저 지원 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* 테두리 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* 그림자 효과 */
  padding: ${(props) => props.padding};
`;

export default GlassBox;

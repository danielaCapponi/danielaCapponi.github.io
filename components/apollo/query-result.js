import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QueryResult = ({ loading, error, data, children }) => {
  if (error) {

    return <p>Error</p>
  }
  if (loading) {
    <p>cargando</p>
    /*   return <LoaderImg />; */
  }
  if (!data) {
    return (
      <>
        <Container>
          <p>No se obtuvo ningún resultado.</p>
        </Container>
      </>
    );
  }
  if (data) {
    return children;
  }
};

export default QueryResult;

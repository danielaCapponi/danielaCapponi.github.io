import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
/* import HomePage from "@/components/Pages/Home/HomePage"; */
import QueryResult from "@/query-result";

/* import { HOMEITEMS } from "@/queries/pages/getHomeItems"; */

const StyledMain = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export default function Home() {
  /*   const { loading, error, data } = useQuery(HOMEITEMS);
   */
  const loading = true
  const error = null
  const data = null

  return (
    <StyledMain>
      <QueryResult error={error} loading={loading} data={data}>
        Hola
        {/* <HomePage info={data} /> */}
      </QueryResult>
    </StyledMain>
  );
}

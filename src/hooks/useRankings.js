import { useStaticQuery, graphql } from "gatsby";

const useRankings = () => {
  return useStaticQuery(graphql`
    {
      allSanityRanking {
        RankingEN: nodes {
          ranking
          priority
        }
        RankingDE: nodes {
          ranking: rankingGerman
          priority
        }
        RankingES: nodes {
          ranking: rankingSpanish
          priority
        }
      }
    }
  `);
};

export default useRankings;

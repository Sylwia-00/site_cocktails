import type { Cocktail } from "../App";

interface ResumePanier {
  cocktailCount: number;
}

function ResumePanier({ cocktailCount }: ResumePanier) {
  return (
    <div>
      <h3>Vous avez : {cocktailCount} cocktails</h3>
    </div>
  );
}

export default ResumePanier;

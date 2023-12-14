import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function App() {
  const params = new URL(document.location).searchParams;

  // const smallestSize = Math.min(window.innerHeight, window.innerWidth);

  const src =
    params.get("u") ||
    "https://pbs.twimg.com/media/FupfZTSWYAASIBi?format=png&name=small";
  const p = params.get("p") || 3;

  return (
    <div>
      <JigsawPuzzle
        imageSrc={src}
        rows={p}
        columns={p}
        onSolved={() => alert(`DN: ${crypto.randomUUID()}`)}
      />
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <button>
        <Link to="/random/3">Random Word</Link>
      </button>
    </div>
  );
}
export default Home;

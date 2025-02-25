import { useContext, useEffect, useState } from "react";
// import { ContextProvider } from "../Context/ContextAPI";
import axios from "axios";
import { SERVER } from "../App";
import { Link } from "react-router-dom";

const Profile = () => {
  const { token } = useContext(ContextProvider);
  const [data, setData] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${SERVER}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <div>
        <img
          src={data?.user?.image || "https://tinyurl.com/9edxm3tb"}
          alt="Profile"
        />
        <h2>{data?.user?.name}</h2>
        <p>{data?.user?.email}</p>
        <p>{data?.user?.location}</p>

        <h3>Certifications</h3>
        <ul>
          {data?.user?.certifications?.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Favorite Foods</h3>
        <div>
          {data?.allFav?.items?.map((recipe) => (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe?.foodId}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                />
                <h2>{recipe.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${fetchdata}/profile`, {
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
          src={data?.user?.image || "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="}
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

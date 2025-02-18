import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import moment from "moment/moment";

const Profile = () => {
  const { user, updetProf } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [imgToUpload, setImgToUpload] = useState(null);
  const [nameToUpload, setNameToUpload] = useState(null);

  const image = user?.photoURL;
  const name = user?.displayName;
  const email = user?.email;

  const enableEditing = () => {
    setEditing(!editing);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newName = e.target.newName.value;
    const newImage = e.target.newImg.value;
    newImage !== null ? setImgToUpload(newImage) : setImgToUpload(image);
    newName !== null ? setNameToUpload(newName) : setNameToUpload(name);
    updetProf(nameToUpload, imgToUpload);
    console.log(nameToUpload, imgToUpload);
    setEditing(!editing);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-300">
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-between">
          <h1 className="text-start font-bold text-3xl">User Profile</h1>
        </div>
      </div>
      <div className="section hero bg-accent pt-8 pb-34">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <div>
            <h1 className="text-3xl text-secondary font-semibold">
              Welcome{name && `, ${name}`}!
            </h1>
            <p className="py-6 text-accent-content text-lg">
              Manage your profile, update your information, and customize your
              experience.
            </p>
          </div>
        </div>
      </div>
      <div className="card w-96 max-w-full bg-primary-content text-primary card-xl shadow-sm mx-auto -mt-34">
        <div className="card-body flex flex-col gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl mx-auto">
            <img src={image ? image : "/user.png"} className="h-full mx-auto" />
          </div>
          {!editing && (
            <div>
              <h2 className="card-title">{name}</h2>
              <p>Email: {email}</p>
              <p>
                Joined: {moment(user.createdAt).format("DD MMM YYYY, hh:mm A")}
              </p>
            </div>
          )}
          {editing && (
            <form onSubmit={handleUpdate}>
              <div>
                <input
                  type="text"
                  name="newName"
                  className="card-title"
                  placeholder={name}
                />
                <input type="url" name="newImg" placeholder="Image URL" />
                <p>Email: {email}</p>
                <p>
                  Joined:{" "}
                  {moment(user.createdAt).format("DD MMM YYYY, hh:mm A")}
                </p>
              </div>
              <button className="btn btn-ghost ml-auto">Update</button>
            </form>
          )}
          <div className="justify-end card-actions">
            {!editing && (
              <button className="btn btn-ghost" onClick={enableEditing}>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

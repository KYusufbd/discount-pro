import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import moment from "moment/moment";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const image = user?.photoURL;
  const name = user?.displayName;
  const email = user?.email;

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
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Email: {email}</p>
            <p>
              Joined: {moment(user.createdAt).format("DD MMM YYYY, hh:mm A")}
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-ghost">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/**
 {
    "uid": "CPYnUMkPvWd7jbIwlnoS2UpQzZM2",
    "email": "yfaka001@gmail.com",
    "emailVerified": true,
    "displayName": "Kazi Yusuf (Abu Khubaib)",
    "isAnonymous": false,
    "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocIz_oLJ9qRBg48ENjgkIIbpSEL5JCFc7snbtyBFoclqHU1YRdBf=s96-c",
    "providerData": [
        {
            "providerId": "google.com",
            "uid": "105833633162958767264",
            "displayName": "Kazi Yusuf (Abu Khubaib)",
            "email": "yfaka001@gmail.com",
            "phoneNumber": null,
            "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocIz_oLJ9qRBg48ENjgkIIbpSEL5JCFc7snbtyBFoclqHU1YRdBf=s96-c"
        }
    ],
    "stsTokenManager": {
        "refreshToken": "AMf-vBzt7NxQVl3GFK2aSYni5LVTHfdtdTq2FP71Ka2V7qw33H22ezu31Eeb_ijqxEqRUG4leNiooWwsTJJ8NQoo3XYCdUH0UZ6a_PSbTSA3Du9w6YnYB_YoL2x-06TZ4CBqfrIIQGyRU7dMGzrKH4xFDcviiQ0WpmeAZHROeyWc5gZbvQ-sEHAv7cUCtU7y7-GKGWIMQqDo2BHzi6YIVLUutg5uhrg1wL4FcUdwNnEQww63ptapG0j0Jon8rDAlhCCkLgZVdYWiyf_g6TtQCzQWDpX2UuIgFWEL_WDAUZVEbriZGW10YolbMKK8Iybi7BuolngFNiGtcBkOB_LqBYOkThI9gLNkA5C53uGuHuRJafhf1Pf4FjT3UbfkGx3f-TGBPv5RGqXkueQbkXwL8J2q12B2mokE9CPfTx6vMAdo8xBMjMPLNobzi7Snu9QNy8SrP9SjixmMh1ZUBKgSbLmqbFwN9mD2HQ",
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBjYmJiZDI2NjNhY2U4OTU4YTFhOTY4ZmZjNDQxN2U4MDEyYmVmYmUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2F6aSBZdXN1ZiAoQWJ1IEtodWJhaWIpIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0l6X29MSjlxUkJnNDhFTmpna0lJYnBTRUw1SkNGYzdzbmJ0eUJGb2NscUhVMVlSZEJmPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Rpc2NvdW50LXByby1mZTUwOCIsImF1ZCI6ImRpc2NvdW50LXByby1mZTUwOCIsImF1dGhfdGltZSI6MTczOTgwOTA4NywidXNlcl9pZCI6IkNQWW5VTWtQdldkN2piSXdsbm9TMlVwUXpaTTIiLCJzdWIiOiJDUFluVU1rUHZXZDdqYkl3bG5vUzJVcFF6Wk0yIiwiaWF0IjoxNzM5ODA5MDg3LCJleHAiOjE3Mzk4MTI2ODcsImVtYWlsIjoieWZha2EwMDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDU4MzM2MzMxNjI5NTg3NjcyNjQiXSwiZW1haWwiOlsieWZha2EwMDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.e9gnxETCBdXKGsP0I05pmF7nxiXl_q8xUTTmv2ZIia8varm1Kqxf1IVOA8dfcnROhMQu6tBamNaqC2aEdN7MqQF9hV0xhfRXF74rYSeXrnkPTHBNfkPXQsSJh2qRpxYVJFg0rmzg5jVHdrRh_CS40t5rvmwtrZFiM8q_0NF6XRI36Ae2l8ZS9tq2z1jcO1-SBC4eJXgiR9DohEor_0xInVfR0mtJ65NLE-Vrf08ul8qCyihHVVVMoar8bpSzIuLrk1kNjpHRGCNJYdNrtmW2KFPuZvVvwo-UaRGG6gYT0ph8D4kna8K1I6B05UqsPdbJprWfpcqcYfvZfzSm81NS3A",
        "expirationTime": 1739812686542
    },
    "createdAt": "1739759710463",
    "lastLoginAt": "1739809087893",
    "apiKey": "AIzaSyDA0hLgqh_t3woDvRJwUn3aR4oASllFHwQ",
    "appName": "[DEFAULT]"
} 
 
*/

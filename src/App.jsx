import { User } from "lucide-react";
import Card from "./Components/Card";

const App = () => {
  const data = [
  {
    "photo": "https://randomuser.me/api/portraits/women/1.jpg",
    "name": "Riya Sharma",
    "username": "riya_sharma",
    "bio": "Love coding, coffee, and creative design.",
    "points": 1240,
    "friends": 340,
    "joinedAt": "March 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/2.jpg",
    "name": "Arjun Patel",
    "username": "arjun_patel",
    "bio": "Full stack developer and tech enthusiast.",
    "points": 980,
    "friends": 210,
    "joinedAt": "July 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/3.jpg",
    "name": "Sneha Mehta",
    "username": "sneha_mehta",
    "bio": "UI/UX designer who loves minimal interfaces.",
    "points": 1500,
    "friends": 410,
    "joinedAt": "January 2024"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/4.jpg",
    "name": "Rahul Verma",
    "username": "rahul_verma",
    "bio": "JavaScript developer exploring React and Node.",
    "points": 1120,
    "friends": 298,
    "joinedAt": "September 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/5.jpg",
    "name": "Ananya Gupta",
    "username": "ananya_gupta",
    "bio": "Photographer and travel blogger.",
    "points": 890,
    "friends": 175,
    "joinedAt": "May 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/6.jpg",
    "name": "Karan Shah",
    "username": "karan_shah",
    "bio": "Startup enthusiast and backend engineer.",
    "points": 1330,
    "friends": 367,
    "joinedAt": "December 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/7.jpg",
    "name": "Priya Desai",
    "username": "priya_desai",
    "bio": "Digital artist creating modern illustrations.",
    "points": 760,
    "friends": 140,
    "joinedAt": "April 2024"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/8.jpg",
    "name": "Amit Joshi",
    "username": "amit_joshi",
    "bio": "Tech blogger sharing coding tutorials.",
    "points": 1040,
    "friends": 256,
    "joinedAt": "August 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/9.jpg",
    "name": "Neha Kapoor",
    "username": "neha_kapoor",
    "bio": "Marketing specialist and content creator.",
    "points": 920,
    "friends": 220,
    "joinedAt": "November 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/10.jpg",
    "name": "Vikram Singh",
    "username": "vikram_singh",
    "bio": "Fitness lover and mobile app developer.",
    "points": 870,
    "friends": 190,
    "joinedAt": "February 2024"
  }
];
  return (
    <>
    <section className="flex flex-wrap justify-center">
    {/* <Card name = {data}/> */}
   {data.map(function(user){
    return <Card data={user} />;
   })}

    </section>
   </>
  )
};

export default App
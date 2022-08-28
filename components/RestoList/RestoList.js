import { useQuery } from "react-query";
import { restoApi } from "../../config/services/restoApi";
import Post from "./Post";

const RestoList = ({ id }) => {   

    const getRestoByLoc = async () => {
        const res = await restoApi.getRestoByLoc(id);
        return res.data;
    }

    const { status, data, error } = useQuery('resto', getRestoByLoc); 

    if (status === 'success') {
        console.log(data);
    }


    return ( status === 'success' && data ?
        <div className=" w-full lg:flex lg:flex-wrap gap-4">
          {data.map((val) => (
            <Post val={val} key={val.id} />
          ))}
        </div>
        : <p>Loading...</p>
    )
}

export default RestoList;


const resto = [
  {
    id: "1",
    name: "Sate Lalat Pak Kandes",
    badge: ["Lontong", "Sate"],
    image: "/assets/images/RujakCingur.jpg",
    reviews: 24,
  },
  {
    id: "2",
    name: "Soto Pak Abas",
    badge: ["Lontong", "Sate"],
    image: "/assets/images/RujakCingur.jpg",
    reviews: 14,
  },
  {
    id: "3",
    name: "Rujak Cingur",
    badge: ["Lontong", "Sate"],
    image: "/assets/images/RujakCingur.jpg",
    reviews: 27,
  },
];

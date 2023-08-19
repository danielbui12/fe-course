import { useSelector } from "../../redux/store";

function Dashboard() {
  const userReducer = useSelector((state) => state.user)
  console.log(userReducer);
  
  return (
    <></>
  );
}
export default Dashboard
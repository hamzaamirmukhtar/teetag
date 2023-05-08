import styles from "./DataDetailCard.module.css";
interface DataDetailCardProps {
  user: any;
}
const DataDetailCard = ({ user }: DataDetailCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <p className="font-bold mb-2">Name</p>
        <p>{user.name}</p>
      </div>
      <div>
        <p className="font-bold mb-2">Player Id</p>
        <p>{user.id}</p>
      </div>

      <div>
        <p className="font-bold mb-2">Email</p>
        <p>{user.email}</p>
      </div>

      <div>
        <p className="font-bold mb-2">Phone Number</p>
        <p>{user.phone}</p>
      </div>

      <div>
        <p className="font-bold mb-2">State</p>
        <p>{user.state}</p>
      </div>

      <div>
        <p className="font-bold mb-2">Personal Tags</p>
        <p>{user.total_tags}</p>
      </div>
    </div>
  );
};

export default DataDetailCard;

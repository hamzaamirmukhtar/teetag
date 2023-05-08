import Heading from "@/website/components/Heading/Heading";
import { handleStatus } from "@/website/lib/networkCalls/authFunctions";
import {
  deleteInfluencer,
  deleteMinion,
  deleteUser,
} from "@/website/lib/networkCalls/dashboard/userDetails";
type Props = {
  title: string;
  setOpen: (open: boolean) => void;
  user: any;
  type: string;
};
const DeleteModal = ({ title, setOpen, user, type }: Props) => {
  function deleteAction() {
    let response;
    switch (type) {
      case "user":
        response = deleteUser(user.id);
        break;
      case "minion":
        response = deleteMinion(user.id);
        break;
      case "influencer":
        response = deleteInfluencer(user.id);
        break;
      default:
        break;
    }
    response.then((res) => {
      handleStatus(res);
      setOpen(false);
    });
  }

  return (
    <>
      <div className="darkBG">
        <div className="centered">
          <div className="modal">
            <div className="container">
              <div className="verification__box">
                <Heading title={title} />
                <h6 className="mb-5 font-exo h8 text-green-light text-center">
                  Are you sure you want to delete {user.name}?
                </h6>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn-teetag red w-full text-center"
                    onClick={deleteAction}
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="btn-teetag green w-full text-center ml-10"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;

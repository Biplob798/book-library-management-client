import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Modal = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-around items-center py-4 gap-4 border">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-outline bg-[#ea580c] text-white"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Borrow Book
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="space-y-4">
              <h2>Return Date</h2>{" "}
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  placeholder="Return date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Submit</button>
              </form>
            </div>
          </div>
        </dialog>
        <button className=" btn btn-outline bg-[#ea580c] text-white">
          Read Book
        </button>{" "}
      </div>
    </div>
  );
};

export default Modal;

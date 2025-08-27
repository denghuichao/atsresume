import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const FormButton = ({ size, remove, add }) => {

    return (
      <div className="flex gap-2 mb-4">
        <button type="button" onClick={add}
          aria-label="Add"
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
          <MdAddCircle className="text-lg" />
          <span>Add</span>
        </button>
        {
          size > 0 &&
          <button type="button" onClick={remove}
            aria-label="Remove"
            className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
            <MdRemoveCircle className="text-lg" />
            <span>Remove</span>
          </button>
        }
      </div>
    )
  }

export default FormButton;
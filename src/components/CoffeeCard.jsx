import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees , setCoffees}) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }

            )
            const remaining = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaining);
            
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl p-4">
      <figure className="w-2/5">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full px-5">
        <div className="space-y-6">
          <h2 className="card-title">Name : {name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Category : {category}</p>
        </div>
        <div className="card-actions ">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item btn-primary">View</button>
            <Link to={`updateCoffee/${_id}`}>
            <button className="btn join-item btn-info">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item btn-secondary"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

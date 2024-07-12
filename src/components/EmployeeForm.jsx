import axios from "axios";
const EmployeeForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    const empId = event.target.empId.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const mobileNumber = event.target.mobileNumber.value;
    const designation = event.target.designation.value;
    const dateOfJoining = event.target.dateOfJoining.value;
    const data = {
      empId,
      firstName,
      lastName,
      email,
      mobileNumber,
      designation,
      dateOfJoining,
    };

    axios
      .post("http://localhost:8080/o/c/employeeprofiles/", data)
      .then((response) => {
        console.log(data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form name="empProfile" onSubmit={submitHandler}>
      <label>
        Employee ID:
        <input type="text" name="empId" />
      </label>
      <br></br>
      <label>
        FirstName:
        <input type="text" name="firstName" />
      </label>
      <br></br>
      <label>
        LastName:
        <input type="text" name="lastName" />
      </label>
      <br></br>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <br></br>
      <label>
        Mobile Number:
        <input type="text" name="mobileNumber" />
      </label>
      <br></br>
      <label>
        Designation:
        <input type="text" name="designation" />
      </label>
      <br></br>
      <label>
        Date of Joining:
        <input type="text" name="dateOfJoining" />
      </label>
      <br></br>
      <button>Save</button>
    </form>
  );
};
export default EmployeeForm;

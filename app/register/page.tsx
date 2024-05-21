import RegistrationForm from "../components/RegistrationForm";
import Title from "@/components/Title";

function Register() {
  return (
    <div className=" my-8 flex flex-col justify-center">
      <div>
        <h2 className=" lg:text-sm md:text-xs text-center uppercase text-gray-500">
          Join US
        </h2>
      </div>
      <div>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Register;

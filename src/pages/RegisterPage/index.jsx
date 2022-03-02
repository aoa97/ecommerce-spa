import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Text, Button, TextInput, Card, Message } from "../../components";
import { registerUser } from "../../redux/actions/userActions";
// Style as login styles

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.userRegister);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (user) => {
    dispatch(registerUser(user));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="login">
      <Card className="login-form">
        <form onSubmit={handleSubmit(handleLogin)}>
          <Text className="s-lg">Register</Text>
          <Text className="s-sm gray-d">Create a new account</Text>

          {/* Display Name */}
          <TextInput
            reg={register("name", { required: true })}
            placeholder="Display Name"
            className="login-textInput"
          />
          <span className="error-message">
            {errors.name?.type === "required" && "Display name is required."}
          </span>

          {/* E-mail */}
          <TextInput
            reg={register("email", { required: true })}
            type="email"
            placeholder="E-mail"
            className="login-textInput"
          />
          <span className="error-message">
            {errors.email?.type === "required" && "E-mail is required."}
          </span>

          {/* Password */}
          <TextInput
            reg={register("password", { required: true, minLength: 8 })}
            type="password"
            placeholder="Password"
            className="login-textInput"
          />
          <span className="error-message">
            {errors.password?.type === "required" && "Password is required."}
          </span>
          <span className="error-message">
            {errors.password?.type === "minLength" &&
              "Password should be at-least 8 characters."}
          </span>

          {error && <Message error>{error}</Message>}

          {/* Buttons */}
          <div className="form-buttons">
            <Button loading={loading}>Sign Up</Button>
            <Button icon="google" iconType="logo" className="secondary">
              Sign in With Google
            </Button>
          </div>

          {/* Switch to Register */}
          <Text className="gray-d s-xs w-500 already">
            Already have an account?{" "}
            <Link to="/login" className="primary">
              Sign In
            </Link>
          </Text>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;

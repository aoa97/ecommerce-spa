import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Text, Button } from "../../components";
import "./styles.scss";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <Text className="s-lg">Sign In</Text>
        <Text className="s-sm gray-d">Welcome back!</Text>

        {/* E-mail */}
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="E-mail"
        />
        <span className="error-message">
          {errors.email?.type === "required" && "E-mail is required."}
        </span>

        {/* Password */}
        <input
          {...register("password", { required: true, minLength: 8 })}
          type="password"
          placeholder="Password"
        />
        <span className="error-message">
          {errors.password?.type === "required" && "Password is required."}
        </span>
        <span className="error-message">
          {errors.password?.type === "minLength" &&
            "Password should be at-least 8 characters."}
        </span>

        {/* Forgot Password */}
        <Link to="/" className="primary s-xs w-500 forgot">
          Forgot Password?
        </Link>

        {/* Buttons */}
        <div className="form-buttons">
          <Button>Sign In</Button>
          <Button icon="google" iconType="logo" className="secondary">
            Sign in With Google
          </Button>
        </div>

        {/* Switch to Register */}
        <Text className="gray-d s-xs w-500 already">
          Doesn't have an Account?{" "}
          <Link to="/register" className="primary">
            Register
          </Link>
        </Text>
      </form>
    </div>
  );
};

export default LoginPage;
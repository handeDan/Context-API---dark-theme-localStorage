const LoginPage = () => {
  return (
    <div>
      <h2 className="title">Login Page</h2>
      <div className="login-form">
        <label>Username:</label>
        <input type="text" placeholder="please type your username" />
        <label>Pasword:</label>
        <input type="text" placeholder="please type your password" />
        <button className="button">Submit</button>
      </div>
    </div>
  );
};

export default LoginPage;

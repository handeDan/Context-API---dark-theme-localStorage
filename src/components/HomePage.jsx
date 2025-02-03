const HomePage = () => {
  return (
    <div>
      <h2 className="title">Home Page</h2>
      <div className="home">
        <p>Welcome!</p>
        <p>
          This is a sample for <span style={{ color: 'red' }}>Context API</span>{' '}
          for app <span style={{ color: 'blue' }}>theme</span>.
        </p>
        <p>
          You can click <span style={{ color: 'blue' }}>Dark Mode</span> to use
          Context API and check the local storage changes.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

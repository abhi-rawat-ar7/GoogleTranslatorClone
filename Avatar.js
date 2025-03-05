import React from 'react';

const Avatar = () => {
  const handleClick = () => {
    // Save the current URL before redirecting to the sign-up page
    localStorage.setItem('previousPage', window.location.href);

    // Redirect to the sign-up app (subfolder)
    window.location.href = 'http://localhost:3001'; // Assuming sign-up app runs on port 3001
  };

  return (
    <div>
      <img
        src="avatar.png"
        alt="Avatar"
        onClick={handleClick}
      />
    </div>
  );
};

export default Avatar;

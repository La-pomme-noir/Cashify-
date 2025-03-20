import React from 'react';
import { LoginLogic } from '../whatever/LoginLogic';
import LoginFormUI from '../view/LoginFormUI';

export const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    showAlert,
    handleSubmit,
    handleGoogleLogin,
    closeAlert,
  } = LoginLogic();

  return (
    <LoginFormUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      handleGoogleLogin={handleGoogleLogin}
      showAlert={showAlert}
      error={error}
      success={success}
      closeAlert={closeAlert}
    />
  );
};

export default LoginForm;
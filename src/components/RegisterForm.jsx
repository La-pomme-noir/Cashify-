import React from 'react';
import { RegisterLogic } from '../whatever/RegisterLogic';
import RegisterFormUI from '../view/RegisterFormUI';

export const RegisterForm = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    termsAccepted,
    setTermsAccepted,
    error,
    success,
    showAlert,
    passwordCriteria,
    passwordStrength,
    handleSubmit,
    handleGoogleRegister,
    handlePasswordChange,
    handleRecaptchaV2,
    closeAlert,
  } = RegisterLogic();

  return (
    <RegisterFormUI
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      handlePasswordChange={handlePasswordChange}
      termsAccepted={termsAccepted}
      setTermsAccepted={setTermsAccepted}
      handleSubmit={handleSubmit}
      handleGoogleRegister={handleGoogleRegister}
      showAlert={showAlert}
      error={error}
      success={success}
      closeAlert={closeAlert}
      passwordCriteria={passwordCriteria}
      passwordStrength={passwordStrength}
      handleRecaptchaV2={handleRecaptchaV2}
    />
  );
};

export default RegisterForm;
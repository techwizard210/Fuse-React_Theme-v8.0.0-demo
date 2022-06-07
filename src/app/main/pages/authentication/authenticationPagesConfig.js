import signInPagesConfig from './sign-in/signInPagesConfig';
import signUpPagesConfig from './sign-up/signUpPagesConfig';
import signOutPagesConfig from './sign-out/signOutPagesConfig';
import confirmationRequiredPagesConfig from './confirmation-required/confirmationRequiredPagesConfig';
import forgotPasswordPagesConfig from './forgot-password/forgotPasswordPagesConfig';
import resetPasswordPagesConfig from './reset-password/resetPasswordPagesConfig';
import unlockSessionPagesConfig from './unlock-session/unlockSessionPagesConfig';

const authenticationPagesConfigs = [
  signInPagesConfig,
  signUpPagesConfig,
  signOutPagesConfig,
  forgotPasswordPagesConfig,
  resetPasswordPagesConfig,
  confirmationRequiredPagesConfig,
  unlockSessionPagesConfig,
];

export default authenticationPagesConfigs;

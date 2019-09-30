import Auth from '@aws-amplify/auth';

Auth.configure({
    region: 'us-east-2',
    userPoolId: 'us-east-2_kkkKu14rP',
    userPoolWebClientId: 'qcu4s5djid633t6lmpvqu1b4g'
});

export default Auth;
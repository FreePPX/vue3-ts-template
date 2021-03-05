import axios from '../http';

//停车场客户端短信登录
interface LoginParams {
  account: string;  //手机号码
  password: string; //用户密码
}

export function loginFn(params: LoginParams) {
  const result = axios.post('api/login', params);
  result.then(res => {
    //保存token
    setStorage('token', res.headers.token);
  });
  return result;
}

export function exampleLoginFn(params: LoginParams) {
  return new Promise((resolve, reject) => {
      if (params.password === '123456' && params.account === '18080008000') {
        //保存token
        setStorage('token', '666666');
        resolve({data: {status: 'ok'}});
      } else {
        resolve({data: {status: 'fail'}});
      }
    },
  );
}
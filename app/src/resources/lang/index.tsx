import en from './en';
import ptBr from './pt-br';

export interface IGlossary {
  home?: string;
  signin?: string;
  signup?: string;
  signout?: string;
  name?: string;
  email?: string;
  cellphone?: string;
  password?: string;
  welcome?: string;
  welcomeback?: string;
  welcomesignup?: string;
  name_required?: string;
  email_required?: string;
  cellphone_required?: string;
  password_required?: string;
  forgot_password?: string;
  restore_password?: string;
  send_reset_instructions?: string;
}
enum lang {
  en,
  ptBr
}
const getLocale = () => {
  //TODO - Get locale from device
  return lang.ptBr;
}
const __translate = ( key: any) => {
  switch (getLocale()) {
    case lang.en:
      return en[key];
    case lang.ptBr:
      return ptBr[key];
  }
};

export default __translate;
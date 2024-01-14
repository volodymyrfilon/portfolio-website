export interface FormProps {
  data: {
    input: {
      email: string;
      name: string;
      message: string;
    };
    checkbox: {
      acceptTerms: string;
      beforeLink: string;
      linkTerms: {
        name: string;
        href: string;
      };
    };
    button: {
      name: string;
    };
    errorText: string;
    successText: string;
  };
}

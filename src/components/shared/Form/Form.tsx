import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react';
import Link from 'next/link';
import { FormProps } from './Form.props';

export const Form = ({ data }: FormProps) => {
  const { input, checkbox, button, errorText, successText, emailTemplate } = data;
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = formRef.current;
    if (currentForm == null) return;

    setSuccess(false);
    setError(false);
    emailjs.sendForm('service_50pdx47', emailTemplate, currentForm, 'd0i9kuK3dREHwIgVy').then(
      result => {
        setSuccess(true);
        setError(false);
        SubmitForm();
      },
      error => {
        setError(true);
        setSuccess(false);
      }
    );
  };

  const SubmitForm: () => void = () => {
    const formElement: HTMLFormElement | null = document.getElementById(
      'form'
    ) as HTMLFormElement | null;

    if (formElement) {
      formElement.reset();
    }
  };

  return (
    <form id="form" ref={formRef} onSubmit={sendEmail} className="mt-10 flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          name="name"
          placeholder={input.name}
          required
          className="pr-12"
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={input.email}
          required
          className="pr-12"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder={input.message} className="pr-12" name="message" required />
        <MessageSquare className="absolute right-6 top-4" size={20} />
      </div>
      {/* checkbox and button */}
      <div className="flex flex-col items-start justify-between gap-y-4 sm:flex-row">
        {/* checkbox */}
        <div className="items-top flex space-x-2">
          <Checkbox id="terms" required />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {checkbox.acceptTerms}
            </label>
            <p className="text-xs text-muted-foreground">
              {checkbox.beforeLink}
              <Link
                href={checkbox.linkTerms.href}
                className="underline hover:text-primary focus:text-primary"
              >
                {checkbox.linkTerms.name}
              </Link>
            </p>
          </div>
        </div>
        {/* button */}
        <Button className="flex max-w-[166px] items-center gap-x-1">
          {button.name}
          <ArrowRightIcon size={20} />
        </Button>
        {/* errors */}
      </div>

      {error && <p className="text-red-500">{errorText}</p>}
      {success && <p className="text-green-500">{successText}</p>}
    </form>
  );
};

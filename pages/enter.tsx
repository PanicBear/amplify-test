import { useUserContext } from '@context/index';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

interface EnterForm {
  email: string;
  password: string;
}

const Enter: NextPage = () => {
  const { register, handleSubmit } = useForm<EnterForm>();
  const { login, isLoading } = useUserContext();

  const onValid = (validForm: EnterForm) => {
    if (isLoading) return;
    login(validForm);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register('email', { required: true })} type="email" />
      <input {...register('password', { required: true })} type="password" />
      <input type="submit" />
    </form>
  );
};

export default Enter;

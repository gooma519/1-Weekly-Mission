import Image from 'next/image';
import eyeOnImg from '@/public/assets/icons/eye-on.svg';
import eyeOffImg from '@/public/assets/icons/eye-off.svg';
import { ChangeEvent, FocusEvent, MouseEvent } from 'react';

interface Props {
  id: string;
  name: string;
  eyeShow: boolean;
  eyeOpen?: boolean;
  inputValue: { [key: string]: string };
  validation: { [key: string]: boolean | null };
  onEyeClick?: () => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function SignInput({
  id,
  name,
  eyeShow,
  onEyeClick,
  eyeOpen,
  inputValue,
  onInputChange,
  onInputBlur,
  validation,
}: Props) {
  const borderColor =
    validation[id] === null || validation[id] ? 'border-gray20' : 'border-red';

  return (
    <div className='flex flex-col w-full'>
      <label className='text-[0.75rem] mb-3' htmlFor={name}>
        {name}
      </label>
      <div
        className={`${borderColor} flex justify-between w-full px-[1.125rem] py-[0.9375rem] bg-white rounded-lg border-[1px] border-solid focus-within:border-primary`}
      >
        <input
          className='w-11/12 leading-6'
          type={name === '이메일' || eyeOpen ? 'text' : 'password'}
          id={id}
          placeholder='내용을 입력해주세요'
          value={inputValue.id}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        {eyeShow && (
          <button type='button' onClick={onEyeClick}>
            <Image src={eyeOpen ? eyeOnImg : eyeOffImg} alt='비밀번호 보이기' />
          </button>
        )}
      </div>
      <div className='text-red text-[0.875rem] mt-[0.375rem] h-6'></div>
    </div>
  );
}

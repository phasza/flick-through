import { XCircleIcon } from '@heroicons/react/24/solid';
import React, { type ReactElement, type ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children?: ReactNode;
  isLoading: boolean;
  error: unknown | null;
}

const DetailsModal = ({ children, isLoading, error }: Props): ReactElement => {
  const navigate = useNavigate();

  const modalContent = useCallback((): ReactNode => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error !== null) {
      return <p>{JSON.stringify(error)}</p>;
    }

    return children;
  }, [isLoading, error, children]);

  return (
    <div className='fixed z-20 h-full max-w-7xl overflow-hidden overflow-y-scroll rounded-md bg-stone-900 bg-opacity-90 text-white'>
      <div className='relative'>
        {modalContent()}
        <button
          className='absolute top-5 right-5'
          onClick={() => {
            navigate(-1);
          }}
        >
          <XCircleIcon className='h-10 w-10' />
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;

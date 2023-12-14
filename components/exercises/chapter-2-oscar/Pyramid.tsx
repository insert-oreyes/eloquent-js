import CustomButton from '@/components/CustomButton';
import { useState } from 'react';

interface PyramidProps {
  rows: number;
}

const getPyramid = (rows: number) => {
  let pyramid = '';
  for (let i = 1; i <= rows; i++) {
    pyramid += '🌝'.repeat(i) + '\n';
  }
  return pyramid;
};

const Pyramid = ({ rows }: PyramidProps) => {
  const [state, setState] = useState(rows);

  return (
    <div className='flex flex-row'>
      <div className='flex flex-1 flex-col'>
        {getPyramid(state)
          .split('\n')
          .map((row, i) => {
            return (
              <div data-testid='pyramid-row' key={i}>
                {row}
              </div>
            );
          })}
      </div>
      <div className='flex flex-1 flex-col items-center justify-center gap-2'>
        {state < 8 && (
          <>
            <CustomButton
              title='Add a row'
              btnType='button'
              containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
              handleClick={() =>
                setState((prevState) =>
                  prevState === 8 ? prevState : prevState + 1
                )
              }
            />

            <CustomButton
              title='Remove a row'
              btnType='button'
              containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
              handleClick={() =>
                setState((prevState) =>
                  prevState === 0 ? prevState : prevState - 1
                )
              }
            />
          </>
        )}

        {state === 8 && (
          <>
            <>
              <CustomButton
                title='Start over?'
                btnType='button'
                containerStyles='text-white rounded-full bg-[#B2980B] min-w-[150px] max-h-[48px]'
                handleClick={() =>
                  setState((prevState) => {
                    return (prevState = 0);
                  })
                }
              />
              <span className=' mt-2 gap-2 text-center text-[14px] font-semibold leading-[17px] text-red-600'>
                Max rows reached!
              </span>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Pyramid;

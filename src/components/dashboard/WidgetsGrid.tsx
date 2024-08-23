'use client';

import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { IoWatchOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count);

  const icon = <IoWatchOutline size={30} className='text-blue-500'/>;

  return (
    <div className="flex flex-wrap-p-2">
      <SimpleWidget
        title={count.toString()}
        label='Contador'
        subTitle='Productos en carrito'
        icon= {icon}
        href='/dashboard/counter'
       />
    </div>
  );
};


import BarChart from './BarChart';
import { useEffect, useState } from 'react';
import UseloacalStorage from '../Hooks/UseloacalStorage';

const PageRead = () => {
  const { localData } = UseloacalStorage();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const readBooksList = localData.filter(item => item.listType === 'reading');
    setReadBooks(readBooksList);
  }, [localData]);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-24">
      <BarChart data={readBooks} />
    </div>
  );
};

export default PageRead;





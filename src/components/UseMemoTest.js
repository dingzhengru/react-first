import { useState, useMemo } from 'react';

function UseMemoTest() {
  const [number, setNumber] = useState(1);

  const computedNumber = useMemo(() => {
    return number * 2;
  }, [number]);

  return (
    <div>
      <p>
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        number * 2 = {computedNumber}
      </p>
    </div>
  );
}

export default UseMemoTest;

import React, { useEffect, useState } from "react";
import Router from 'next/router';

const CustomAnswer = () => {
  const [result, setResult] = useState([]);

  const query = Router?.query;

  useEffect(() => {
    if (!result?.length) {
      const id = query?.id || "";
      setResult(JSON.parse(localStorage.getItem(`${id}`) as string));
    }
  });

  return (
    <React.Fragment>
      {result
        ? result.map((item) => {
            return <p>{item}</p>;
          })
        : `No se encontraron resultados para el ID: ${query?.id}`}
    </React.Fragment>
  );
};

export default CustomAnswer;

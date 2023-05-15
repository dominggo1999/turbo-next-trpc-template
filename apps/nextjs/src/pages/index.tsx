import React, { useRef, useState, type FormEvent } from "react";
import { api } from "utils";

const Home = () => {
  const formItem = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("Hello");

  const { isLoading, data, error } = api.hello.hello.useQuery(
    {
      name: value,
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setValue(formItem.current?.value ?? "");
  };

  return (
    <div className="mx-auto max-w-[200px]">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {!error && !isLoading && <p>{data?.message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black"
          ref={formItem}
          type="text"
          name="test"
        />
      </form>
    </div>
  );
};

export default Home;

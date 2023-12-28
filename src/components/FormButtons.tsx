import { Dispatch, SetStateAction } from "react";

type Props = {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

export function BackButtons({ tab, setTab }: Props) {
  return (
    <>
      {tab === 2 ? (
        <button onClick={() => setTab(1)}>Back</button>
      ) : tab === 3 ? (
        <button onClick={() => setTab(2)}>Back</button>
      ) : tab === 4 ? (
        <button onClick={() => setTab(3)}>Back</button>
      ) : null}
    </>
  );
}

export function NextButtons({ tab, setTab }: Props) {
  return (
    <>
      {tab === 1 ? (
        <button onClick={() => setTab(2)}>Next</button>
      ) : tab === 2 ? (
        <button onClick={() => setTab(3)}>Next</button>
      ) : tab === 3 ? (
        <button onClick={() => setTab(4)}>Next</button>
      ) : (
        <button type="submit">Reserve Table</button>
      )}
    </>
  );
}

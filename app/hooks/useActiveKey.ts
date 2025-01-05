import { atom, useAtom } from "jotai";

export const activeKeyAtom = atom<string>("total");

export const useActiveKey = () => {
  const [activeKey, setActiveKey] = useAtom(activeKeyAtom);

  return { activeKey, setActiveKey };
};

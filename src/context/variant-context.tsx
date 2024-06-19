import React, {
  createContext,
  useState,
  useCallback,
  type FC,
  type ReactNode,
  useMemo,
} from 'react';

import type { DefineVariantObject, Variants } from '../types';

interface IMusicProviderProps {
  children: ReactNode;
}

export interface IVariantContext {
  defineVariant: ({ component, name, props }: DefineVariantObject) => void;
  variants: Variants;
}

export const VariantContext = createContext<IVariantContext | undefined>(
  undefined
);

export const VariantProvider: FC<IMusicProviderProps> = ({ children }) => {
  const [variants, setVariants] = useState<Variants>({});

  const defineVariant = useCallback(
    ({ component, name, props }: DefineVariantObject) => {
      setVariants((prevVariants) => ({
        ...prevVariants,
        [component]: { ...[component], [name]: props },
      }));
    },
    []
  );

  const contextValue = useMemo(
    () => ({ defineVariant, variants }),
    [defineVariant, variants]
  );

  return (
    <VariantContext.Provider value={contextValue}>
      {children}
    </VariantContext.Provider>
  );
};

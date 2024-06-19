import { useContext } from 'react';

import {
  type IVariantContext,
  VariantContext,
} from '../context/variant-context';

export const useVariant = (): IVariantContext => {
  const context = useContext(VariantContext);
  if (!context) {
    throw new Error('useVariant must be used within a VariantProvider');
  }
  return context;
};

import type { ReactNode } from 'react';
import React from 'react';
import type { ISheet } from '@theatre/core';
export declare const useCurrentSheet: () => ISheet | undefined;
declare const SheetProvider: React.FC<{
    sheet: ISheet;
    children: ReactNode;
}>;
export default SheetProvider;
//# sourceMappingURL=SheetProvider.d.ts.map
import type { OrbitControlsImpl } from './OrbitControls';
import type { MutableRefObject } from 'react';
import React from 'react';
import type { ISheet } from '@theatre/core';
export default function useSnapshotEditorCamera(snapshotEditorSheet: ISheet, paneId: string): [
    node: React.ReactNode,
    orbitControlsRef: MutableRefObject<OrbitControlsImpl | null>
];
//# sourceMappingURL=useSnapshotEditorCamera.d.ts.map
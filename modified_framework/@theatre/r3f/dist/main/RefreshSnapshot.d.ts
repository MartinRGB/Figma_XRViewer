import React from 'react';
/**
 * Putting this element in a suspense tree makes sure the snapshot editor
 * gets refreshed once the tree renders.
 *
 * Alternatively you can use {@link refreshSnapshot}
 *
 * @example
 * Usage
 * ```jsx
 * <Suspense fallback={null}>
 *  <RefreshSnapshot />
 *  <Model url={sceneGLB} />
 * </Suspense>
 * ```
 */
declare const RefreshSnapshot: React.FC<{}>;
export default RefreshSnapshot;
//# sourceMappingURL=RefreshSnapshot.d.ts.map
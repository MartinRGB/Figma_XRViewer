import type { MutableRefObject } from 'react';
/**
 * Combines useRef() and useState().
 *
 * @example
 * Usage:
 * ```ts
 * const [ref, val] = useRefAndState<HTMLDivElement | null>(null)
 *
 * useEffect(() => {
 *   val.addEventListener(...)
 * }, [val])
 *
 * return <div ref={ref}></div>
 * ```
 */
export default function useRefAndState<T>(initialValue: T): [ref: MutableRefObject<T>, state: T];
//# sourceMappingURL=useRefAndState.d.ts.map
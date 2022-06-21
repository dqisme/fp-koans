import {assert, assertEquals} from "https://deno.land/std@0.144.0/testing/asserts.ts";

Deno.test('true should be true', () => {
    assert(true);
});

Deno.test('currying', () => {
    const add = (augend: number, addend: number) => augend + addend;
    const currying = (func: Function, ...args: Iterable<unknown>[]): Function => {
        if (args.length === func.length) {
            return func(...args);
        }
        return (current: Iterable<unknown>) => {
            return currying(func, ...args, current)
        }
    };
    const curryingAdd = currying(add);
    assertEquals(curryingAdd(1)(1), 2, 'one plus one equals two');
});
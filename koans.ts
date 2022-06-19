import { assert, assertEquals } from "https://deno.land/std@0.144.0/testing/asserts.ts";

Deno.test('true should be true', () => {
    assert(true);
});

Deno.test('currying', () => {
    const add = (augend: number, addend: number) => augend + addend;
    const currying = (func: Function): Function => {
        // TODO
    };
    const curryingAdd = currying(add);
    assertEquals(curryingAdd(1)(1), 2, 'one plus one equals two');
});
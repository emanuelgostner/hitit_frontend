/**
 * @vitest-environment happy-dom
 */

import { mount } from '@vue/test-utils'
import RoutineCard from '../components/app/RoutineCard.vue'
import { describe, expect, test } from 'vitest'
const routine = {
    "id": 1234,
    "title": "Testtitle",
    "creator": "Testuser",
    "intervals": []
}
describe("routine.vue", () => {
    test('initial', () => {
        expect(routine).toBeDefined()
    })
    test("renders the correct style for error", () => {
        const wrapper = mount(RoutineCard, {
            props: { routine },
        });
        // expect(wrapper.classes()).toEqual(
        //     expect.arrayContaining(["items-center"])
        // );
        expect(wrapper.classes()).toContain("items-center")
    });
});

import { dayTotalSelector } from "./totalSelector";


test("", () => {
    expect(dayTotalSelector([{hour: 0, minute: 0},
        {hour: 4, minute: 30},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0},
        {hour: 0, minute: 0}])).toEqual(
            {hour:4, minute:30}
        )
})
import {pad} from './FormatUtil'

test('pad a number under 10', () => {
    for(let i = 0; i < 10; i++){
        // console.log(i, "->", pad(i))
        expect(pad(i)).toEqual("0"+i)
        expect(pad(i, "00", 2)).toEqual("0"+i)
    }

})

test('pad a number over 10', () => {
    for(let i = 10; i < 100; i++){
        // console.log(i, "->", pad(i))
        expect(pad(i)).toEqual(""+i)
        expect(pad(i, "00", 2)).toEqual(""+i)
    }

})
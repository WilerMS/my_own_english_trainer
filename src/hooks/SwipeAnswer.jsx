import {useState} from 'react'

const SwipeAnswer = () => {

    const [firstTouch, setFirstTouch] = useState(0)
    const [currentRightTouch, setCurrentRightTouch] = useState(-100)
    const [currentLeftTouch, setCurrentLeftTouch] = useState(-100)
    const [classHiddenLeft, setclassHiddenLeft] = useState('')
    const [classHiddenRight, setclassHiddenRight] = useState('')
    const {innerWidth: width} = window

    const touchStart = (e) => setFirstTouch(e.touches[0].clientX)

    const touchMove = (e) => {
        if (firstTouch <= width / 2) {
            if (firstTouch <= e.touches[0].clientX) {
                //-100 + (e.touches[0].clientX / width) * 100 - (firstTouch / width) * 100
                let numerator = - width + e.touches[0].clientX - firstTouch;
                setCurrentLeftTouch(100 * (numerator) / width)
            }
        } else {
            if (firstTouch > e.touches[0].clientX) {
                //-(e.touches[0].clientX / width) * 100 - ((width - firstTouch) / width) * 100
                let numerator = firstTouch - width - e.touches[0].clientX;
                setCurrentRightTouch(100 * (numerator) / width)
            }
        }
    }

    const touchEnd = (e) => {

        let passed = false;

        if (firstTouch <= width / 2) {
            passed = e.changedTouches[0].clientX >= (firstTouch + width * .25);
            if (passed) {
                setclassHiddenLeft('hidden')
                setCurrentLeftTouch(0)
                setTimeout(() => setCurrentLeftTouch(-100), 300);
                setTimeout(() => setclassHiddenLeft(''), 600); 
            } else {
                setclassHiddenLeft('hidden')
                setCurrentLeftTouch(-100)
                setTimeout(() => setclassHiddenLeft(''), 100); 
            }
        } else {
            passed = e.changedTouches[0].clientX <= (firstTouch - width * .25);
            if (passed) {
                setclassHiddenRight('hidden')
                setCurrentRightTouch(0)
                setTimeout(() => setCurrentRightTouch(-100), 300);
                setTimeout(() => setclassHiddenRight(''), 600);
            } else {
                setclassHiddenRight('hidden')
                setCurrentRightTouch(-100)
                setTimeout(() => setclassHiddenRight(''), 100);
            }
        }

        return passed;    
    }

    return { classHiddenLeft, classHiddenRight, currentRightTouch, currentLeftTouch, firstTouch, touchStart, touchMove, touchEnd};
}

export default SwipeAnswer;
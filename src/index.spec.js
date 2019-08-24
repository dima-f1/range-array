import { expect } from 'chai';
import { describe, it } from 'mocha';
import { check, gen } from 'mocha-testcheck';
import { spy, assert as sinonAssert} from 'sinon';

import rangeArray from './';



describe('rangeArray', () => {
    const noop = () => {};
    const fn = (val) => val;

    it('should return an array', check(
        gen.oneOf([ gen.intWithin(-10, 10), gen.undefined ]),
        gen.oneOf([ gen.intWithin(-10, 20), gen.undefined ]),
        gen.oneOf([ gen.intWithin(-5, 5), gen.undefined ]),
        gen.oneOf([ noop, gen.undefined ]),
        (start, end, step, fn) => {

            const result = rangeArray(start, end, step, fn);
            expect(result).to.be.an('array');
        }
    ));

    it('should return an empty array if "end" param is undefined', () => {
        expect(rangeArray(1)).to.be.an('array').that.is.empty;
    });

    it('should return an empty array if "step" param is less than 0', () => {
        expect(rangeArray(1, 10, -1)).to.be.an('array').that.is.empty;
    });

    it('should return an array of numbers from 1 to 10', () => {
        const expectedResult = [1,2,3,4,5,6,7,8,9,10];
        expect(rangeArray(1, 10)).to.eql(expectedResult);
        expect(rangeArray(undefined, 10, 1)).to.eql(expectedResult);
        expect(rangeArray(1, 10, 1, fn)).to.eql(expectedResult);
    });

    it('should return an array of numbers from -5 to 5', () => {
        const expectedResult = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
        expect(rangeArray(-5, 5)).to.eql(expectedResult);
    });

    it('should return an array with correct length', check(
        gen.oneOf([ gen.intWithin(-10, 10), gen.undefined ]),
        gen.oneOf([ gen.intWithin(-10, 20), gen.undefined ]),
        gen.oneOf([ gen.intWithin(-1, 5), gen.undefined ]),
        gen.oneOf([ fn, gen.undefined ]),
        (start, end, step, fn) => {

            const result = rangeArray(start, end, step, fn);
            const _step = step === undefined ? 1 : step;
            const _start = start === undefined ? 1 : start;
            const startEndRange = Math.abs(end - _start);
            let length = Math.ceil(startEndRange / _step);

            if (end === undefined || _step <= 0 || _start > end ) {
                length = 0;
            } else if (startEndRange % _step === 0) {
                length += 1;
            }

            expect(result).to.have.length(length);
        }
    ));

    it('should return an array with numbers from 0 to 10 with step equal 2', () => {
        const expectedResult = [0,2,4,6,8,10];
        expect(rangeArray(0, 10, 2)).to.eql(expectedResult);
        expect(rangeArray(0, 10, 2, fn)).to.eql(expectedResult);
    });


    it('should call callback on each array item', check(
        gen.oneOf([ gen.intWithin(-10, 10), gen.undefined ]),
        gen.oneOf([ gen.intWithin(-10, 20), gen.undefined ]),
        gen.oneOf([ gen.intWithin(-1, 5), gen.undefined ]),
        (start, end, step) => {

            const callback = spy();
            const result = rangeArray(start, end, step, callback);
            sinonAssert.callCount(callback, result.length)
        }
    ));
});

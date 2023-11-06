import {describe, it, expect} from 'vitest';

describe('test', () => {
    it('should work', () => {
        expect(document.createElement('p')).not.toBeInTheDocument();
    });
});

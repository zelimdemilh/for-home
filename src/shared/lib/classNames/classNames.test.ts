import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(
            classNames(
                'someClass',
                {},
                [],
            ),
        ).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
    test('with active mods class', () => {
        const expected = 'someClass class1';
        expect(classNames(
            'someClass',
            {
                class1: true,
                class2: false,
            },
            [],
        )).toBe(expected);
    });
});

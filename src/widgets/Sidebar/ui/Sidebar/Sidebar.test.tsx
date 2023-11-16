import { fireEvent, render, screen } from '@testing-library/react';
import RenderWithTranslation from 'shared/lib/test/renderWithTranslation/ui/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('test render', () => {
        RenderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        RenderWithTranslation(<Sidebar />);
        const btn = screen.getByTestId('button-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

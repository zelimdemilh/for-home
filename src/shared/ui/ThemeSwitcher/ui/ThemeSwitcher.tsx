import { useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import IconDark from 'shared/assets/icons/theme-dark.svg';
import IconLight from 'shared/assets/icons/theme-light.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={() => toggleTheme()}
            theme={ThemeButton.CLEAR}
        >
            { theme === Theme.DARK ? <IconDark /> : <IconLight />}
        </Button>
    );
};

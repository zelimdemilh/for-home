import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export const ErrorButton = () => {
    const [error, setError] = useState<boolean>(false);
    const onThrow = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const { t } = useTranslation();
    return (
        <Button onClick={() => onThrow()}>
            {t('ошибка')}
        </Button>
    );
};

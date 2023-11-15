import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundary';

function MainPage() {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная страница')}
            <ErrorButton />
        </div>
    );
}

export default MainPage;

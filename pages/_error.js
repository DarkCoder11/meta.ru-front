import React from 'react';
import { ErrorContainer } from 'containers/index';
import { HelmetWrapper, MainLayout } from 'layouts/index';

const ErrorPage = () => (
  <HelmetWrapper
    title="Страница не найдена"
    metaDescription="Страница не найдена. Попробуйте воспользоваться поиском или перейдите на главную страницу."
  >
    <MainLayout>
      <ErrorContainer />
    </MainLayout>
  </HelmetWrapper>
);

export default ErrorPage;

'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '16px',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)'
    }
});
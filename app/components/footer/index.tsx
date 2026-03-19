import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@rescui/ui-contexts';

export function Footer() {
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        Promise.all([
            import('@jetbrains/kotlin-web-site-ui/out/components/footer/index.js'),
            import('@jetbrains/kotlin-web-site-ui/out/components/footer/index.css'),
        ]).then(([m]) => {
            setComponent(() => m.default);
        });
    }, []);

    if (!Component) return null;
    return (
        <ThemeProvider theme="dark">
            <Component />
        </ThemeProvider>
    );
}

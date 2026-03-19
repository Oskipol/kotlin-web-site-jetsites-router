// app/components/header/index.tsx
import React, { useEffect, useState } from "react";

export function Header() {
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        Promise.all([
            import('@jetbrains/kotlin-web-site-ui/out/components/header/index.js'),
            import('@jetbrains/kotlin-web-site-ui/out/components/header/index.css'),
        ]).then(([m]) => {
            setComponent(() => m.default);
        });
    }, []);

    if (!Component) return null;
    return (
        <Component
            onSearchClick={() => {}}
            searchConfig={{
                searchAlgoliaId: '',
                searchAlgoliaKey: '',
                searchIndexName: '',
            }}
        />
    );
}
import React from 'react'

export function authenticate(JSXa, JSXb, ...children) {
    return (
        <>
            <JSXa></JSXa>
                { ...children }
            <JSXb></JSXb>
        </>
    )
}

export const authenticatePred = JSXa => JSXb => predicateFn => {
    return predicateFn(JSXa, JSXb) ? JSXa : JSXb
}


import React from 'react';

export default function Profile() {
    return (
        <div className="some-class">
            Profile page
            {[...new Array(1200)]
                .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
        </div>
    )
}
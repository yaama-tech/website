import React, { type ReactElement } from 'react';

interface AudioPlayerProps {
    src: string;
    title?: string;
}

export default function AudioPlayer({ src, title = 'Listen to this article:' }: AudioPlayerProps): ReactElement {
    return (
        <div style={{
            marginBottom: '2rem',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            padding: '1rem',
            borderRadius: '8px',
        }}>
            <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                {title}
            </div>
            <audio
                controls
                style={{
                    width: '100%',
                    height: '40px',
                }}
            >
                <source
                    src={src}
                    type="audio/mpeg"
                />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
} 
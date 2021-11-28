import * as React from 'react';
import { IProjectDisplay } from '../index';

export const ProjectDisplay: React.FC<IProjectDisplay> = ({ color }) => {
    return (
        <div style={{ color: color }}>
            Projects
        </div>
    );
}

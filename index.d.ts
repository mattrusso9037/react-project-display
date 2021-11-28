import * as React from 'react';

export interface IProjectDisplay {
    color: string;
}

declare const ProjectDisplay: React.FC<IProjectDisplay>;

declare module 'react-project_display' {
}

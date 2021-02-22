import React from 'react';
import {MenuIcon} from './MenuIcon';
import {CommentIcon} from './CommentIcon';
import {ShareIcon} from './ShareIcon';
import {HideIcon} from './HideIcon';
import {SaveIcon} from './SaveIcon';
import {ComplainIcon} from './ComplainIcon';
import {AnonIcon} from './AnonIcon';

const Icons: { [key in keyof typeof EIcons]: any } = {
    menu: MenuIcon,
    comment: CommentIcon,
    share: ShareIcon,
    hide: HideIcon,
    save: SaveIcon,
    complain: ComplainIcon,
    anon: AnonIcon,
}

interface IIconProps {
    size: number,
    name: EIcons,
}

export enum EIcons {
    menu = 'menu',
    comment = 'comment',
    share = 'share',
    hide = 'hide',
    save = 'save',
    complain = 'complain',
    anon = 'anon',
}

export function Icon({size, name}: IIconProps) {
    const IconName = Icons[name];
    return <IconName size={size}/>;
}
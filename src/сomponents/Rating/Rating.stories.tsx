import React from 'react';
import {Rating} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyStars =()=> <Rating value={0} onClick={x=>x} />
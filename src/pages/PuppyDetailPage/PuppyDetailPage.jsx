import React from 'react';
import { useLocation } from 'react-router-dom';
import PuppyCard from '../../components/PuppyCard/PuppyCard';

export default function PuppyDetailPage(props) {
    const {
        state: { puppyItem },
    } = useLocation();

    return (
        <>
            <h1>Puppy Details</h1>
            <PuppyCard puppy={puppyItem} key={puppyItem._id} />
        </>
    )
} 
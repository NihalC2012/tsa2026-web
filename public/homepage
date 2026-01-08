import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import HeroSection from '../components/home/HeroSection';
import QuickStats from '../components/home/QuickStats';
import HistoryPreview from '../components/home/HistoryPreview';
import FeaturedStories from '../components/home/FeaturedStories';
import LandmarksPreview from '../components/home/LandmarksPreview';

export default function Home() {
    const { data: events } = useQuery({
        queryKey: ['events-preview'],
        queryFn: () => base44.entities.HistoricalEvent.list('year', 6),
        initialData: [],
    });

    const { data: stories } = useQuery({
        queryKey: ['stories-preview'],
        queryFn: () => base44.entities.Story.list('-created_date', 4),
        initialData: [],
    });

    const { data: landmarks } = useQuery({
        queryKey: ['landmarks-preview'],
        queryFn: () => base44.entities.Landmark.list('-created_date', 4),
        initialData: [],
    });

    return (
        <div className="min-h-screen">
            <HeroSection />
            <QuickStats />
            <HistoryPreview events={events} />
            <FeaturedStories stories={stories} />
            <LandmarksPreview landmarks={landmarks} />
        </div>
    );
}

/**
 * Platform 2 Ad Formats Configuration
 * Defines multipliers for various advertisement formats.
 */

export const PLATFORM2_AD_FORMATS = [
    {
        id: "mobile-leaderboard",
        name: "Mobile Leaderboard",
        multiplier: 1.0,
        icon: "📱",
        description: "320 x 50"
    },
    {
        id: "leaderboard-footer",
        name: "Leaderboard Footer",
        multiplier: 1.2,
        icon: "🏁",
        description: "728 x 90"
    },
    {
        id: "skyscraper-left",
        name: "Skyscraper Left",
        multiplier: 1.5,
        icon: "🏙️",
        description: "160 x 600"
    },
    {
        id: "skyscraper-right",
        name: "Skyscraper Right",
        multiplier: 1.5,
        icon: "🏙️",
        description: "160 x 600"
    },
    {
        id: "leaderboard-header",
        name: "Leaderboard Header",
        multiplier: 1.8,
        icon: "🔝",
        description: "728 x 90"
    },
    {
        id: "medium-rectangle",
        name: "Medium Rectangle",
        multiplier: 2.0,
        icon: "🟦",
        description: "300 x 250"
    },
    {
        id: "large-rectangle",
        name: "Large Rectangle",
        multiplier: 2.2,
        icon: "⬛",
        description: "336 x 280"
    },
    {
        id: "video-15s",
        name: "Video 15s",
        multiplier: 5.0,
        icon: "🎬",
        description: "Short form engagement"
    },
    {
        id: "video-30s",
        name: "Video 30s",
        multiplier: 6.0,
        icon: "🎥",
        description: "Standard video spot"
    },
    {
        id: "video-45s",
        name: "Video 45s",
        multiplier: 7.0,
        icon: "🎞️",
        description: "Extended story"
    },
    {
        id: "video-60s",
        name: "Video 60s",
        multiplier: 8.0,
        icon: "📽️",
        description: "Comprehensive feature"
    }
];

export const PLATFORM2_EMAIL_NEWSLETTER = {
    baseCpm: {
        min: 15,
        max: 20
    }
};

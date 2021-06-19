export const INITIAL_APP_TITLE: string = "Bored?";
export const FINAL_APP_TITLE: string = "Fun! isn't it?";
export const INITIAL_BUTTON_LABEL: string = "Lets do something about it!";

export type ActivityImage = {
    url: string;
    alt: string;
}

export const images: Record<string, ActivityImage> = {
    "education": {
        url: "books-emoji.png",
        alt: "books-emoji"
    },
    "recreational": {
        url: "recreational-emoji.png",
        alt: "recreational-emoji"
    },
    "social": {
        url: "dancing-emoji.png",
        alt: "dancing-emoji"
    },
    "diy": {
        url: "diy-emoji.png",
        alt: "diy-emoji"
    },
    "charity": {
        url: "halo-emoji.png",
        alt: "halo-emoji"
    },
    "cooking": {
        url: "chef-emoji.png",
        alt: "chef-emoji"
    },
    "relaxation": {
        url: "yoga-emoji.png",
        alt: "yoga-emoji"
    },
    "music": {
        url: "music-emoji.png",
        alt: "music-emoji"
    },
    "busywork": {
        url: "busywork-emoji.png",
        alt: "busywork-emoji"
    }
}


export const themeImages: Record<string, ActivityImage> = {
    "dark": {
        url: "moon-emoji.png",
        alt: "moon-emoji"
    },
    "light": {
        url: "sun-emoji.png",
        alt: "sun-emoji"
    }
}


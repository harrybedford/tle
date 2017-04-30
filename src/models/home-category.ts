class HomeStory {
    id: number;
    title: string;
    image: string;
    date: string;
}

export class HomeCategory {
    name: string;
    stories: Array<HomeStory>
}

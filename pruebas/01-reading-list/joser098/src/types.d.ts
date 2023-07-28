export interface BooksState {
    libraryStorage: {
        availableBooks: Book[],
        readingList: Book[] 
    },
    genres: string[],
    filters: {
        pages: string,
        genre: string,
        title: string
    },
    tabState: boolean
}

export interface Author {
    name:string;
    otherBooks:string[];
  }

export interface Book {
    title: string,
    pages: number, 
    genre: string,
    cover: string,
    synopsis: string,
    year: number,
    ISBN:string,
    author: Author
}
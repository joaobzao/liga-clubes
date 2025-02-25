export interface Member {
    id?: string; // Optional because Firestore auto-generates IDs
    name: string;
    paid: boolean;
  }
// Define the structure of each member in the Discord widget data
export interface Member {
  id: string; // Unique identifier for each member
  username: string; // Username of the member
  avatar_url: string; // URL of the member's avatar
}

// Define the structure of the entire widget data object
export interface WidgetData {
  presence_count: number; // Number of online members
  members: Member[]; // List of members who are online
}

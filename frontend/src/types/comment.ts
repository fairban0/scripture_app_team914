export interface Comment {
  comment_id: number; // Updated field name
  user_id: number;
  scripture_id: number; // Added scripture_id
  content: string; // Renamed from annotation to content
  timestamp: string; // ISO string format for DateTime
}

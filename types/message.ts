export interface MessagePayload {
    room?: string;
    to?: string;
    from: string;
    content: string;
    timestamp: number;
  }
export interface Token {
    token_id: number;
    charity_id: number;
    token: string;
    created_by: number;
    expired_by: number | null;
    is_expired: boolean;
    is_deleted: boolean;
    created_on: Date;
    expired_on: Date | null;
  }
  
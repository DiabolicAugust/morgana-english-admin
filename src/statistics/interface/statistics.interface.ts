import { Document } from 'mongoose';

export default interface Statistics {
  overall: number;
  unused: number;
  warning: string | null;
  next: Document | null;
}

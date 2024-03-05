import { type MemberType } from '@component/types/user';

interface PostItemType {
  id: number;
  writer: MemberType;
  createdAt: string;
  title: string;
  content: string;
  isLightning: boolean;
  status: string;
  preferHeadCount: number;
  headCount: number;
  hits: number;
}

import { type MemberType } from '@component/types/user';
import { type ImageType } from '@component/types/image';

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

interface PostType {
  post_id: number;
  title: string;
  hits: number;
  postDate: Date;
  writer: MemberType;
  lightning: boolean;
  firstDay: Date;
  lastDay: Date;
  likes: number;
  tags: string[];
  members: MemberType[];
  preference: PreferenceType;
  content: string;
  images: ImageType[];
  category: CategoryType;
}

interface CategoryType {
  id: number;
  name: string;
}

interface PreferenceType {
  gender: string;
  minAge: number;
  maxAge: number;
  preferHeadCount: number;
}

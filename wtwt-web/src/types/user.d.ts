import { type ImageType } from '@component/types/image';

interface MemberType {
  id: number;
  nickname: string;
  profile: ImageType | null;
}

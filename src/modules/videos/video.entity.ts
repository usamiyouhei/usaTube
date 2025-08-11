import { User } from "../users/user.entity";

export class Video {
  id!: string;
  title!: string;
  url!: string;
  thumbnailUrl!: string;
  description?: string;
  isPublic!: boolean;
  user!: User;
  createdAt!: Date;

  constructor(data: Video) {
    Object.assign(this, data)
    this.createdAt = new Date(data.createdAt);
    if(data.user != null)
      this.user = new User(data.user)
  }
}
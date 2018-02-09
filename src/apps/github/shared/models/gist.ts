import { User } from './user';
export interface Gist {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: any;
  public: boolean;
  created_at: Date;
  updated_at: Date;
  description: string;
  comments: number;
  user?: User;
  comments_url: string;
  owner: Owner;
  truncated: boolean;
}
export interface Owner {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

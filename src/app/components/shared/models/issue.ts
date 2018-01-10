interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscription_url: string;
  type: string;
  url: string;
}

interface Label {
  color: string;
  default: boolean;
  id: number;
  name: string;
  url: string;
}

export interface Issue {
  assignee: User;
  assignees: User[];
  author_association: string;
  closed_at: string;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: Label[];
  labels_url: string;
  locked: boolean;
  milestone: string;
  number: number;
  repository_url: string;
  state: string;
  title: string;
  updated_at: string;
  url: string;
  user: User;
}
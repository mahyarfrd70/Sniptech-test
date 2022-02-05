export type IssueType = 'organization' | 'repository';
export type State = 'open' | 'closed' | 'all';
export type Sort = 'created' | 'updated' | 'comments';

export interface SearchFormValues {
  issueType: IssueType;
  repository: string;
  state: State;
  sort: Sort;
}

export interface ChangeFieldAction {
  name: string;
  value: string | IssueType | State | Sort;
}

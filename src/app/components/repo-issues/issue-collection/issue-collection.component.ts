import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Issue } from '../../../models/issue';

@Component({
  selector: 'app-issue-collection',
  templateUrl: './issue-collection.component.html',
  styleUrls: ['./issue-collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCollectionComponent {
  @Input() repoIssueCollection: Issue[];
}
import { Component, Input } from '@angular/core';
import { Repo } from '@app/components/shared/models';

@Component({
  selector: 'repo-search-collection',
  templateUrl: './search-collection.component.html',
  styleUrls: ['./search-collection.component.css']
})
export class SearchCollectionComponent {
  @Input() repoCollection: Repo[];
}
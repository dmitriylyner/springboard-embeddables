import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'springboard-embeddables';
  searchStore = (window as any).getSearchStore();

  searchaheadConfig = {
    limit: 5,
    fieldList: ['document.title', 'document.thumbnailImage']
  };

  breadcrumbsConfig = {
    facetLabels: {
      type: 'Document Type',
      datasourceLabels: 'Category'
    }
  };

  facetsConfig = {
    facets: ['type', 'datasourceLabels'],
    facetLabels: {
      type: 'Document Type',
      datasourceLabels: 'Category'
    }
  };

  resultsConfig = {
    fieldList: ['document.title', 'document.url', 'document.description', 'document.thumbnailImage']
  };

  async query(event: any) {
    const detail = event.detail;
    console.log(detail);

    // Example demonstrating the public search store
    const queryResponse = await this.searchStore.search({ query: detail.query })
    console.log('Query response', queryResponse);

  }
}

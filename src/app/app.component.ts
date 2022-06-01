import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'springboard-embeddables';
  searchStore = (window as any).getSearchStore();

  async query(event: any) {
    const detail = event.detail;
    console.log(detail);

    // Example demonstrating the public search store
    const queryResponse = await this.searchStore.search({ query: detail.query })
    console.log('Query response', queryResponse);

  }
}

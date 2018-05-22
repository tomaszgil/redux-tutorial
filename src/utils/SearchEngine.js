import VisibilityFilters from './VisibilityFilters';
import { PokemonTypes } from './Pokemon';

export default class SearchEngine {
  constructor(entry) {
    this.entry = entry;
    this.criteria = {
      searchQuery: '',
      sort: {
        key: 'id',
        direction: 'ascending'
      },
      typeFilters: PokemonTypes,
      visibilityFilter: VisibilityFilters.SHOW_ALL
    };
  }

  _sort(arr) {
    let multiplier = 1;
    const key = this.criteria.sort.key;

    switch(this.criteria.sort.direction) {
      case 'ascending': multiplier = 1; break;
      case 'descending': multiplier = -1; break;
      default: break;
    }

    return arr.sort((a, b) => {
      if (a[key] < b[key]) return -1 * multiplier;
      if (a[key] === b[key]) return 0;
      if (a[key] > b[key]) return multiplier;

      return 0;
    });
  }

  _processSearchQuery(arr) {
    const template = this.criteria.searchQuery.toLowerCase();
    const fields = ['name', 'type', 'id'];

    return arr.filter(pokemon => {
      for (let field of fields)
        if (pokemon[field].toString().toLowerCase().includes(template))
          return true;

      return false;
    });
  }

  _applyFilters(arr) {
    let result = [];
    switch (this.criteria.visibilityFilter) {
      case VisibilityFilters.SHOW_ALL: result = arr; break;
      case VisibilityFilters.ONLY_COLLECTED: result = arr.filter(el => el.collected); break;
      case VisibilityFilters.NOT_COLLECTED: result = arr.filter(el => !el.collected); break;
      default: result = arr; break;
    }

    return arr.filter(pokemon => this.criteria.typeFilters.includes(pokemon.type));
  }

  apply(criteria) {
    if (criteria) this.criteria = criteria;

    let result = this._applyFilters(this.entry);
    result = this._processSearchQuery(result);
    result = this._sort(result);

    return result;
  }
}
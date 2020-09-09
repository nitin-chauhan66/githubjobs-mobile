import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export default   SearchbarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Find jobs"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
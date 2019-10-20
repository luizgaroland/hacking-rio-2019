import React from 'react';
import {SearchBar} from 'react-native-elements';

class SearchB extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            search: "",
        }
    }
    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return <SearchBar
            round={ true }
            containerStyle={{borderTopWidth:0,borderBottomWidth:0, margin:0, backgroundColor: '#fff'}}
            inputStyle={{margin:0}}
            lightTheme
            placeholder="Localizar posto mais proximo"
            onChangeText={this.updateSearch}
            value={search}
        />
    }
}

export { SearchB };

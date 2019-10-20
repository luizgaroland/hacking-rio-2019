import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Map from './Map';
import Compras from './Compras';
import Pagamento from './Pagamento';
import Menu from './Menu';
import Confirmacao from './Confirmacao';
const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Map: {screen: Map},
    Compras: {screen: Compras},
    Pagamento: {screen: Pagamento},
    Menu: {screen: Menu},
    Confirmacao: {screen: Confirmacao},
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }});

const App = createAppContainer(MainNavigator);

export default App;

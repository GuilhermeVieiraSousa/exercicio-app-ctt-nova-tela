import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Cores from  '../constantes/Cores';

import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import NovoContatoTela from "../telas/NovoContatoTela";

import BotaoCabecalho from '../componentes/BotaoCabecalho'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="ListaDeContatos"
            screenOptions={{
                headerStyle:{backgroundColor: Cores.primary},
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen 
                name="ListaDeContatos" 
                component={ListaDeContatosTela}
                options={(props) => ({
                    headerRight: () => <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                        <Item 
                            title="Adicionar"
                            iconName="md-add"
                            onPress={() => { props.navigation.navigate('NovoContato') }}
                        />
                    </HeaderButtons>
                })}
            />
            <Stack.Screen name="NovoContato" component={NovoContatoTela}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container
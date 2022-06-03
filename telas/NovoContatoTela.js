import { 
    Button,
    ScrollView,
    StyleSheet, 
    Text, 
    TextInput,
    View
} from 'react-native'
  
import {
    React,
    useState
} from 'react'

import Cores from '../constantes/Cores'
import { FlatList } from 'react-native-web'

const NovoContatoTela = (props) => {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [contatos, setContatos] = useState([])
    const [contador, setContador] = useState(0)
    
    const capturarNome = (lembreteDigitado) => {
      setNome(lembreteDigitado)
    }
  
    const capturarTelefone = (telefoneDigitado) => {
      setTelefone(telefoneDigitado)
    }
  
    const adicionarContato = () => {
      setContatos(contatos => {
        setContador(contador + 1)
  
        let aux = [{key: contador.toString(), valueNome: nome, valueTelefone: telefone}, ...contatos]
        setNome('')
        setTelefone('')
        return aux
      })
    }

    return (
            <ScrollView> 
                <View style={styles.form}>
                    <Text style={styles.titulo}>Novo Contato</Text> 
                    <View>
                        <TextInput 
                            placeholder='Nome...'
                            style={styles.TextInput}
                            onChangeText={capturarNome}
                            value={nome}
                        />
                        <TextInput 
                            placeholder='Telefone...'
                            style={styles.TextInput}
                            onChangeText={capturarTelefone}
                            value={telefone}
                        />
                        <Button
                            disabled={nome.length === 0}
                            title="Salvar Contato" 
                            color={Cores.primary} 
                            onPress={adicionarContato} 
                        />
                    </View>
                    <FlatList 
                        data={contatos}
                        renderItem={contato => (
                        <View
                            style={styles.itemNaLista}>
                            <Text>Contato</Text> 
                            <Text>Nome: {contato.item.valueNome}</Text>
                            <Text>Telefone: {contato.item.valueTelefone}</Text>
                        </View>
                        )}
                    />
                    </View>
            </ScrollView> 
    )
}

export default NovoContatoTela

const styles = StyleSheet.create({
    form:{
      margin: 40,
    },
    titulo:{
      fontSize: 18,
      marginBottom: 8
    },
    TextInput: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        marginBottom: 4, 
        padding: 12
      },
    itemNaLista: {
        padding: 12,
        backgroundColor: Cores.primary,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8
    }
  })
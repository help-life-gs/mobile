import { FlatList } from "react-native";
import ContactItem from "../ContactItem";

export default function ContactList() {

  const conversas = [
    {
      id: 1,
      participantes: {
        doutor: 'Dr. Smith',
        usuario: 'Victor',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Olá Victor, tudo bem? ffffffffffdasdasdasdasdajhdakjhsdashdkjashdkajshdkajshdajsdhajsdhakdhjsjashdjkahsdkkajdshakjsdhasdhkjffffffffffffffffffffffffffffffffff' },
        { id: 2, remetente: 'usuario', texto: 'Estou me sentindo mal!' },
        { id: 3, remetente: 'usuario', texto: 'Teste' },
        { id: 4, remetente: 'doutor', texto: 'Oi Alice, como posso ajudar?' }
      ],
    },
    {
      id: 2,
      participantes: {
        doutor: 'Dr. Johnson',
        usuario: 'Alice',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Oi Alice, como posso ajudar?' },
        { id: 2, remetente: 'usuario', texto: 'Não estou me sentindo bem também.' },
      ],
    },
    {
      id: 3,
      participantes: {
        doutor: 'Dr. Garcia',
        usuario: 'Lucas',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Olá Lucas, como você está?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com febre e dor de cabeça.' },
      ],
    },
    {
      id: 4,
      participantes: {
        doutor: 'Dr. Silva',
        usuario: 'Maria',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Oi Maria, como posso ajudar você hoje?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com sintomas de gripe.' },
      ],
    },
    {
      id: 5,
      participantes: {
        doutor: 'Dr. Oliveira',
        usuario: 'Pedro',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Oi Pedro, como posso ajudar você hoje?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com dor no corpo.' },
      ],
    },
    {
      id: 6,
      participantes: {
        doutor: 'Dr. Santos',
        usuario: 'Ana',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Olá Ana, tudo bem?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com tosse persistente.' },
      ],
    },
    {
      id: 7,
      participantes: {
        doutor: 'Dr. Pereira',
        usuario: 'Carlos',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Oi Carlos, como posso ajudar?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com falta de ar.' },
      ],
    },
    {
      id: 8,
      participantes: {
        doutor: 'Dr. Martins',
        usuario: 'Julia',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Olá Julia, como você está se sentindo?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com dor de garganta.' },
      ],
    },
    {
      id: 9,
      participantes: {
        doutor: 'Dr. Sousa',
        usuario: 'Gabriel',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Oi Gabriel, o que está acontecendo?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com dor nos olhos.' },
      ],
    },
    {
      id: 10,
      participantes: {
        doutor: 'Dr. Lima',
        usuario: 'Larissa',
      },
      mensagens: [
        { id: 1, remetente: 'doutor', texto: 'Olá Larissa, como posso ajudar?' },
        { id: 2, remetente: 'usuario', texto: 'Estou com calafrios e febre alta.' },
      ],
    },
  ]; 

    return (
        <FlatList
            data={conversas}
            renderItem={({ item }) => <ContactItem {...item}/>}
            keyExtractor={item => item.id}
        />
    )
}
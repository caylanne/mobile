# Telas Fitness — React Native + Expo

Projeto independente com as duas telas iniciais das referências:
- Aluno — Início
- Instrutor — Início

## Requisitos
- Node.js instalado
- Expo Go no celular (ou emulador Android)

## Como executar

1. Extraia o ZIP e abra a pasta `telas_fitness_expo` no VS Code.
2. No terminal, execute:

```bash
npm install
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context @expo/vector-icons
npx expo start
```

3. Leia o QR Code com o Expo Go ou pressione `a` para abrir no emulador Android.

## Navegação de demonstração
O projeto inicia na tela do aluno. Toque no círculo com as iniciais `NA` para abrir a tela do instrutor. Na tela do instrutor, toque em `PM` para voltar à tela do aluno.

Essa troca de perfil é apenas um atalho para testar as duas rotas. Na integração final, a equipe pode ligar essas rotas ao fluxo de login/perfil do projeto principal.

## Componentes reutilizáveis
- `Card.js`
- `BottomMenu.js`
- `SectionTitle.js`
- `StatCard.js`

## Integração com o projeto da equipe
Copie a pasta `src` para o projeto principal e registre as telas `AlunoInicio` e `InstrutorInicio` no navegador já existente. Se o projeto principal já tiver `NavigationContainer`, **não crie outro**: adicione somente as rotas ao navegador existente.

Os dados exibidos (nomes, datas, frequência e estatísticas) são exemplos estáticos para reproduzir o layout. O botão de iniciar treino e o botão de criar/editar treino são demonstrações, sem backend.

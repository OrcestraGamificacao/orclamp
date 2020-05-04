  ![Logo](https://user-images.githubusercontent.com/37190005/76413416-26691b00-6374-11ea-8aff-04508b2b53fa.png)


# Sobre o projeto
Repositório para criação da versão beta do aplicativo do CodeCamp da Orc'estra Gamificação
# Padrão de Commits
1. Devem ser escritos em inglês na forma infinitiva, e ainda conter uma breve decrição.
2. A issue em questão deve ser citada no commit, para isso, basta adicionar #<numero_da_issue>.
Exemplo:
```
#5 Create a new document
```
Para que o Git reconheça o caractere "#" é necessário dar o seguinte comando:
```
git config --local core.commentChar '!'
```
# Padrão de Branches
1. O nome da branch deve ser abstraído do nome da história de usuário a qual se refere.
2. A branch deverá possuir o padrão CamelCase x-NomeDaBranch, em que o 'x' é o número da história de usuário.
Exemplo:
```
3-CriarLogin
```

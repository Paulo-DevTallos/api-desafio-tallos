fluxo da aplicação:

Serviço para a criação de usuários e empresas:

fluxo de usuário:
Consiste na criação de um CRUD de usuário

* Criar um novo usuário - Regra de negocio:
  * Verificar campos obrigatórios para realizar o cadastro de um novo usuário
  * Verificar existência do usuário
  * Realizar criptografia de senha - biblioteca de criptografia
  * Realizar validaçao de senha
    * ver a possibilidade de comparar com com o bcrypt ou com uma condição else / if
  * Persistir usuário

  erros:
  * Se por validação de campos: status(422) message: 'Entidade não processada'
  * Se por existencia: status(409) message: 'usuário já existe'
  * Se por processamento da requisição: status(400) message: 'falha na requisição'

  Obs: Para a criação do usuário é necessário vincula-lo à uma empresa -- ver regra de negócio --

  Casos de teste:
  * Verificação do usuário ja existente
  * Verificação de campos vázios e preenchidos
  * Verificação de senha
  * Preenchimento dos campos obrigatórios
  * Verificação de recursos únicos (id, email)

* Listar todos os usuários
* Atualizar um usuário
* Remover um usuário




Modelagem de dados:

schema de usuário: - ver dados que podem ser adicionados ao schema
  * name: string (required)
  * email: string (required)
  * password: string (required)
  * company: ObjectId


schema de companies
  * name: string
  * cnpj: string
  * address: Object
  * employees: ObjectId[]

# Geração de training datasets para sistemas conversacionais de busca sobre RDF datasets
Este trabalho foi realizado para a disciplina de Projeto Final de Programação - PUC-Rio.
- O que vai ser o projeto?

Um programa responsável por gerar training datasets para preparar sistemas conversacionais para operar sobre em RDF datasets.
- A que tipo de uso se destina? Em que contextos? Visando que usuários?

Para treinar um sistema conversacional de busca, são necessários datasets de treino que forneçam enunciados suficientes para treinar os classificadores. Porém, existem problemas a respeito desses datasets, tais como são poucos os disponíveis publicamente, ou não possuem uma grande quantidade de enunciados, ou são criados e rotulados manualmente por especialistas. Desse modo, o objetivo dessa aplicação é gerar de forma automática esses datasets para treinamento e ela se destina a acadêmicos ou companhias que visam implementar seus sistemas conversacionais de busca e treiná-los utilizando o dataset gerado automaticamente nesse trabalho em cima de um dataset rdf especifico, no caso o [Mondial database](https://www.dbis.informatik.uni-goettingen.de/Mondial/) em RDF, mas somente para os dados que se referem a Europa.

# Requisitos e Instalação
- Para ver os requisitos e como instalar o backend clique [aqui](backend/README.md)
- Para ver os requisitos e como instalar o frontend clique [aqui](frontend/README.md)

# Documentação
A documentação está disponível na pasta Docs/.

Notas e Manual
Demais arquivos como Manual do Usuário, descrição de tecnologias e organização da arquitetura encontram no arquivo PDF do projeto de programação final. Disponível [aqui](docs/Projeto_de_Programacao_Eduardo_Nascimento.pdf).

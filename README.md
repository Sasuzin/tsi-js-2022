# tsi-js-2022
(Material de aula) Repositório criado para a materia de Script para Web.

 -------------- Para criar uma chave pelo git --------------

    Comando 1: ssh-keygen.
    Depois só dar enter e prestar bastante atenção, pois ele vai
    pedir para você criar uma senha e confirmar.

    Comando 2: cat .ssh/id_rsa.pub (para pegar o conteudo que tem dentro do repositorio da chave publica).

    Comando 3: eval$(ssh-agent)  (serve para gerenciar as chaves, porém só é necessario usar esse comando no windows)

    Comando 4: ssh-add ~/.ssh/id_rsa (serve para adicionar a identidade, e após vc dar esse comando
    ele vai pedir pra vc digitar a senha criada anteriormente.)

    Comando 5: cat ~/.ssh/id_rsa.pub ( Mesmo comando que o terceiro, serve para pegar a chave publica)

    Após isso, vá no github e adicione a chave publica.

    Comando 6: ssh -T git@github.com (para permitir no github.)

---------------------------------------------------------------------------------------------------------------------------------------------
                    Outros comandos do Git!

     ls -lah (para saber repositorios ocultos.)
     pwd (para saber o repositorio que estou.)
     
     rm -rf + o nome do repositorio (Para apagar um repositorio na sua maquina.)

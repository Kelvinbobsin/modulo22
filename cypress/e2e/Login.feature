Feature: autenticação

    Scenario Outline: Login do usuário  
        Given que estou na pagina inicial
        When eu faço o Login
        Then o nome do usuário deve aparecer na pagina de perfil
        Examples:
            | email |                 | senha |
            | cliente@ebac.art.br     |GD*peToHNJ1#c$sgk08EaYJQ|
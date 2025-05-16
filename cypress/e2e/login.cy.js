describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки "Забыли пароль"
         cy.get('#mail').type('german@dolnikov.ru'); //найти поле логин ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль ввести правильный пароль
         cy.get('#loginButton').click(); // найти кнопку "войти", нажать на нее
         cy.get('#messageHeader').should('be.visible'); // проверка, что текст с успешной авторизацией виден польз-лю
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка, что элемент содержит нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик и он виден для польз-ля 
 
     })

     it('Проверка логики восстановление пароля', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки "Забыли пароль"
        cy.get('#forgotEmailButton').click(); // найти кнопку "забыли пароль", нажать на нее
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели почту
        cy.get('#restoreEmailButton').click(); // нажали кнопку "отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка, что элемент содержит нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик и он виден для польз-ля 
    })
 
       it('Верный логин и неверный пароль', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // проверка цвета кнопки "Забыли пароль"
         cy.get('#mail').type('german@dolnikov.ru'); //найти поле логин ввести правильный логин
         cy.get('#pass').type('iLoveqastudio2'); // найти поле пароль ввести НЕ правильный пароль
         cy.get('#loginButton').click(); // найти кнопку "войти", нажать на нее
         cy.get('#messageHeader').should('be.visible'); // проверка, что текст с НЕ успешной авторизацией виден польз-лю
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка, что элемент содержит нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик и он виден для польз-ля
     })
 
     it('Не верный логин и верный пароль', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // проверка цвета кнопки "Забыли пароль"
        cy.get('#mail').type('alex@green.ru'); //найти поле логин ввести НЕ правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль ввести правильный пароль
        cy.get('#loginButton').click(); // найти кнопку "войти", нажать на нее
        cy.get('#messageHeader').should('be.visible'); // проверка, что текст с НЕ успешной авторизацией виден польз-лю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка, что элемент содержит нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик и он виден для польз-ля
    })

       it('Валидация на наличие @', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки "Забыли пароль"
         cy.get('#mail').type('germandolnikov.ru'); //найти поле логин ввести НЕ правильный логин - без @
         cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль ввести правильный пароль
         cy.get('#loginButton').click(); // найти кнопку "войти", нажать на нее
         cy.get('#messageHeader').should('be.visible'); // проверка, что текст с проблемой валидации виден польз-лю
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверка, что элемент содержит нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик и он виден для польз-ля
     })

     it('Приведение к строчным буквам в логине', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки "Забыли пароль"
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //найти поле логин ввести GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль ввести правильный пароль
        cy.get('#loginButton').click(); // найти кнопку "войти", нажать на нее
        cy.get('#messageHeader').should('be.visible'); // проверка, что текст с проблемой валидации виден польз-лю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка, что элемент содержит нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик и он виден для польз-ля
    })

 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 
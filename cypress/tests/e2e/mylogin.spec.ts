describe("Login com sucesso", () => {
  it("Deve fazer login com um usuário válido", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[name='username']").type("Dina20");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();

    // Verifica se a URL foi alterada para o dashboard
    cy.url().should("include", "http://localhost:3000/");

    // Verifica se o usuário está logado pelo nome exibido na tela
    cy.get("[data-test='sidenav-username']").should("contain", "Dina20");
  });
});

describe("Tentar fazer login com credenciais inválidas", () => {
  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[name='username']").type("Alves74");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();

    // Verifica se a mensagem de erro é exibida corretamente
    cy.get("[role='alert']").should("be.visible").and("contain", "Username or password is invalid");

    // Verifica se a URL não mudou, indicando que o login falhou
    cy.url().should("eq", "http://localhost:3000/signin");
  });
});

describe("Registro de novo usuário com sucesso", () => {
  it("Deve registrar um novo usuário com informações válidas", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[href='/signup']").click();
    cy.get("[name='firstName']").type("Francisca");
    cy.get("[name='lastName']").type("Marcia");
    cy.get("[name='username']").type("marcyamart");
    cy.get("[name='password']").type("12345678");
    cy.get("[name='confirmPassword']").type("12345678");
    cy.get(".SignUpForm-submit").click();
    
    // Verifica se o usuário foi redirecionado para a tela de login após o cadastro
    cy.url().should("include", "/signin");
  });
});

describe("Tentar registrar um novo usuário com informações incompletas", () => {
  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[href='/signup']").click();
    cy.get("[name='firstName']").type("Ester");
    cy.get("[name='lastName']").type("Barros");
    cy.get("[name='username']").type("esterfarias16");
    cy.get("[name='password']").click();
    cy.get("[name='confirmPassword']").click();

    // Verifica se a mensagem de erro do campo password está visível
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");

    // Verifica se o botão de envio está desabilitado
    cy.get(".SignUpForm-submit").should("be.disabled");
  });
});
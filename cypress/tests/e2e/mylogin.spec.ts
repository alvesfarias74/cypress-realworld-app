describe("Login com sucesso", () => {
  it("Deve fazer login com um usuário válido", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[name='username']").type("Dina20");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();
  });
});

describe("Tentar fazer login com credenciais inválidas", () => {
  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[name='username']").type("Alves74");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit("http://localhost:3000/");
    cy.get("[href='/signup']").click();
    cy.get("[name='firstName']").type("Francisco");
    cy.get("[name='lastName']").type("Alves");
    cy.get("[name='username']").type("alvesfarias74");
    cy.get("[name='password']").type("12345678");
    cy.get("[name='confirmPassword']").type("12345678");
    cy.get(".SignUpForm-submit").click();
    
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit("http://localhost:3000/");
    cy.get("[href='/signup']").click();
    cy.get("[name='firstName']").type("Ester");
    cy.get("[name='lastName']").type("Barros");
    cy.get("[name='username']").type("esterfarias16");
    cy.get("[name='password']").click();
    cy.get("[name='confirmPassword']").click();
    cy.get("#password-helper-text");    
  });
});
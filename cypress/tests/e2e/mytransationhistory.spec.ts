describe("Visualizar histórico de transações com sucesso", () => {
  it("Deve exibir o histórico de transações de um usuário corretamente", () => {
    cy.visit("http://localhost:3000/");

    // Inserindo credenciais
    cy.get("[name='username']").type("Arvilla_Hegmann");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();

    // Interceptando requisição de transações
    cy.intercept("GET", "/api/transactions").as("getTransactions");

    // Verificando se o corpo da página não está vazio
    cy.get("body").should("not.be.empty");

    // Validando a visibilidade do botão e clicando nele
    cy.get("[data-test='nav-personal-tab']").should("be.visible").click();

    // Garantindo que a lista de transações foi carregada
    cy.get("[data-test='transaction-list']").should("have.length.greaterThan", 0);
  });
});

describe("Tentar visualizar o histórico sem transações anteriores", () => {
  it("Deve exibir uma mensagem indicando que o usuário não possui transações anteriores", () => {
    cy.visit("http://localhost:3000/");

    // Inserindo credenciais
    cy.get("[name='username']").type("41v35");
    cy.get("[name='password']").type("ester204");
    cy.get("[type='submit']").click();

    // Interceptando requisição de transações
    cy.intercept("GET", "/api/transactions").as("getTransactions");

    // Verificando se o corpo da página não está vazio
    cy.get("body").should("not.be.empty");

    // Validando a visibilidade do botão e clicando nele
    cy.get("[data-test='nav-personal-tab']").should("be.visible").click();

    // Verificando se há transações ou exibindo mensagem de aviso
    cy.get("[data-test='empty-list-header']")
      .should("be.visible")
      .should("have.text", "No Transactions");
  });
});

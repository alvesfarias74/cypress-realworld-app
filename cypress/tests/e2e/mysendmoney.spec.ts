describe("Enviar dinheiro com saldo suficiente", () => {
  it("Deve enviar dinheiro com sucesso", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[name='username']").type("Reyes.Osinski");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();
    cy.get(".MuiButton-colorInherit").click();
    cy.get("#user-list-search-input").type("Ted Parisian");
    cy.contains(".MuiListItemText-root > .MuiTypography-body1", "Ted Parisian").click();
    cy.get("[name='amount']").type(750);
    cy.get("[placeholder='Add a note']").type("Payment of Alimony");
    cy.get("[data-test='transaction-create-submit-payment']").click();
  });
});

describe("Enviar dinheiro com saldo insuficiente", () => {
  it.skip("Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[name='username']").type("Dina20");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();
    cy.get(".MuiButton-colorInherit").click();
    cy.get("#user-list-search-input").type("Ted Parisian");
    cy.contains(".MuiListItemText-root > .MuiTypography-body1", "Ted Parisian").click();
    cy.get("[name='amount']").type(2000);
    cy.get("[placeholder='Add a note']").type("Legal expenses and costs");
    cy.get("[data-test='transaction-create-submit-payment']").click();
  });
});
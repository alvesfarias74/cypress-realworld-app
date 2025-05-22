describe("Login com sucesso", () => {
  it("Deve fazer login com um usuário válido", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[name='username']").type("Arvilla_Hegmann");
    cy.get("[name='password']").type("s3cret");
    cy.get("[type='submit']").click();
  });
});

describe("Enviar dinheiro com saldo suficiente", () => {
  it("Deve enviar dinheiro com sucesso", () => {
    cy.get("[data-test='nav-top-new-transaction']").click();
  });
});
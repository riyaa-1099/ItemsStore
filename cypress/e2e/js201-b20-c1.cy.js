import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it(`Add mobilesData is working properly`, () => {
      cy.visit(url);
      cy.get("#mobile_name").type("samsung-1");
      cy.get("#mobile_brand").type("Samsung");
      cy.get("#mobile_price").type(1200);
      cy.get("#mobile_image").type(
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
      );
      cy.get("#mobile_form").submit();

      cy.get("#mobile_name").type("samsung-2");
      cy.get("#mobile_brand").type("Samsung");
      cy.get("#mobile_price").type(12000);
      cy.get("#mobile_image").type(
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
      );

      cy.get("#mobile_form").submit();

      cy.get("#mobile_name").type("samsung-3");
      cy.get("#mobile_brand").type("Samsung");
      cy.get("#mobile_price").type(8000);
      cy.get("#mobile_image").type(
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
      );

      cy.get("#mobile_form").submit();

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Add mobilesData is working properly in local storage-2`, () => {
      cy.visit(url);
      var items = JSON.parse(localStorage.getItem("mobile_data"));
      expect(items.length).to.equal(3);
      expect(items[0].name.trim()).to.equal("samsung-1");
      expect(items[0].brand.trim()).to.equal("Samsung");
      expect(items[0].price).to.equal(1200);
      expect(items[0].image.trim()).to.equal(
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
      );

      cy.get("#mobile_name").type("samsung-4");
      cy.get("#mobile_brand").type("Samsung");
      cy.get("#mobile_price").type(20000);
      cy.get("#mobile_image").type(
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
      );

      cy.get("#mobile_form").submit();

      //acc_score = generateScore(acc_score, score, 1);
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Show mobiles data is working properly on DOM", () => {
      cy.visit(url);
      cy.get("#store").click();

      cy.location("pathname").should("eq", "/store.html");
      cy.get(".mobile").should("have.length", 4);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("remove mobiles data is working properly on local storage)", () => {
      cy.visit(url + "store.html");

      var items = JSON.parse(localStorage.getItem("mobile_data"));
      expect(items.length).to.eq(4);

      cy.get(".mobile")
        .eq(0)
        .children("button")
        .click()
        .then(() => {
          var items = JSON.parse(localStorage.getItem("mobile_data"));
          expect(items.length).to.equal(3);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`remove mobiles data is working properly on DOM`, () => {

      cy.get(".mobile")
      .eq(0)
      .children("button")
      .click()
      .then(() => {
        cy.get(".mobile").should("have.length", 2);
      });


      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Low to High sort mobiles by price  is working properly on DOM`, () => {
      cy.visit(url + "store.html");
      cy.get("#sort_lth").click();

      cy.get("#mobile_list > div").eq(0).contains("8000");
      cy.get("#mobile_list > div").eq(1).contains("20000");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`High to Low sort mobiles by price is working properly on DOM`, () => {
      cy.visit(url + "store.html");
      cy.restoreLocalStorage();

      cy.get("#sort_htl").click();

      cy.get("#mobile_list > div").eq(0).contains("20000");
      cy.get("#mobile_list > div").eq(1).contains("8000");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});

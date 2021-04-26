class motorcyclePOMs {

    motorgear(){
        return cy.get(':nth-child(1) > .m-navigation-item__h > a')
    }

    moto_clothes(){
        return cy.get(':nth-child(1) > a > .m-navigation-sub-item__cat-name')
    }

    my_clothes(){
        return cy.get(':nth-child(42) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container > .m-product-card-info__title > span')
    }

    choose_size1(){
        return cy.get(':nth-child(1) > :nth-child(1) > p-select.ng-star-inserted > .m-select > .m-select__display',{timeot:3000})
    }

    my_size1(){
        return cy.get(':nth-child(1) > :nth-child(1) > p-select.ng-star-inserted > .m-select > .m-select__container > .m-select__items-wrapper > ul > :nth-child(1) > p-select-product-variation.ng-star-inserted > .a-product-variation')
    }  
    
    choose_size2(){
        return  cy.get(':nth-child(2) > :nth-child(1) > p-select.ng-star-inserted > .m-select > .m-select__display')
    }

    my_size2(){
        return cy.get('.m-select__items-wrapper > ul > :nth-child(3)')
    }

    add_to_basket(){
        return cy.get(':nth-child(2) > :nth-child(1) > p-button.ng-star-inserted > .m-button')
    }

    buy_request_processed(){
        return cy.get('.o-cart-process__added > p',{timeot:10000})
    }

    go_tobasket(){
        return cy.get('.o-cart-process__added > .a-textlink')
    }

    productinbasket(){
        return cy.get('p-product-line-items > :nth-child(1) > .m-checkout-list__items')
    }


    email(){
        return cy.get('#checkout-email')
    }

    mobilenumber(){
        return cy.get('#checkout-mobileNumber')
    }

    name(){
        return cy.get('#checkout-firstName')
    }

    surname(){
        return cy.get('#checkout-surname')
    }

    str_house(){
        return cy.get('#checkout-streetAndHouseNumber')
    }

    postcode(){
        return cy.get('#checkout-postCode')
    }

    city(){
        return cy.get('#checkout-city')
    }

    botomspam(){
        return cy.get('.m-slide-banner__close > .m-button')
    }

    conf_buy(){
        return cy.get('.m-checkout-finalize > p-button > .m-button')
    }


}

export default motorcyclePOMs
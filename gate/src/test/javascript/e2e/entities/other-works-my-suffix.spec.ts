import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('OtherWorks e2e test', () => {

    let navBarPage: NavBarPage;
    let otherWorksDialogPage: OtherWorksDialogPage;
    let otherWorksComponentsPage: OtherWorksComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load OtherWorks', () => {
        navBarPage.goToEntity('other-works-my-suffix');
        otherWorksComponentsPage = new OtherWorksComponentsPage();
        expect(otherWorksComponentsPage.getTitle())
            .toMatch(/gateApp.otherWorks.home.title/);

    });

    it('should load create OtherWorks dialog', () => {
        otherWorksComponentsPage.clickOnCreateButton();
        otherWorksDialogPage = new OtherWorksDialogPage();
        expect(otherWorksDialogPage.getModalTitle())
            .toMatch(/gateApp.otherWorks.home.createOrEditLabel/);
        otherWorksDialogPage.close();
    });

    it('should create and save OtherWorks', () => {
        otherWorksComponentsPage.clickOnCreateButton();
        otherWorksDialogPage.setDateInput(12310020012301);
        expect(otherWorksDialogPage.getDateInput()).toMatch('2001-12-31T02:30');
        otherWorksDialogPage.setReasonInput('reason');
        expect(otherWorksDialogPage.getReasonInput()).toMatch('reason');
        otherWorksDialogPage.setQtyInput('5');
        expect(otherWorksDialogPage.getQtyInput()).toMatch('5');
        otherWorksDialogPage.setDescriptonInput('descripton');
        expect(otherWorksDialogPage.getDescriptonInput()).toMatch('descripton');
        otherWorksDialogPage.setTempValInput('5');
        expect(otherWorksDialogPage.getTempValInput()).toMatch('5');
        otherWorksDialogPage.setTimestampInput('5');
        expect(otherWorksDialogPage.getTimestampInput()).toMatch('5');
        otherWorksDialogPage.save();
        expect(otherWorksDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class OtherWorksComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-other-works-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class OtherWorksDialogPage {
    modalTitle = element(by.css('h4#myOtherWorksLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    dateInput = element(by.css('input#field_date'));
    reasonInput = element(by.css('input#field_reason'));
    qtyInput = element(by.css('input#field_qty'));
    descriptonInput = element(by.css('input#field_descripton'));
    tempValInput = element(by.css('input#field_tempVal'));
    timestampInput = element(by.css('input#field_timestamp'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setDateInput = function(date) {
        this.dateInput.sendKeys(date);
    };

    getDateInput = function() {
        return this.dateInput.getAttribute('value');
    };

    setReasonInput = function(reason) {
        this.reasonInput.sendKeys(reason);
    };

    getReasonInput = function() {
        return this.reasonInput.getAttribute('value');
    };

    setQtyInput = function(qty) {
        this.qtyInput.sendKeys(qty);
    };

    getQtyInput = function() {
        return this.qtyInput.getAttribute('value');
    };

    setDescriptonInput = function(descripton) {
        this.descriptonInput.sendKeys(descripton);
    };

    getDescriptonInput = function() {
        return this.descriptonInput.getAttribute('value');
    };

    setTempValInput = function(tempVal) {
        this.tempValInput.sendKeys(tempVal);
    };

    getTempValInput = function() {
        return this.tempValInput.getAttribute('value');
    };

    setTimestampInput = function(timestamp) {
        this.timestampInput.sendKeys(timestamp);
    };

    getTimestampInput = function() {
        return this.timestampInput.getAttribute('value');
    };

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}

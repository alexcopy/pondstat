import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Chemicals e2e test', () => {

    let navBarPage: NavBarPage;
    let chemicalsDialogPage: ChemicalsDialogPage;
    let chemicalsComponentsPage: ChemicalsComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Chemicals', () => {
        navBarPage.goToEntity('chemicals-my-suffix');
        chemicalsComponentsPage = new ChemicalsComponentsPage();
        expect(chemicalsComponentsPage.getTitle())
            .toMatch(/gateApp.chemicals.home.title/);

    });

    it('should load create Chemicals dialog', () => {
        chemicalsComponentsPage.clickOnCreateButton();
        chemicalsDialogPage = new ChemicalsDialogPage();
        expect(chemicalsDialogPage.getModalTitle())
            .toMatch(/gateApp.chemicals.home.createOrEditLabel/);
        chemicalsDialogPage.close();
    });

    it('should create and save Chemicals', () => {
        chemicalsComponentsPage.clickOnCreateButton();
        chemicalsDialogPage.setDateInput(12310020012301);
        expect(chemicalsDialogPage.getDateInput()).toMatch('2001-12-31T02:30');
        chemicalsDialogPage.setQtyInput('5');
        expect(chemicalsDialogPage.getQtyInput()).toMatch('5');
        chemicalsDialogPage.setReasonInput('reason');
        expect(chemicalsDialogPage.getReasonInput()).toMatch('reason');
        chemicalsDialogPage.setTempValInput('5');
        expect(chemicalsDialogPage.getTempValInput()).toMatch('5');
        chemicalsDialogPage.setTimestampInput('5');
        expect(chemicalsDialogPage.getTimestampInput()).toMatch('5');
        chemicalsDialogPage.save();
        expect(chemicalsDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ChemicalsComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-chemicals-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ChemicalsDialogPage {
    modalTitle = element(by.css('h4#myChemicalsLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    dateInput = element(by.css('input#field_date'));
    qtyInput = element(by.css('input#field_qty'));
    reasonInput = element(by.css('input#field_reason'));
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

    setQtyInput = function(qty) {
        this.qtyInput.sendKeys(qty);
    };

    getQtyInput = function() {
        return this.qtyInput.getAttribute('value');
    };

    setReasonInput = function(reason) {
        this.reasonInput.sendKeys(reason);
    };

    getReasonInput = function() {
        return this.reasonInput.getAttribute('value');
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

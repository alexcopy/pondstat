import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('LiveStock e2e test', () => {

    let navBarPage: NavBarPage;
    let liveStockDialogPage: LiveStockDialogPage;
    let liveStockComponentsPage: LiveStockComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load LiveStocks', () => {
        navBarPage.goToEntity('live-stock-my-suffix');
        liveStockComponentsPage = new LiveStockComponentsPage();
        expect(liveStockComponentsPage.getTitle())
            .toMatch(/gateApp.liveStock.home.title/);

    });

    it('should load create LiveStock dialog', () => {
        liveStockComponentsPage.clickOnCreateButton();
        liveStockDialogPage = new LiveStockDialogPage();
        expect(liveStockDialogPage.getModalTitle())
            .toMatch(/gateApp.liveStock.home.createOrEditLabel/);
        liveStockDialogPage.close();
    });

    it('should create and save LiveStocks', () => {
        liveStockComponentsPage.clickOnCreateButton();
        liveStockDialogPage.setDateInput(12310020012301);
        expect(liveStockDialogPage.getDateInput()).toMatch('2001-12-31T02:30');
        liveStockDialogPage.reasonSelectLastOption();
        liveStockDialogPage.setDescriptionInput('description');
        expect(liveStockDialogPage.getDescriptionInput()).toMatch('description');
        liveStockDialogPage.setQtyInput('5');
        expect(liveStockDialogPage.getQtyInput()).toMatch('5');
        liveStockDialogPage.setTempValInput('5');
        expect(liveStockDialogPage.getTempValInput()).toMatch('5');
        liveStockDialogPage.setTimestampInput('5');
        expect(liveStockDialogPage.getTimestampInput()).toMatch('5');
        liveStockDialogPage.save();
        expect(liveStockDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class LiveStockComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-live-stock-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class LiveStockDialogPage {
    modalTitle = element(by.css('h4#myLiveStockLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    dateInput = element(by.css('input#field_date'));
    reasonSelect = element(by.css('select#field_reason'));
    descriptionInput = element(by.css('input#field_description'));
    qtyInput = element(by.css('input#field_qty'));
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

    setReasonSelect = function(reason) {
        this.reasonSelect.sendKeys(reason);
    };

    getReasonSelect = function() {
        return this.reasonSelect.element(by.css('option:checked')).getText();
    };

    reasonSelectLastOption = function() {
        this.reasonSelect.all(by.tagName('option')).last().click();
    };
    setDescriptionInput = function(description) {
        this.descriptionInput.sendKeys(description);
    };

    getDescriptionInput = function() {
        return this.descriptionInput.getAttribute('value');
    };

    setQtyInput = function(qty) {
        this.qtyInput.sendKeys(qty);
    };

    getQtyInput = function() {
        return this.qtyInput.getAttribute('value');
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

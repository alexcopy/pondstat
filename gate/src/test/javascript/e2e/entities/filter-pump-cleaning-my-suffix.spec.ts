import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('FilterPumpCleaning e2e test', () => {

    let navBarPage: NavBarPage;
    let filterPumpCleaningDialogPage: FilterPumpCleaningDialogPage;
    let filterPumpCleaningComponentsPage: FilterPumpCleaningComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load FilterPumpCleanings', () => {
        navBarPage.goToEntity('filter-pump-cleaning-my-suffix');
        filterPumpCleaningComponentsPage = new FilterPumpCleaningComponentsPage();
        expect(filterPumpCleaningComponentsPage.getTitle())
            .toMatch(/gateApp.filterPumpCleaning.home.title/);

    });

    it('should load create FilterPumpCleaning dialog', () => {
        filterPumpCleaningComponentsPage.clickOnCreateButton();
        filterPumpCleaningDialogPage = new FilterPumpCleaningDialogPage();
        expect(filterPumpCleaningDialogPage.getModalTitle())
            .toMatch(/gateApp.filterPumpCleaning.home.createOrEditLabel/);
        filterPumpCleaningDialogPage.close();
    });

    it('should create and save FilterPumpCleanings', () => {
        filterPumpCleaningComponentsPage.clickOnCreateButton();
        filterPumpCleaningDialogPage.setCleaningDateInput(12310020012301);
        expect(filterPumpCleaningDialogPage.getCleaningDateInput()).toMatch('2001-12-31T02:30');
        filterPumpCleaningDialogPage.setDescriptionInput('description');
        expect(filterPumpCleaningDialogPage.getDescriptionInput()).toMatch('description');
        filterPumpCleaningDialogPage.setTempValInput('5');
        expect(filterPumpCleaningDialogPage.getTempValInput()).toMatch('5');
        filterPumpCleaningDialogPage.setTimestampInput('5');
        expect(filterPumpCleaningDialogPage.getTimestampInput()).toMatch('5');
        filterPumpCleaningDialogPage.save();
        expect(filterPumpCleaningDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class FilterPumpCleaningComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-filter-pump-cleaning-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class FilterPumpCleaningDialogPage {
    modalTitle = element(by.css('h4#myFilterPumpCleaningLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    cleaningDateInput = element(by.css('input#field_cleaningDate'));
    descriptionInput = element(by.css('input#field_description'));
    tempValInput = element(by.css('input#field_tempVal'));
    timestampInput = element(by.css('input#field_timestamp'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setCleaningDateInput = function(cleaningDate) {
        this.cleaningDateInput.sendKeys(cleaningDate);
    };

    getCleaningDateInput = function() {
        return this.cleaningDateInput.getAttribute('value');
    };

    setDescriptionInput = function(description) {
        this.descriptionInput.sendKeys(description);
    };

    getDescriptionInput = function() {
        return this.descriptionInput.getAttribute('value');
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

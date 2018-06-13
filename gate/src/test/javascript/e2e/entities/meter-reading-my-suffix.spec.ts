import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('MeterReading e2e test', () => {

    let navBarPage: NavBarPage;
    let meterReadingDialogPage: MeterReadingDialogPage;
    let meterReadingComponentsPage: MeterReadingComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load MeterReadings', () => {
        navBarPage.goToEntity('meter-reading-my-suffix');
        meterReadingComponentsPage = new MeterReadingComponentsPage();
        expect(meterReadingComponentsPage.getTitle())
            .toMatch(/gateApp.meterReading.home.title/);

    });

    it('should load create MeterReading dialog', () => {
        meterReadingComponentsPage.clickOnCreateButton();
        meterReadingDialogPage = new MeterReadingDialogPage();
        expect(meterReadingDialogPage.getModalTitle())
            .toMatch(/gateApp.meterReading.home.createOrEditLabel/);
        meterReadingDialogPage.close();
    });

    it('should create and save MeterReadings', () => {
        meterReadingComponentsPage.clickOnCreateButton();
        meterReadingDialogPage.setReadingDateInput(12310020012301);
        expect(meterReadingDialogPage.getReadingDateInput()).toMatch('2001-12-31T02:30');
        meterReadingDialogPage.setDescriptionInput('description');
        expect(meterReadingDialogPage.getDescriptionInput()).toMatch('description');
        meterReadingDialogPage.setReadingInput('5');
        expect(meterReadingDialogPage.getReadingInput()).toMatch('5');
        meterReadingDialogPage.setTempValInput('5');
        expect(meterReadingDialogPage.getTempValInput()).toMatch('5');
        meterReadingDialogPage.save();
        expect(meterReadingDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class MeterReadingComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-meter-reading-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class MeterReadingDialogPage {
    modalTitle = element(by.css('h4#myMeterReadingLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    readingDateInput = element(by.css('input#field_readingDate'));
    descriptionInput = element(by.css('input#field_description'));
    readingInput = element(by.css('input#field_reading'));
    tempValInput = element(by.css('input#field_tempVal'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setReadingDateInput = function(readingDate) {
        this.readingDateInput.sendKeys(readingDate);
    };

    getReadingDateInput = function() {
        return this.readingDateInput.getAttribute('value');
    };

    setDescriptionInput = function(description) {
        this.descriptionInput.sendKeys(description);
    };

    getDescriptionInput = function() {
        return this.descriptionInput.getAttribute('value');
    };

    setReadingInput = function(reading) {
        this.readingInput.sendKeys(reading);
    };

    getReadingInput = function() {
        return this.readingInput.getAttribute('value');
    };

    setTempValInput = function(tempVal) {
        this.tempValInput.sendKeys(tempVal);
    };

    getTempValInput = function() {
        return this.tempValInput.getAttribute('value');
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

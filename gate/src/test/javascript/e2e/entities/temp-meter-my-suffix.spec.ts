import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('TempMeter e2e test', () => {

    let navBarPage: NavBarPage;
    let tempMeterDialogPage: TempMeterDialogPage;
    let tempMeterComponentsPage: TempMeterComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load TempMeters', () => {
        navBarPage.goToEntity('temp-meter-my-suffix');
        tempMeterComponentsPage = new TempMeterComponentsPage();
        expect(tempMeterComponentsPage.getTitle())
            .toMatch(/gateApp.tempMeter.home.title/);

    });

    it('should load create TempMeter dialog', () => {
        tempMeterComponentsPage.clickOnCreateButton();
        tempMeterDialogPage = new TempMeterDialogPage();
        expect(tempMeterDialogPage.getModalTitle())
            .toMatch(/gateApp.tempMeter.home.createOrEditLabel/);
        tempMeterDialogPage.close();
    });

    it('should create and save TempMeters', () => {
        tempMeterComponentsPage.clickOnCreateButton();
        tempMeterDialogPage.setReadingDateInput(12310020012301);
        expect(tempMeterDialogPage.getReadingDateInput()).toMatch('2001-12-31T02:30');
        tempMeterDialogPage.setTempValInput('5');
        expect(tempMeterDialogPage.getTempValInput()).toMatch('5');
        tempMeterDialogPage.setTimestampInput('5');
        expect(tempMeterDialogPage.getTimestampInput()).toMatch('5');
        tempMeterDialogPage.save();
        expect(tempMeterDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class TempMeterComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-temp-meter-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class TempMeterDialogPage {
    modalTitle = element(by.css('h4#myTempMeterLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    readingDateInput = element(by.css('input#field_readingDate'));
    tempValInput = element(by.css('input#field_tempVal'));
    timestampInput = element(by.css('input#field_timestamp'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setReadingDateInput = function(readingDate) {
        this.readingDateInput.sendKeys(readingDate);
    };

    getReadingDateInput = function() {
        return this.readingDateInput.getAttribute('value');
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

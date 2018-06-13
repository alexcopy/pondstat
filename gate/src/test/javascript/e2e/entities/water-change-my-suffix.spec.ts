import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('WaterChange e2e test', () => {

    let navBarPage: NavBarPage;
    let waterChangeDialogPage: WaterChangeDialogPage;
    let waterChangeComponentsPage: WaterChangeComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load WaterChanges', () => {
        navBarPage.goToEntity('water-change-my-suffix');
        waterChangeComponentsPage = new WaterChangeComponentsPage();
        expect(waterChangeComponentsPage.getTitle())
            .toMatch(/gateApp.waterChange.home.title/);

    });

    it('should load create WaterChange dialog', () => {
        waterChangeComponentsPage.clickOnCreateButton();
        waterChangeDialogPage = new WaterChangeDialogPage();
        expect(waterChangeDialogPage.getModalTitle())
            .toMatch(/gateApp.waterChange.home.createOrEditLabel/);
        waterChangeDialogPage.close();
    });

    it('should create and save WaterChanges', () => {
        waterChangeComponentsPage.clickOnCreateButton();
        waterChangeDialogPage.setChangeDateInput(12310020012301);
        expect(waterChangeDialogPage.getChangeDateInput()).toMatch('2001-12-31T02:30');
        waterChangeDialogPage.setDescriptionInput('description');
        expect(waterChangeDialogPage.getDescriptionInput()).toMatch('description');
        waterChangeDialogPage.setReadingBeforeInput('5');
        expect(waterChangeDialogPage.getReadingBeforeInput()).toMatch('5');
        waterChangeDialogPage.setReadingAfterInput('5');
        expect(waterChangeDialogPage.getReadingAfterInput()).toMatch('5');
        waterChangeDialogPage.setTempValInput('5');
        expect(waterChangeDialogPage.getTempValInput()).toMatch('5');
        waterChangeDialogPage.setTimestampInput('5');
        expect(waterChangeDialogPage.getTimestampInput()).toMatch('5');
        waterChangeDialogPage.save();
        expect(waterChangeDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class WaterChangeComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-water-change-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class WaterChangeDialogPage {
    modalTitle = element(by.css('h4#myWaterChangeLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    changeDateInput = element(by.css('input#field_changeDate'));
    descriptionInput = element(by.css('input#field_description'));
    readingBeforeInput = element(by.css('input#field_readingBefore'));
    readingAfterInput = element(by.css('input#field_readingAfter'));
    tempValInput = element(by.css('input#field_tempVal'));
    timestampInput = element(by.css('input#field_timestamp'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setChangeDateInput = function(changeDate) {
        this.changeDateInput.sendKeys(changeDate);
    };

    getChangeDateInput = function() {
        return this.changeDateInput.getAttribute('value');
    };

    setDescriptionInput = function(description) {
        this.descriptionInput.sendKeys(description);
    };

    getDescriptionInput = function() {
        return this.descriptionInput.getAttribute('value');
    };

    setReadingBeforeInput = function(readingBefore) {
        this.readingBeforeInput.sendKeys(readingBefore);
    };

    getReadingBeforeInput = function() {
        return this.readingBeforeInput.getAttribute('value');
    };

    setReadingAfterInput = function(readingAfter) {
        this.readingAfterInput.sendKeys(readingAfter);
    };

    getReadingAfterInput = function() {
        return this.readingAfterInput.getAttribute('value');
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

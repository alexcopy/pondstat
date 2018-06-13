import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Tank e2e test', () => {

    let navBarPage: NavBarPage;
    let tankDialogPage: TankDialogPage;
    let tankComponentsPage: TankComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Tanks', () => {
        navBarPage.goToEntity('tank-my-suffix');
        tankComponentsPage = new TankComponentsPage();
        expect(tankComponentsPage.getTitle())
            .toMatch(/gateApp.tank.home.title/);

    });

    it('should load create Tank dialog', () => {
        tankComponentsPage.clickOnCreateButton();
        tankDialogPage = new TankDialogPage();
        expect(tankDialogPage.getModalTitle())
            .toMatch(/gateApp.tank.home.createOrEditLabel/);
        tankDialogPage.close();
    });

    it('should create and save Tanks', () => {
        tankComponentsPage.clickOnCreateButton();
        tankDialogPage.setTankNameInput('tankName');
        expect(tankDialogPage.getTankNameInput()).toMatch('tankName');
        tankDialogPage.tankTypeSelectLastOption();
        tankDialogPage.setDescriptionInput('description');
        expect(tankDialogPage.getDescriptionInput()).toMatch('description');
        tankDialogPage.setTimestampInput('5');
        expect(tankDialogPage.getTimestampInput()).toMatch('5');
        tankDialogPage.save();
        expect(tankDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class TankComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-tank-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class TankDialogPage {
    modalTitle = element(by.css('h4#myTankLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    tankNameInput = element(by.css('input#field_tankName'));
    tankTypeSelect = element(by.css('select#field_tankType'));
    descriptionInput = element(by.css('input#field_description'));
    timestampInput = element(by.css('input#field_timestamp'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setTankNameInput = function(tankName) {
        this.tankNameInput.sendKeys(tankName);
    };

    getTankNameInput = function() {
        return this.tankNameInput.getAttribute('value');
    };

    setTankTypeSelect = function(tankType) {
        this.tankTypeSelect.sendKeys(tankType);
    };

    getTankTypeSelect = function() {
        return this.tankTypeSelect.element(by.css('option:checked')).getText();
    };

    tankTypeSelectLastOption = function() {
        this.tankTypeSelect.all(by.tagName('option')).last().click();
    };
    setDescriptionInput = function(description) {
        this.descriptionInput.sendKeys(description);
    };

    getDescriptionInput = function() {
        return this.descriptionInput.getAttribute('value');
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

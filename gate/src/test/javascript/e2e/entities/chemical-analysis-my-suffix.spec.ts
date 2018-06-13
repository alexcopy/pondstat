import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('ChemicalAnalysis e2e test', () => {

    let navBarPage: NavBarPage;
    let chemicalAnalysisDialogPage: ChemicalAnalysisDialogPage;
    let chemicalAnalysisComponentsPage: ChemicalAnalysisComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().loginWithOAuth('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load ChemicalAnalyses', () => {
        navBarPage.goToEntity('chemical-analysis-my-suffix');
        chemicalAnalysisComponentsPage = new ChemicalAnalysisComponentsPage();
        expect(chemicalAnalysisComponentsPage.getTitle())
            .toMatch(/gateApp.chemicalAnalysis.home.title/);

    });

    it('should load create ChemicalAnalysis dialog', () => {
        chemicalAnalysisComponentsPage.clickOnCreateButton();
        chemicalAnalysisDialogPage = new ChemicalAnalysisDialogPage();
        expect(chemicalAnalysisDialogPage.getModalTitle())
            .toMatch(/gateApp.chemicalAnalysis.home.createOrEditLabel/);
        chemicalAnalysisDialogPage.close();
    });

    it('should create and save ChemicalAnalyses', () => {
        chemicalAnalysisComponentsPage.clickOnCreateButton();
        chemicalAnalysisDialogPage.setDateInput(12310020012301);
        expect(chemicalAnalysisDialogPage.getDateInput()).toMatch('2001-12-31T02:30');
        chemicalAnalysisDialogPage.setNO2Input('nO2');
        expect(chemicalAnalysisDialogPage.getNO2Input()).toMatch('nO2');
        chemicalAnalysisDialogPage.setNO3Input('nO3');
        expect(chemicalAnalysisDialogPage.getNO3Input()).toMatch('nO3');
        chemicalAnalysisDialogPage.setNH4Input('nH4');
        expect(chemicalAnalysisDialogPage.getNH4Input()).toMatch('nH4');
        chemicalAnalysisDialogPage.setPhInput('ph');
        expect(chemicalAnalysisDialogPage.getPhInput()).toMatch('ph');
        chemicalAnalysisDialogPage.setTempValInput('5');
        expect(chemicalAnalysisDialogPage.getTempValInput()).toMatch('5');
        chemicalAnalysisDialogPage.setTimestampInput('5');
        expect(chemicalAnalysisDialogPage.getTimestampInput()).toMatch('5');
        chemicalAnalysisDialogPage.save();
        expect(chemicalAnalysisDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ChemicalAnalysisComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-chemical-analysis-my-suffix div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ChemicalAnalysisDialogPage {
    modalTitle = element(by.css('h4#myChemicalAnalysisLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    dateInput = element(by.css('input#field_date'));
    nO2Input = element(by.css('input#field_nO2'));
    nO3Input = element(by.css('input#field_nO3'));
    nH4Input = element(by.css('input#field_nH4'));
    phInput = element(by.css('input#field_ph'));
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

    setNO2Input = function(nO2) {
        this.nO2Input.sendKeys(nO2);
    };

    getNO2Input = function() {
        return this.nO2Input.getAttribute('value');
    };

    setNO3Input = function(nO3) {
        this.nO3Input.sendKeys(nO3);
    };

    getNO3Input = function() {
        return this.nO3Input.getAttribute('value');
    };

    setNH4Input = function(nH4) {
        this.nH4Input.sendKeys(nH4);
    };

    getNH4Input = function() {
        return this.nH4Input.getAttribute('value');
    };

    setPhInput = function(ph) {
        this.phInput.sendKeys(ph);
    };

    getPhInput = function() {
        return this.phInput.getAttribute('value');
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

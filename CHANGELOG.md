# Change history for ui-notes

## [12.0.0] (IN PROGRESS)

* Settings > Notes> Add Notes application icon. (UINOTES-169)
* *BREAKING* Handle BE error when a note type limit has been reached. (UINOTES-173)

## [11.0.0] (https://github.com/folio-org/ui-notes/tree/v11.0.0) (2025-03-13)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v10.0.0...v11.0.0)

* *BREAKING* migrate stripes dependencies to their Sunflower versions. (UINOTES-164)
* *BREAKING* migrate react-intl to v7. (UINOTES-165)

## [10.0.0] (https://github.com/folio-org/ui-notes/tree/v10.0.0) (2024-10-30)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v9.0.0...v10.0.0)

* *BREAKING* Upgrade `notes` to `4.0`. Change permission `notes.collection.get.by.status` to `note.links.collection.get`. Remove `notes.domain.all` permission. (UINOTES-154)
* migrate to shared CI workflows. (UINOTES-151)
* Rename permissions to match the naming convention. (UINOTES-158)

## [9.1.0] (https://github.com/folio-org/ui-notes/tree/v9.1.0) (2024-03-20)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v9.0.0...v9.1.0)

* Show selected setting page in the HTML page title. (UINOTES-149)
* Translation updates

## [9.0.0] (https://github.com/folio-org/ui-notes/tree/v9.0.0) (2023-10-12)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v8.0.0...v9.0.0)

* Added a permission `Settings (Notes): View General settings`. (UINOTES-141)
* Update Node.js to v18 in GitHub Actions. (UINOTES-147)
* *BREAKING* Bump `react` to `v18`. (UINOTES-146)
* *BREAKING* bump `react-intl` to `v6.4.4`. (UINOTES-148)

## [8.0.0] (https://github.com/folio-org/ui-notes/tree/v8.0.0) (2023-02-14)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v7.0.0...v8.0.0)

* bump stripes to 8.0.0 for Orchid/2023-R1. (UINOTES-139)
* Upgrade react-redux to v8. (UINOTES-140)

## [7.0.0] (https://github.com/folio-org/ui-notes/tree/v7.0.0) (2022-10-24)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v6.2.0...v7.0.0)

* Settings > Notes > General > Note types - Remove # of notes column. (UINOTES-132)
* NOTES - provide local translations to ControlledVocab. (UINOTES-135)
* "ui-notes.settings.noteType" value is displayed as column title. (UINOTES-137)

## [6.2.0] (https://github.com/folio-org/ui-notes/tree/v6.2.0) (2022-06-20)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v6.1.0...v6.2.0)

* ui-notes: Configure GitHub actions. (UINOTES-120)
* Replace `babel-eslint` with `@babel/eslint-parser`. (UINOTES-125)
* update NodeJS to v16 in GitHub Actions. (UINOTES-126)

## [6.1.0] (https://github.com/folio-org/ui-notes/tree/v6.1.0) (2022-03-03)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v6.0.1...v6.1.0)

* Refactor '.all' permissions. (UINOTES-112)

## [6.0.1] (https://github.com/folio-org/ui-notes/tree/v6.0.1) (2021-11-09)

* Settings > Notes > Note types : Cannot add or edit a note type. (UINOTES-115)

## [6.0.0] (https://github.com/folio-org/ui-notes/tree/v6.0.0) (2021-10-01)

* Compile Translation Files into AST Format (UINOTES-105).
* Update stripes v7 and react v17. (UINOTES-110).

## [5.0.0] (https://github.com/folio-org/ui-notes/tree/v5.0.0) (2021-03-04)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v4.0.0...v5.0.0)

* Increment `notes` interface to `2.0`
* Hide 'module.notes.enabled' permission (UINOTES-98).
* Updated to stripes v6 (UINOTES-99).
* Updated to stripes-cli v2.
* Update [Settings (notes): display list of settings pages] permission TO Settings (Notes) : Edit and View General settings (UINOTES-103).

## [4.0.0] (https://github.com/folio-org/ui-notes/tree/v4.0.0) (2020-10-14)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v3.0.0...v4.0.0)

* Increment `@folio/stripes` to `v5`, `react-router` to `v5.2`.

## [3.0.0] (https://github.com/folio-org/ui-notes/tree/v3.0.0) (2020-06-09)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v2.0.0...v3.0.0)

* Update react-intl to v4
* Added permission display names to translations (UINOTES-79).
* Update `stripes` to `v4`
* Refactor to `miragejs` from `bigtest/mirage`

## [2.0.0](https://github.com/folio-org/ui-notes/tree/v2.0.0) (2020-03-13)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v1.4.0...v2.0.0)

* Update eslint v6.2.1 (UINOTES-70)
* Migrate to stripes v3.0.0 and move react-intl and react-router to peerDependencies.

## [1.4.1](https://github.com/folio-org/ui-notes/tree/v1.4.1) (2019-12-18)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v1.4.0...v1.4.1)

* Fix security vulnerabilities

## [1.4.0](https://github.com/folio-org/ui-notes/tree/v1.4.0) (2019-12-04)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v1.3.0...v1.4.0)

* Add GET note types permission as a note view subpermission (UINOTES-57)

## [1.3.0](https://github.com/folio-org/ui-notes/tree/v1.3.0) (2019-09-10)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v1.2.0...v1.3.0)

* Added German translation of the "Note type" and Chinese translations

## [1.2.0](https://github.com/folio-org/ui-notes/tree/v1.2.0) (2019-07-24)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v1.1.0...v1.2.0)

* Fixed security vulnerabilities (UINOTES-28)
* Made permissions' names more user-friendly

## [1.1.0](https://github.com/folio-org/ui-notes/tree/v1.1.0) (2019-06-11)
[Full Changelog](https://github.com/folio-org/ui-notes/compare/v1.0.0...v1.1.0)

* Corrected localization strings
* Fixed note usage number in note type settings
* Defined UI permissions

## [1.0.0](https://github.com/folio-org/ui-notes/tree/v1.0.0) (2019-05-08)

* New app created
* Added project configs for linting, Jenkins, browser, git and etc.
* Added note types settings (UINOTES-11).
* Defined UI permissions

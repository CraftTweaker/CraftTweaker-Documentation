# Inżynieria masowa

## Kredyty:

Kredyty wychodzą do Skysom, aby pomóc mi przekierować się tym i pozwolić mi przerobić część jego kodu z MultiblockStages!

## Wyjaśnienie:

Inżynieria immersyjna składa się obecnie:

- Polecenie do wyrzucenia nazwy ciągu wszystkich bloków IE. 
    - Polecenie to: /ct ieMultiBlocks
- Wieloblokowe bramki za pomocą składni typu Crt-based

### Składnia:

    Pusty przykład:
    mods.compatskills.IEMultiBlockGate.addGate(String MultiBlockName, String failureMessage, String... domyślne wymagania);
    
    Przykład:
    mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "Obawiam się, że jest to zbyt skomplikowane dla takiego idiota, jak ty!", "przekwalifikowalne:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
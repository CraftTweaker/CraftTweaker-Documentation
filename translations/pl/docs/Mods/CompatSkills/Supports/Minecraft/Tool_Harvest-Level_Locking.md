# Blokowanie poziomu Zbioru Narzędzi

## Funkcja:

Ta blokada zwiększa zdolność autorów paczek do blokowania narzędzi w ogóle lub specjalnych "typów" narzędzi, za ich poziomem zbiorów. Oznacza to, że możesz zablokować wszystkie kilofy z poziomem zbioru „3” za zbiorem wymagań. Lub ogólnie wszystkie narzędzia z poziomem zbiorów 3 za zestawem wymagań!

## Składnia:

    mods.compatskills.HarvestLock.addToolLevelLock(int poziom, String... wymagania);
    mods.compatskills.HarvestLock.addToolLevelLock(Typ ciągu, poziom int, String... wymagania);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLevelLock("kilkaxe", 3, "dim|1");
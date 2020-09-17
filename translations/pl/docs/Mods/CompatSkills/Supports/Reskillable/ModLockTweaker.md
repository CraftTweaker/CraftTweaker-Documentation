# Tłumacz blokady modu

## Blokowanie modów

Zostało to dodane jako zdolność do konfiguracji w 1.2.0 i obecnie posiada ZenMethod CrT zaimplementowane aby je wspierać. Można to również osiągnąć poprzez konfiguracje, jak wcześniej wspomniano.

Blokowanie modów pozwala zablokować wszystkie przedmioty z określonego moda za określoną blokadą.

### Składnia:

    // Pusty przykład
    mods.compatskills.ModLock.addModLock(Moding StrId, String... zablokowane);
    
    // Przykład:
    mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building|4");
    
    Zamek powyżej zablokuje wszystko od moda "minecraft" za blokadą "build4"
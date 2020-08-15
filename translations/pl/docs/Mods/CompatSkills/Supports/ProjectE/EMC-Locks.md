# ProjectE

## Blokady EMC

Od 1.5.0 CompatSkills obsługuje EMC Locks dla przedmiotów.

## POWIADOMIENIE

Od 1.9.0 blokady EMC zostały zmodyfikowane:

    Zmodyfikowany projekt wspiera proces uczenia się transmutacji i mnożenia kondensatorów.
    Składnia jest taka sama jak przed mods.compatskills.EMCLock.addEMCLock(int emc, String... wymogów);
    Gracze będą mogli używać przedmiotów, które nie spełniają blokady emc, ale nie będą w stanie dowiedzieć się lub zduplikować tego przedmiotu. Uczenie się i dublowanie wymaga od gracza spełnienia wszelkich wymagań, które ma na nim przedmiot.
    Uwaga: Przy umieszczaniu przedmiotów w tabeli transmutacji nadal zyskasz emc, ale nie będziesz w stanie odzyskać przedmiotu.
    

### Składnia:

    // Pusty przykład:
    mods.compatskills.EMCLock.addEMCLock(int emc, String... zablokowane)
    
    // Przykład:
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining|5", "reskillable:magic|7")
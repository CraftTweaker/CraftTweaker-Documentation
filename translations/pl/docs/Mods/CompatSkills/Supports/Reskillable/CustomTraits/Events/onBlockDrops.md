### onBlockDrops

| Ustawienie/Getter/Metoda   | Nazwy metod                          | Nazwisko                            | Input/Output                                          |
|:-------------------------- |:------------------------------------ |:----------------------------------- | ----------------------------------------------------- |
| crwdns74646:0crwdne74646:0 | getDropChance();                     | dropChance();                       | Zwraca zmiennoprzecinkową                             |
| Setter                     | setDropChance(float dropSzance);     | dropChance(float dropSzance);       | Zajmuje pływakiem                                     |
| crwdns74646:0crwdne74646:0 | getFortuneLevel();                   | fortuneLevel();                     | Zwraca liczbę całkowitą                               |
| crwdns74646:0crwdne74646:0 | getDrops();                          | kropel ();                          | Zwraca listę [IItemStack](/Vanilla/Items/IItemStack/) |
| Setter                     | setDrops(lista<iitemstack> kroplów); | kropki (lista<iitemstack> kroplów); | Robi listę [IItemStack](/Vanilla/Items/IItemStack/)   |
| Metoda                     | addItem(IItemStack itemStack);       | addItem(IItemStack itemStack);      | Takes an [IItemStack](/Vanilla/Items/IItemStack/)     |
| crwdns74646:0crwdne74646:0 | isSilkTouch();                       | silkTouch();                        | Zwraca wartość logiczną                               |
| crwdns74646:0crwdne74646:0 | isPlayer();                          | isPlayer();                         | Zwraca wartość logiczną                               |
| crwdns74646:0crwdne74646:0 | getPlayer();                         | gracz();                            | Zwraca [IPlayer](/Vanilla/Players/IPlayer/)           |

    test var = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
    };
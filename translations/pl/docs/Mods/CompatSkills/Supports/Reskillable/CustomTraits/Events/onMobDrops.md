### onMobDrops

| Ustawienie/Getter/Metoda   | Nazwy metod                      | Nazwisko                             | Input/Output                                                 |
|:-------------------------- |:-------------------------------- |:------------------------------------ | ------------------------------------------------------------ |
| crwdns74646:0crwdne74646:0 | getDamageSource();               | Źródło obrażeń                       | Zwraca [IDamageSource](/Vanilla/Damage/IDamageSource/)       |
| Metoda                     | addItem(IItemStack item);        | addItem(IItemStack item);            | Takes an [IItemStack](/Vanilla/Items/IItemStack/)            |
| Metoda                     | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem);     | Robi [Element IEntityItem](/Vanilla/Entities/IEntityItem/)   |
| crwdns74646:0crwdne74646:0 | getLootingLevel();               | Poziom lootinga                      | Zwraca liczbę całkowitą                                      |
| crwdns74646:0crwdne74646:0 | getIsRecentlyHit();              | isRecentlyTraf                       | Zwraca wartość logiczną                                      |
| crwdns74646:0crwdne74646:0 | getDrops();                      | kropel ();                           | Zwraca listę [IEntityItem's](/Vanilla/Entities/IEntityItem/) |
| Setter                     | setDrops();                      | kropki (lista<ientityitem> kroplów); | Robi listę [IEntityItem's](/Vanilla/Entities/IEntityItem/)   |

    test var = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobDrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
    
    };
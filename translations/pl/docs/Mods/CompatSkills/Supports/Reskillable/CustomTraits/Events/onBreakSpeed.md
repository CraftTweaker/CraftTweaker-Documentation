### onBreakSpeed

| Ustawienie/Getter/Metoda   | Nazwy metod                           | Nazwisko                                | Input/Output                                       |
|:-------------------------- |:------------------------------------- |:--------------------------------------- | -------------------------------------------------- |
| crwdns74646:0crwdne74646:0 | getBlockState();                      | BlockState();                           | Zwraca [IBlockState](/Vanilla/Blocks/IBlockState/) |
| crwdns74646:0crwdne74646:0 | getBlock();                           | blok();                                 | Zwraca [IBlock](/Vanilla/Blocks/IBlock/)           |
| crwdns74646:0crwdne74646:0 | getOriginalSpeed();                   | originalSpeed();                        | Zwraca zmienną                                     |
| crwdns74646:0crwdne74646:0 | getNewSpeed();                        | nowa prędkość();                        | Zwraca zmienną                                     |
| Setter                     | setNewSpeed(pływająca nowa prędkość); | nowa prędkość (nowa prędkość pływania); | Zajmuje zmienną                                    |

    test var = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBreakSpeed = function(event as crafttweaker.event.PlayerBreakSpeedEvent) {
    ...
    };
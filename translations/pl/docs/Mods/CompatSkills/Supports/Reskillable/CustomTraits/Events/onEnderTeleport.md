### onEnderTeleport

| Ustawienie/Getter/Metoda   | Nazwy metod                                    | Nazwisko                                         | Input/Output    |
|:-------------------------- |:---------------------------------------------- |:------------------------------------------------ | --------------- |
| crwdns74646:0crwdne74646:0 | getTargetX();                                  | targetX();                                       | Zwraca podwójne |
| Setter                     | setTargetX(double targetX);                    | targetX(double targetX);                         | Robi Podwójne   |
| crwdns74646:0crwdne74646:0 | getTargetY();                                  | targetY();                                       | Zwraca podwójne |
| Setter                     | setTargetY(podwójny cel);                      | celY(cel podwójny);                              | Robi Podwójne   |
| crwdns74646:0crwdne74646:0 | getTargetZ();                                  | targetZ();                                       | Zwraca podwójne |
| Setter                     | setTargetZ(podwójny cel);                      | targetZ(cel podwójnyZ);                          | Robi Podwójne   |
| crwdns74646:0crwdne74646:0 | getAttackDamage();                             | obrażenia od ataku ();                           | Zwraca zmienną  |
| Setter                     | setAttackDamage(Obrażenia Ataku Upływającego); | obrażenia ataku (obrażenia podczas ataku float); | Zajmuje zmienną |

    test var = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
    };
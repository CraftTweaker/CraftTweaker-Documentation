### onEnderTeleport

| Setter/Getter/Methode | Methodennamen                          | Namen                               | Input/Output              |
|:--------------------- |:-------------------------------------- |:----------------------------------- | ------------------------- |
| Getriebe              | getTargetX();                          | targetX();                          | Gibt ein Doppeltes zurück |
| Setter                | setTargetX(double targetX);            | targetX(double targetX);            | Nimmt ein Doppelt         |
| Getriebe              | getTargetY();                          | targetY();                          | Gibt ein Doppeltes zurück |
| Setter                | setTargetY(doppeltes Ziel);            | targetY(doppeltes Ziel);            | Nimmt ein Doppelt         |
| Getriebe              | getTargetZ();                          | targetZ();                          | Gibt ein Doppeltes zurück |
| Setter                | setTargetZ(double targetZ));           | targetZ(doppeltes ZielZ);           | Nimmt ein Doppelt         |
| Getriebe              | getAttackDamage();                     | attackSchaden();                    | Gibt einen Float zurück   |
| Setter                | setAttackSchaden(Float attackSchaden); | attackSchaden(float attackSchaden); | Nimmt einen Float         |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
    };
### onEnderTeleport

| Setter/Getter/Method | Nomi Metodo                          | Nomi                                 | Input/Output              |
|:-------------------- |:------------------------------------ |:------------------------------------ | ------------------------- |
| Getter               | getTargetX();                        | targetX();                           | Restituisce un doppio     |
| Setter               | setTargetX(double targetX);          | targetX(double targetX);             | Prende un doppio          |
| Getter               | getTargetY();                        | targetY();                           | Restituisce un doppio     |
| Setter               | setTargetY(doppio obiettivoY);       | obiettivoY(doppio obiettivoY);       | Prende un doppio          |
| Getter               | getTargetZ();                        | targetZ();                           | Restituisce un doppio     |
| Setter               | setTargetZ(doppio obiettivoZ));      | targetZ(doppio obiettivoZ);          | Prende un doppio          |
| Getter               | getAttackDamage();                   | attaccoDanno();                      | Restituisce un Fluttuante |
| Setter               | setAttackDamage(float attackDamage); | attaccoDanno (attacco galleggiante); | Prende un galleggiante    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
    };
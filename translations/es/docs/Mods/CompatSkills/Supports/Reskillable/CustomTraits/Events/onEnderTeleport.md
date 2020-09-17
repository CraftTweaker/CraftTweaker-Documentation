### onEnderTeleport

| Setter/Getter/Method | Nombres del método                   | Nombres                                   | Input/Output      |
|:-------------------- |:------------------------------------ |:----------------------------------------- | ----------------- |
| Obtén                | getTargetX();                        | targetX();                                | Devuelve un Doble |
| Setter               | setTargetX(double targetX);          | targetX(double targetX);                  | Toma una Doble    |
| Obtén                | getTargetY();                        | targetY();                                | Devuelve un Doble |
| Setter               | setTargetY(doble objetivoY);         | targetY(doble objetivo);                  | Toma una Doble    |
| Obtén                | getTargetZ();                        | targetZ();                                | Devuelve un Doble |
| Setter               | setTargetZ(doble objetivoZ));        | targetZ(doble objetivoZ);                 | Toma una Doble    |
| Obtén                | getAttackDamage();                   | ataque();                                 | Devuelve un float |
| Setter               | setAttackDamage(float attackDamage); | daño de ataque (daño de ataque flotante); | Toma un float     |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
    };
### onEnderTeleport

| Setter/Getter/Method | Method Names                         | Names                             | Input/Output      |
|:-------------------- |:------------------------------------ |:--------------------------------- | ----------------- |
| Getter               | getTargetX();                        | targetX();                        | Returns an Double |
| Setter               | setTargetX(double targetX);          | targetX(double targetX);          | Takes an Double   |
| Getter               | getTargetY();                        | targetY();                        | Returns an Double |
| Setter               | setTargetY(double targetY);          | targetY(double targetY);          | Takes an Double   |
| Getter               | getTargetZ();                        | targetZ();                        | Returns an Double |
| Setter               | setTargetZ(double targetZ));         | targetZ(double targetZ);          | Takes an Double   |
| Getter               | getAttackDamage();                   | attackDamage();                   | Returns an Float  |
| Setter               | setAttackDamage(float attackDamage); | attackDamage(float attackDamage); | Takes an Float    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
        ...
    };
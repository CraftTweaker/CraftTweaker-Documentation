### onEnderTeleport

| Setter/Getter/Method | メソッド名                                | 名前                                | Input/Output |
|:-------------------- |:------------------------------------ |:--------------------------------- | ------------ |
| Getter               | getTargetX();                        | targetX();                        | ダブルを返します。    |
| Setter               | setTargetX(double targetX);          | targetX(double targetX);          | ダブルを取る       |
| Getter               | getTargetY();                        | targetY();                        | ダブルを返します。    |
| Setter               | setTargetY(double targetY);          | targetY(double targetY);          | ダブルを取る       |
| Getter               | getTargetZ();                        | targetZ();                        | ダブルを返します。    |
| Setter               | setTargetZ(double targetZ));         | targetZ(double targetZ);          | ダブルを取る       |
| Getter               | getAttackDamage();                   | attackDamage();                   | Float を返します。 |
| Setter               | setAttackDamage(float attackDamage); | attackDamage(float attackDamage); | 浮動小数点数を獲得    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onEnderTeleport = function(event as crafttweaker.api.event.EnderTeleportEvent) {
    ...
    };
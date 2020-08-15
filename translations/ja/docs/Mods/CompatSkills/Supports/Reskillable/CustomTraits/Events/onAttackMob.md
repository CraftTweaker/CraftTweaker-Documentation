### onAttackMob

| Setter/Getter/Method | メソッド名              | 名前              | Input/Output                                          |
|:-------------------- |:------------------ |:--------------- | ----------------------------------------------------- |
| Getter               | getDamageSource(); | damageSource(); | [IDamageSource](/Vanilla/Damage/IDamageSource/) を返します |
| Getter               | getAmount();       | amount();       | Float を返します。                                          |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5');
    
    test.onAttackMob = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
    };
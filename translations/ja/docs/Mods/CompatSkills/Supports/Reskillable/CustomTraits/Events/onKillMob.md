### onKillMob

| Setter/Getter/Method | メソッド名              | 名前              | Input/Output                                          |
|:-------------------- |:------------------ |:--------------- | ----------------------------------------------------- |
| Getter               | getDamageSource(); | damageSource(); | [IDamageSource](/Vanilla/Damage/IDamageSource/) を返します |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5');
    
    test.onKillMob = function(event as crafttweaker.event.EntityLivingDeathEvent) {
    ...
    };
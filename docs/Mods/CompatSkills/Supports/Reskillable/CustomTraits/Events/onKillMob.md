### onKillMob
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                            |
|:-------------------|:---------------------------------|:------------------------------|--------------------------------------------------------|
|Getter              |getDamageSource();                |damageSource();                |Returns a [IDamageSource](/Vanilla/Damage/IDamageSource)|


```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as EntityLivingDeathEvent) {
    ...
};
```
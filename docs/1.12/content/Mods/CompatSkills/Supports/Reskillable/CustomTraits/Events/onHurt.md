### onHurt
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                             |
|:-------------------|:---------------------------------|:------------------------------|---------------------------------------------------------|
|Getter              |getDamageSource();                |damageSource();                |Returns an [IDamageSource](/Vanilla/Damage/IDamageSource/)|
|Getter              |getAmount();                      |amount();                      |Returns an Float                                         |


```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onHurt = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
};
```
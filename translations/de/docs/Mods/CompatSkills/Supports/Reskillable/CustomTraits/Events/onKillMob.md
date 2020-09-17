### onKillMob

| Setter/Getter/Methode | Methodennamen      | Namen           | Input/Output                                                     |
|:--------------------- |:------------------ |:--------------- | ---------------------------------------------------------------- |
| Getriebe              | getDamageSource(); | damageSource(); | Gibt eine [IDamageSource](/Vanilla/Damage/IDamageSource/) zurück |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onKillMob = function(event as crafttweaker.event.EntityLivingDeathEvent) {
    ...
    };
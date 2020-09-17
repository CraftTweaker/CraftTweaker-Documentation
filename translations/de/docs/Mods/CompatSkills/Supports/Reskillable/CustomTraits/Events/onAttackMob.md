### onAttackMob

| Setter/Getter/Methode | Methodennamen      | Namen           | Input/Output                                                     |
|:--------------------- |:------------------ |:--------------- | ---------------------------------------------------------------- |
| Getriebe              | getDamageSource(); | damageSource(); | Gibt eine [IDamageSource](/Vanilla/Damage/IDamageSource/) zurück |
| Getriebe              | getAmount();       | betrag();       | Gibt einen Float zurück                                          |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onAttackMob = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
    };
### onAttackMob

| Setter/Getter/Method | Nomi Metodo        | Nomi             | Input/Output                                                   |
|:-------------------- |:------------------ |:---------------- | -------------------------------------------------------------- |
| Getter               | getDamageSource(); | dannoSorgente(); | Restituisce un [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| Getter               | getAmount();       | importo();       | Restituisce un Fluttuante                                      |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    
    test.onAttackMob = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
    };
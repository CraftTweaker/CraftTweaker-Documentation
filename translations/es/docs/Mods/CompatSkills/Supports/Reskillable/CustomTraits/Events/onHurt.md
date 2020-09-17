### onHurt

| Setter/Getter/Method | Nombres del método         | Nombres           | Input/Output                                                |
|:-------------------- |:-------------------------- |:----------------- | ----------------------------------------------------------- |
| Obtén                | Obtener fuente de daño (); | fuente de daño(); | Devuelve un [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| Obtén                | getAmount();               | monto();          | Devuelve un float                                           |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onHurt = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
    };
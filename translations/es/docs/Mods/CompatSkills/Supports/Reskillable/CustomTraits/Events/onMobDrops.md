### onMobDrops

| Setter/Getter/Method | Nombres del método               | Nombres                            | Input/Output                                                                 |
|:-------------------- |:-------------------------------- |:---------------------------------- | ---------------------------------------------------------------------------- |
| Obtén                | Obtener fuente de daño ();       | fuente de daño                     | Devuelve un [IDamageSource](/Vanilla/Damage/IDamageSource/)                  |
| Método               | addItem(IItemStack item);        | addItem(IItemStack item);          | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                            |
| Método               | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem);   | Toma un artículo de [ItityItem](/Vanilla/Entities/IEntityItem/)              |
| Obtén                | getLootingLevel();               | lootingLevel                       | Devuelve un entero                                                           |
| Obtén                | getIsRecentlyHit();              | es golpeado recientemente          | Devuelve un booleano                                                         |
| Obtén                | getDrops();                      | drops();                           | Devuelve una Lista de [ItityItem's](/Vanilla/Entities/IEntityItem/)          |
| Setter               | setDrops();                      | soltar(Lista<ientityitem> soltar); | Toma una lista de [elementos de ItityItem's](/Vanilla/Entities/IEntityItem/) |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobDrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
    ...
    };
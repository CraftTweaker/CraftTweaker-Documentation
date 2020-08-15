### onMobDrops

| Setter/Getter/Method | Nomi Metodo                      | Nomi                              | Input/Output                                                           |
|:-------------------- |:-------------------------------- |:--------------------------------- | ---------------------------------------------------------------------- |
| Getter               | getDamageSource();               | damageSource                      | Restituisce un [IDamageSource](/Vanilla/Damage/IDamageSource/)         |
| Metodo               | addItem(IItemStack item);        | addItem(IItemStack item);         | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                      |
| Metodo               | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem);  | Prende un [IEntityItem](/Vanilla/Entities/IEntityItem/)                |
| Getter               | getLootingLevel();               | lootingLevel                      | Restituisce un Intero                                                  |
| Getter               | getIsRecentlyHit();              | isRecentlyHit                     | Restituisce un booleano                                                |
| Getter               | getDrops();                      | drops();                          | Restituisce una lista di [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| Setter               | setDrops();                      | drops(Elenco<ientityitem> drops); | Prende una lista di [IEntityItem](/Vanilla/Entities/IEntityItem/)      |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    
    test.onMobDrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
    ...
    };
### onMobDrops

| Setter/Getter/Method | Methodennamen                    | Names                            | Input/Output                                                       |
|:-------------------- |:-------------------------------- |:-------------------------------- | ------------------------------------------------------------------ |
| Getter               | getDamageSource();               | damageSource                     | Returns an [IDamageSource](/Vanilla/Damage/IDamageSource/)         |
| Methode              | addItem(IItemStack item);        | addItem(IItemStack item);        | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                  |
| Methode              | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem); | Takes an [IEntityItem](/Vanilla/Entities/IEntityItem/)             |
| Getter               | getLootingLevel();               | lootingLevel                     | Returns an Integer                                                 |
| Getter               | getIsRecentlyHit();              | isRecentlyHit                    | Returns an Boolean                                                 |
| Getter               | getDrops();                      | drops();                         | Returns an List of [IEntityItem's](/Vanilla/Entities/IEntityItem/) |
| Setter               | setDrops();                      | drops(List<ientityitem> drops);  | Takes an List of [IEntityItem's](/Vanilla/Entities/IEntityItem/)   |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobDrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
        ...
    };
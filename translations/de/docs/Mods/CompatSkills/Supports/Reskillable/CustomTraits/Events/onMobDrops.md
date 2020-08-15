### onMobDrops

| Setter/Getter/Methode | Methodennamen                    | Namen                            | Input/Output                                                             |
|:--------------------- |:-------------------------------- |:-------------------------------- | ------------------------------------------------------------------------ |
| Getriebe              | getDamageSource();               | Schadensquelle                   | Gibt eine [IDamageSource](/Vanilla/Damage/IDamageSource/) zurück         |
| Methode               | addItem(IItemStack item);        | addItem(IItemStack item);        | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                        |
| Methode               | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem); | Nimmt ein [IEntityItem](/Vanilla/Entities/IEntityItem/)                  |
| Getriebe              | getLootingLevel();               | plündernde Stufe                 | Gibt eine Ganzzahl zurück                                                |
| Getriebe              | getIsRecentlyHit();              | isRecentlyHit                    | Gibt einen Booleschen zurück                                             |
| Getriebe              | getDrops();                      | drops();                         | Gibt eine Liste von [IEntityItem](/Vanilla/Entities/IEntityItem/) zurück |
| Setter                | setDrops();                      | drops(Liste<ientityitem> drops); | Nimmt eine Liste von [IEntityItem's](/Vanilla/Entities/IEntityItem/)     |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobDrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
    ...
    };
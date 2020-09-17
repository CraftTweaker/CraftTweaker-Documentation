### OnMobDrops

| Réglage/Getter/Méthode | Noms des méthodes                | Noms                              | Input/Output                                                        |
|:---------------------- |:-------------------------------- |:--------------------------------- | ------------------------------------------------------------------- |
| Récupération           | getDamageSource();               | Source de dommage                 | Retourne un [IDamageSource](/Vanilla/Damage/IDamageSource/)         |
| Méthode                | addItem(IItemStack item);        | addItem(IItemStack item);         | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                   |
| Méthode                | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem);  | Prend un [IEntityItem](/Vanilla/Entities/IEntityItem/)              |
| Récupération           | getLootingLevel();               | niveau de pillage                 | Renvoie un entier                                                   |
| Récupération           | format@@0 getIsRecentlyHit();    | format@@0 isRécemment Hit         | Renvoie un booléen                                                  |
| Récupération           | getDrops();                      | goutte();                         | Retourne une liste de [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| Setter                 | setDrops();                      | drops(Liste<ientityitem> goutte); | Prend une liste de [IEntityItem](/Vanilla/Entities/IEntityItem/)    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobDrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
    ...
    };
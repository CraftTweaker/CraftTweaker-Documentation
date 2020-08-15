### OnBlockDrops

| Réglage/Getter/Méthode | Noms des méthodes                            | Noms                                   | Input/Output                                                   |
|:---------------------- |:-------------------------------------------- |:-------------------------------------- | -------------------------------------------------------------- |
| Récupération           | getDropChance();                             | format@@0 dropChance();                | Renvoie un Float                                               |
| Setter                 | setDropChance(float dropChance);             | dropChance(Chance de dépôt flottante); | Prend un flottant                                              |
| Récupération           | getFortuneLevel();                           | niveaufortune();                       | Renvoie un entier                                              |
| Récupération           | getDrops();                                  | goutte();                              | Retourne une liste de [IItemStack](/Vanilla/Items/IItemStack/) |
| Setter                 | format@@0 setDrops(List<iitemstack> goutte); | drops(Liste<iitemstack> goutte);       | Prend une liste de [IItemStack](/Vanilla/Items/IItemStack/)    |
| Méthode                | addItem(IItemStack itemStack);               | addItem(IItemStack itemStack);         | Takes an [IItemStack](/Vanilla/Items/IItemStack/)              |
| Récupération           | isSilkTouch();                               | soieTouch();                           | Renvoie un booléen                                             |
| Récupération           | isPlayer();                                  | isPlayer();                            | Renvoie un booléen                                             |
| Récupération           | getPlayer();                                 | joueur();                              | Renvoie un [IPlayer](/Vanilla/Players/IPlayer/)                |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
    };
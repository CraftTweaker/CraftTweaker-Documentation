### onBreakSpeed

| Réglage/Getter/Méthode | Noms des méthodes             | Noms                      | Input/Output                                           |
|:---------------------- |:----------------------------- |:------------------------- | ------------------------------------------------------ |
| Récupération           | getBlockState();              | blockState();             | Renvoie un [IBlockState](/Vanilla/Blocks/IBlockState/) |
| Récupération           | getBlock();                   | block();                  | Renvoie un IBlock [](/Vanilla/Blocks/IBlock/)          |
| Récupération           | format@@0 getOriginalSpeed(); | originalSpeed();          | Renvoie un Float                                       |
| Récupération           | getNewSpeed();                | newSpeed();               | Renvoie un Float                                       |
| Setter                 | setNewSpeed(float newSpeed);  | newSpeed(float newSpeed); | Prend un flottant                                      |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBreakSpeed = function(event as crafttweaker.event.PlayerBreakSpeedEvent) {
    ...
    };
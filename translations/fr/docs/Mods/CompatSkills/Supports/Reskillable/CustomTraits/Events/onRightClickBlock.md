### en cliquant sur le bouton droit de la souris

| Réglage/Getter/Méthode | Noms des méthodes             | Noms                       | Input/Output                                      |
|:---------------------- |:----------------------------- |:-------------------------- | ------------------------------------------------- |
| Récupération           | getHitVector();               | hitVector();               | Renvoie un [IVector3d](/Vanilla/World/IVector3d/) |
| Récupération           | getUseBlock();                | useBlock();                | Retourne une chaîne de caractères                 |
| Setter                 | setUseBlock(String useBlock); | useBlock(String useBlock); | Prend une chaîne de caractères                    |
| Récupération           | getUseItem();                 | useItem();                 | Retourne une chaîne de caractères                 |
| Setter                 | setUseItem(String useItem);   | useItem(String useItem);   | Prend une chaîne de caractères                    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRightClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
    ...
    };
### onRightClickBlock

| Setter/Getter/Methode | Methodennamen                 | Namen                      | Input/Output                                       |
|:--------------------- |:----------------------------- |:-------------------------- | -------------------------------------------------- |
| Getriebe              | getHitVector();               | hitVector();               | Gibt [IVector3d zurück](/Vanilla/World/IVector3d/) |
| Getriebe              | getUseBlock();                | useBlock();                | Gibt einen String zurück                           |
| Setter                | setUseBlock(String useBlock); | useBlock(String useBlock); | Nimmt eine Zeichenkette                            |
| Getriebe              | getUseItem();                 | useItem();                 | Gibt einen String zurück                           |
| Setter                | setUseItem(String useItem);   | useItem(String useItem);   | Nimmt eine Zeichenkette                            |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRightClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
    ...
    };
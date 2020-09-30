### onRightClickBlock

| Setter/Getter/Method | Method Names                  | Names                      | Input/Output                                     |
|:-------------------- |:----------------------------- |:-------------------------- | ------------------------------------------------ |
| Getter               | getHitVector();               | hitVector();               | Returns a [IVector3d](/Vanilla/World/IVector3d/) |
| Getter               | getUseBlock();                | useBlock();                | Returns a String                                 |
| Setter               | setUseBlock(String useBlock); | useBlock(String useBlock); | Takes a String                                   |
| Getter               | getUseItem();                 | useItem();                 | Returns a String                                 |
| Setter               | setUseItem(String useItem);   | useItem(String useItem);   | Takes a String                                   |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRightClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
        ...
    };
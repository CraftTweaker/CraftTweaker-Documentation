### onRightClickBlock

| Setter/Getter/Method | メソッド名                         | 名前                         | Input/Output                                 |
|:-------------------- |:----------------------------- |:-------------------------- | -------------------------------------------- |
| Getter               | getHitVector();               | hitVector();               | [IVector3d](/Vanilla/World/IVector3d/) を返します |
| Getter               | getUseBlock();                | useBlock();                | 文字列を返します                                     |
| Setter               | setUseBlock(String useBlock); | useBlock(String useBlock); | 文字列を取る                                       |
| Getter               | getUseItem();                 | useItem();                 | 文字列を返します                                     |
| Setter               | setUseItem(String useItem);   | useItem(String useItem);   | 文字列を取る                                       |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRightClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
    ...
    };
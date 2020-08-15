### onRightClickBlock

| Сетчат/Геттер/Метод | Имена методов                 | Имена                      | Input/Output                                      |
|:------------------- |:----------------------------- |:-------------------------- | ------------------------------------------------- |
| Геттер              | getHitVector();               | hitVector();               | Возвращает [IVector3d](/Vanilla/World/IVector3d/) |
| Геттер              | getUseBlock();                | useBlock();                | Возвращает строку                                 |
| Setter              | setUseBlock(String useBlock); | useBlock(String useBlock); | Занимает строку                                   |
| Геттер              | getUseItem();                 | useItem();                 | Возвращает строку                                 |
| Setter              | setUseItem(String useItem);   | useItem(String useItem);   | Занимает строку                                   |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRightClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
    ...
    };
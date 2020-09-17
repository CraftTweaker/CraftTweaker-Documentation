### onRightClickBlock

| 设置/获取/方法 | 方法名称                          | 名称                       | Input/Output                              |
|:-------- |:----------------------------- |:------------------------ | ----------------------------------------- |
| 获取器      | getHitVector();               | hitVector();             | 返回 [IVector3d](/Vanilla/World/IVector3d/) |
| 获取器      | getUseBlock();                | useBlock();              | 返回字符串                                     |
| Setter   | setUseBlock(String useBlock); | 使用方块(使用方块)；              | 带一个字符串                                    |
| 获取器      | getUseItem();                 | useItem();               | 返回字符串                                     |
| Setter   | setUseItem(String useItem);   | useItem(String useItem); | 带一个字符串                                    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRight ClickBlock = function(event as craftweeper.event.PlayerInteractBlockEvent)
    ...
    };
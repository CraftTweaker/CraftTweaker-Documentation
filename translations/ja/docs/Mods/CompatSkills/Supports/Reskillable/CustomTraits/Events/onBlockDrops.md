### onBlockDrops

| Setter/Getter/Method | メソッド名                             | 名前                             | Input/Output                                       |
|:-------------------- |:--------------------------------- |:------------------------------ | -------------------------------------------------- |
| Getter               | getDropChance();                  | dropChance();                  | 浮動小数点数を返します                                        |
| Setter               | setDropChance(float dropChance);  | dropChance(float dropChance);  | 浮動小数点を取得                                           |
| Getter               | getFortuneLevel();                | fortuneLevel();                | 整数を返す                                              |
| Getter               | getDrops();                       | drops();                       | [IItemStack](/Vanilla/Items/IItemStack/) のリストを返します |
| Setter               | setDrops(List)<iitemstack> ドロップ); | ドロップズ（リスト）<iitemstack> ドロップ);  | [IItemStack](/Vanilla/Items/IItemStack/) のリストを取る   |
| 方法                   | addItem(IItemStack itemStack);    | addItem(IItemStack itemStack); | Takes an [IItemStack](/Vanilla/Items/IItemStack/)  |
| Getter               | isSilkTouch();                    | silkTouch();                   | ブール値を返す                                            |
| Getter               | isPlayer();                       | isPlayer();                    | ブール値を返す                                            |
| Getter               | getPlayer();                      | player();                      | [IPlayer](/Vanilla/Players/IPlayer/) を返します         |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
    };
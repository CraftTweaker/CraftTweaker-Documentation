### onMobdrops

| Setter/Getter/Method | メソッド名                            | 名前                               | Input/Output                                               |
|:-------------------- |:-------------------------------- |:-------------------------------- | ---------------------------------------------------------- |
| Getter               | getDamageSource();               | damageSource                     | [IDamageSource](/Vanilla/Damage/IDamageSource/) を返します      |
| 方法                   | addItem(IItemStack item);        | addItem(IItemStack item);        | Takes an [IItemStack](/Vanilla/Items/IItemStack/)          |
| 方法                   | addItem(IEntityItem entityItem); | addItem(IEntityItem entityItem); | [IEntityItem](/Vanilla/Entities/IEntityItem/) を取る          |
| Getter               | getLootingLevel();               | 略奪レベル                            | 整数を返す                                                      |
| Getter               | getIsRecentlyHit();              | isRecentlyHit                    | ブール値を返す                                                    |
| Getter               | getDrops();                      | drops();                         | [IEntityItem's](/Vanilla/Entities/IEntityItem/) のリストを返します。 |
| Setter               | setDrops();                      | ドロップズ（リスト）<ientityitem> ドロップ);   | [IEntityItemの](/Vanilla/Entities/IEntityItem/) のリストを取得します。 |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onMobdrops = function(event as crafttweaker.event.EntityLivingDeathDropsEvent) {
    ...
    };
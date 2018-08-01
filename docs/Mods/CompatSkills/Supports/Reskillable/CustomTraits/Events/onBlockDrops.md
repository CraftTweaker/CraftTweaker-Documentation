### onBlockDrops
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                             |
|:-------------------|:---------------------------------|:------------------------------|---------------------------------------------------------|
|Getter              |getDropChance();                  |dropChance();                  |Returns a Float                                          | 
|Setter              |setDropChance(float dropChance);  |dropChance(float dropChance);  |Takes a Float                                            |
|Getter              |getFortuneLevel();                |fortuneLevel();                |Returns an Integer                                       |
|Getter              |getDrops();                       |drops();                       |Returns a List of [IItemStack](/Vanilla/Items/IItemStack/)|
|Setter              |setDrops(List<IItemStack> drops); |drops(List<IItemStack> drops); |Takes an List of [IItemStack](/Vanilla/Items/IItemStack/) |
|Method              |addItem(IItemStack itemStack);    |addItem(IItemStack itemStack); |Takes an [IItemStack](/Vanilla/Items/IItemStack/)         |
|Getter              |isSilkTouch();                    |silkTouch();                   |Returns a Boolean                                        |
|Getter              |isPlayer();                       |isPlayer();                    |Returns a Boolean                                        |
|Getter              |getPlayer();                      |player();                      |Returns a [IPlayer](/Vanilla/Players/IPlayer/)            |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
};
```
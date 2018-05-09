### onBreakSpeed
|Setter/Getter/Method|Method Names                      |Names                          |Input/Output                                         |
|:-------------------|:---------------------------------|:------------------------------|-----------------------------------------------------|
|Getter              |getBlockState();                  |blockState();                  |Returns an [IBlockState](/Vanilla/Blocks/IBlockState)|
|Getter              |getBlock();                       |block();                       |Returns an [IBlock](/Vanilla/Blocks/IBlock)          |
|Getter              |getOriginalSpeed();               |originalSpeed();               |Returns an Float                                     |
|Getter              |getNewSpeed();                    |newSpeed();                    |Returns an Float                                     |
|Setter              |setNewSpeed(float newSpeed);      |newSpeed(float newSpeed);      |Takes an Float                                       |

```
var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");

test.onBlockDrops = function(event as PlayerBreakSpeedEvent) {
    ...
};
```
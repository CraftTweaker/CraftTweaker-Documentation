# UseOnContext

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.UseOnContext;
```


## 使用方式

:::group{name=getClickLocation}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// UseOnContext.getClickLocation() as Vec3

myUseOnContext.getClickLocation();
```

:::

:::group{name=getClickedFace}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// UseOnContext.getClickedFace() as Direction

myUseOnContext.getClickedFace();
```

:::

:::group{name=getClickedPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// UseOnContext.getClickedPos() as BlockPos

myUseOnContext.getClickedPos();
```

:::

:::group{name=getHand}

Return Type: [InteractionHand](/vanilla/api/util/InteractionHand)

```zenscript
// UseOnContext.getHand() as InteractionHand

myUseOnContext.getHand();
```

:::

:::group{name=getHorizontalDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// UseOnContext.getHorizontalDirection() as Direction

myUseOnContext.getHorizontalDirection();
```

:::

:::group{name=getItemInHand}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// UseOnContext.getItemInHand() as ItemStack

myUseOnContext.getItemInHand();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// UseOnContext.getLevel() as Level

myUseOnContext.getLevel();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// UseOnContext.getPlayer() as Player

myUseOnContext.getPlayer();
```

:::

:::group{name=getRotation}

Return Type: float

```zenscript
// UseOnContext.getRotation() as float

myUseOnContext.getRotation();
```

:::

:::group{name=isInside}

Return Type: boolean

```zenscript
// UseOnContext.isInside() as boolean

myUseOnContext.isInside();
```

:::

:::group{name=isSecondaryUseActive}

Return Type: boolean

```zenscript
// UseOnContext.isSecondaryUseActive() as boolean

myUseOnContext.isSecondaryUseActive();
```

:::


## 参数

| 名称                   | 类型                                                   | 可获得  | 可设置   | 描述                      |
| -------------------- | ---------------------------------------------------- | ---- | ----- | ----------------------- |
| clickLocation        | [Vec3](/vanilla/api/util/math/Vec3)                  | true | false | No Description Provided |
| clickedFace          | [Direction](/vanilla/api/util/direction/Direction)   | true | false | No Description Provided |
| clickedPos           | [BlockPos](/vanilla/api/util/math/BlockPos)          | true | false | No Description Provided |
| hand                 | [InteractionHand](/vanilla/api/util/InteractionHand) | true | false | No Description Provided |
| horizontalDirection  | [Direction](/vanilla/api/util/direction/Direction)   | true | false | No Description Provided |
| isInside             | 布尔值                                                  | true | false | No Description Provided |
| isSecondaryUseActive | 布尔值                                                  | true | false | No Description Provided |
| itemInHand           | [物品应用](/vanilla/api/item/ItemStack)                  | true | false | No Description Provided |
| level                | [Level](/vanilla/api/world/Level)                    | true | false | No Description Provided |
| player               | [Player](/vanilla/api/entity/type/player/Player)     | true | false | No Description Provided |
| rotation             | 浮点数                                                  | true | false | No Description Provided |


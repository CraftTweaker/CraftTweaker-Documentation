# UseOnContext

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.UseOnContext;
```


## Metodi

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

Return Type: [Player](/vanilla/api/entity/type/player/Player)?

```zenscript
// UseOnContext.getPlayer() as Player?

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


## Proprietà

| Nome                 | Tipo                                                 | Ha Getter | Ha Setter |
| -------------------- | ---------------------------------------------------- | --------- | --------- |
| clickLocation        | [Vec3](/vanilla/api/util/math/Vec3)                  | sì        | no        |
| clickedFace          | [Direction](/vanilla/api/util/direction/Direction)   | sì        | no        |
| clickedPos           | [BlockPos](/vanilla/api/util/math/BlockPos)          | sì        | no        |
| hand                 | [InteractionHand](/vanilla/api/util/InteractionHand) | sì        | no        |
| horizontalDirection  | [Direction](/vanilla/api/util/direction/Direction)   | sì        | no        |
| isInside             | boolean                                              | sì        | no        |
| isSecondaryUseActive | boolean                                              | sì        | no        |
| itemInHand           | [ItemStack](/vanilla/api/item/ItemStack)             | sì        | no        |
| level                | [Level](/vanilla/api/world/Level)                    | sì        | no        |
| player               | [Player](/vanilla/api/entity/type/player/Player)?    | sì        | no        |
| rotation             | float                                                | sì        | no        |


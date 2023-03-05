# BlockBuilder&LT;T : BlockBuilder<T>&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.builder.vanilla.block.BlockBuilder;
```


## Methods

:::group{name=air}

Return Type: T

```zenscript
// BlockBuilder.air() as T

myBlockBuilder.air();
```

:::

:::group{name=air}

Return Type: T

```zenscript
BlockBuilder.air(air as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| air       | boolean |


:::

:::group{name=breakInstantly}

Return Type: T

```zenscript
// BlockBuilder.breakInstantly() as T

myBlockBuilder.breakInstantly();
```

:::

:::group{name=build}

Return Type: [BlockReference](/mods/contenttweaker/object/vanilla/BlockReference)

```zenscript
BlockBuilder.build(name as string) as BlockReference
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=cloning}

Return Type: T

```zenscript
BlockBuilder.cloning(properties as BlockProperties) as T
```

| Parameter  |                                      Type                                       |
|------------|---------------------------------------------------------------------------------|
| properties | [BlockProperties](/mods/contenttweaker/object/vanilla/property/BlockProperties) |


:::

:::group{name=destroyTime}

Return Type: T

```zenscript
BlockBuilder.destroyTime(destroyTime as float) as T
```

|  Parameter  | Type  |
|-------------|-------|
| destroyTime | float |


:::

:::group{name=dropsFrom}

Return Type: T

```zenscript
BlockBuilder.dropsFrom(drops as ResourceLocation) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| drops     | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |


:::

:::group{name=dropsItselfRegardless}

Return Type: T

```zenscript
// BlockBuilder.dropsItselfRegardless() as T

myBlockBuilder.dropsItselfRegardless();
```

:::

:::group{name=dropsLike}

Return Type: T

```zenscript
BlockBuilder.dropsLike(reference as BlockReference) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| reference | [BlockReference](/mods/contenttweaker/object/vanilla/BlockReference) |


:::

:::group{name=dropsNormally}

Return Type: T

```zenscript
// BlockBuilder.dropsNormally() as T

myBlockBuilder.dropsNormally();
```

:::

:::group{name=dynamicShape}

Return Type: T

```zenscript
// BlockBuilder.dynamicShape() as T

myBlockBuilder.dynamicShape();
```

:::

:::group{name=dynamicShape}

Return Type: T

```zenscript
BlockBuilder.dynamicShape(dynamic as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| dynamic   | boolean |


:::

:::group{name=explosionResistance}

Return Type: T

```zenscript
BlockBuilder.explosionResistance(explosionResistance as float) as T
```

|      Parameter      | Type  |
|---------------------|-------|
| explosionResistance | float |


:::

:::group{name=friction}

Return Type: T

```zenscript
BlockBuilder.friction(friction as float) as T
```

| Parameter | Type  |
|-----------|-------|
| friction  | float |


:::

:::group{name=generateCorrespondingItem}

Return Type: T

```zenscript
BlockBuilder.generateCorrespondingItem(enable as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| enable    | boolean |


:::

:::group{name=hasCollisions}

Return Type: T

```zenscript
BlockBuilder.hasCollisions(collisions as boolean) as T
```

| Parameter  |  Type   |
|------------|---------|
| collisions | boolean |


:::

:::group{name=jumpFactor}

Return Type: T

```zenscript
BlockBuilder.jumpFactor(jump as float) as T
```

| Parameter | Type  |
|-----------|-------|
| jump      | float |


:::

:::group{name=lightLevel}

Return Type: T

```zenscript
BlockBuilder.lightLevel(level as int) as T
```

| Parameter | Type |
|-----------|------|
| level     | int  |


:::

:::group{name=lightLevel}

Return Type: T

```zenscript
BlockBuilder.lightLevel(lightLevelComputer as LightLevelComputer) as T
```

|     Parameter      |                                           Type                                            |
|--------------------|-------------------------------------------------------------------------------------------|
| lightLevelComputer | [LightLevelComputer](/mods/contenttweaker/object/vanilla/property/fun/LightLevelComputer) |


:::

:::group{name=material}

Return Type: T

```zenscript
BlockBuilder.material(reference as Reference<Material>) as T
```

| Parameter |                                                    Type                                                    |
|-----------|------------------------------------------------------------------------------------------------------------|
| reference | [Reference](/mods/contenttweaker/object/Reference)&lt;[Material](/vanilla/api/block/material/Material)&gt; |


:::

:::group{name=noCollisions}

Return Type: T

```zenscript
// BlockBuilder.noCollisions() as T

myBlockBuilder.noCollisions();
```

:::

:::group{name=noCorrespondingItem}

Return Type: T

```zenscript
// BlockBuilder.noCorrespondingItem() as T

myBlockBuilder.noCorrespondingItem();
```

:::

:::group{name=noDrops}

Return Type: T

```zenscript
// BlockBuilder.noDrops() as T

myBlockBuilder.noDrops();
```

:::

:::group{name=noOcclusion}

Return Type: T

```zenscript
// BlockBuilder.noOcclusion() as T

myBlockBuilder.noOcclusion();
```

:::

:::group{name=occludes}

Return Type: T

```zenscript
BlockBuilder.occludes(occlude as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| occlude   | boolean |


:::

:::group{name=overridingMaterialColor}

Return Type: T

```zenscript
BlockBuilder.overridingMaterialColor(finder as MaterialColorFinder) as T
```

| Parameter |                                            Type                                             |
|-----------|---------------------------------------------------------------------------------------------|
| finder    | [MaterialColorFinder](/mods/contenttweaker/object/vanilla/property/fun/MaterialColorFinder) |


:::

:::group{name=requiresToolToDrop}

Return Type: T

```zenscript
// BlockBuilder.requiresToolToDrop() as T

myBlockBuilder.requiresToolToDrop();
```

:::

:::group{name=requiresToolToDrop}

Return Type: T

```zenscript
BlockBuilder.requiresToolToDrop(requiresTool as boolean) as T
```

|  Parameter   |  Type   |
|--------------|---------|
| requiresTool | boolean |


:::

:::group{name=sound}

Return Type: T

```zenscript
BlockBuilder.sound(reference as Reference<SoundType>) as T
```

| Parameter |                                                Type                                                 |
|-----------|-----------------------------------------------------------------------------------------------------|
| reference | [Reference](/mods/contenttweaker/object/Reference)&lt;[SoundType](/vanilla/api/sound/SoundType)&gt; |


:::

:::group{name=speedFactor}

Return Type: T

```zenscript
BlockBuilder.speedFactor(speed as float) as T
```

| Parameter | Type  |
|-----------|-------|
| speed     | float |


:::

:::group{name=strength}

Return Type: T

```zenscript
BlockBuilder.strength(strength as float) as T
```

| Parameter | Type  |
|-----------|-------|
| strength  | float |


:::

:::group{name=strength}

Return Type: T

```zenscript
BlockBuilder.strength(destroyTime as float, explosionResistance as float) as T
```

|      Parameter      | Type  |
|---------------------|-------|
| destroyTime         | float |
| explosionResistance | float |


:::

:::group{name=tab}

Return Type: T

```zenscript
BlockBuilder.tab(reference as CreativeTabReference) as T
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| reference | [CreativeTabReference](/mods/contenttweaker/object/vanilla/CreativeTabReference) |


:::

:::group{name=ticksRandomly}

Return Type: T

```zenscript
// BlockBuilder.ticksRandomly() as T

myBlockBuilder.ticksRandomly();
```

:::

:::group{name=ticksRandomly}

Return Type: T

```zenscript
BlockBuilder.ticksRandomly(ticksRandomly as boolean) as T
```

|   Parameter   |  Type   |
|---------------|---------|
| ticksRandomly | boolean |


:::



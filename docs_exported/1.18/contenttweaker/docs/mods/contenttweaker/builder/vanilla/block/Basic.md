# Basic

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.builder.vanilla.block.Basic;
```


## Extending BlockBuilder&lt;Basic&gt;

Basic extends [BlockBuilder](/mods/contenttweaker/builder/vanilla/block/BlockBuilder)&lt;[Basic](/mods/contenttweaker/builder/vanilla/block/Basic)&gt;. That means all methods available in [BlockBuilder](/mods/contenttweaker/builder/vanilla/block/BlockBuilder)&lt;[Basic](/mods/contenttweaker/builder/vanilla/block/Basic)&gt; are also available in Basic

## Methods

:::group{name=air}

Return Type: T

```zenscript
// Basic.air() as T

myBasic.air();
```

:::

:::group{name=air}

Return Type: T

```zenscript
Basic.air(air as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| air       | boolean |


:::

:::group{name=breakInstantly}

Return Type: T

```zenscript
// Basic.breakInstantly() as T

myBasic.breakInstantly();
```

:::

:::group{name=build}

Return Type: [BlockReference](/mods/contenttweaker/object/vanilla/BlockReference)

```zenscript
Basic.build(name as string) as BlockReference
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=cloning}

Return Type: T

```zenscript
Basic.cloning(properties as BlockProperties) as T
```

| Parameter  |                                      Type                                       |
|------------|---------------------------------------------------------------------------------|
| properties | [BlockProperties](/mods/contenttweaker/object/vanilla/property/BlockProperties) |


:::

:::group{name=destroyTime}

Return Type: T

```zenscript
Basic.destroyTime(destroyTime as float) as T
```

|  Parameter  | Type  |
|-------------|-------|
| destroyTime | float |


:::

:::group{name=dropsFrom}

Return Type: T

```zenscript
Basic.dropsFrom(drops as ResourceLocation) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| drops     | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |


:::

:::group{name=dropsItselfRegardless}

Return Type: T

```zenscript
// Basic.dropsItselfRegardless() as T

myBasic.dropsItselfRegardless();
```

:::

:::group{name=dropsLike}

Return Type: T

```zenscript
Basic.dropsLike(reference as BlockReference) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| reference | [BlockReference](/mods/contenttweaker/object/vanilla/BlockReference) |


:::

:::group{name=dropsNormally}

Return Type: T

```zenscript
// Basic.dropsNormally() as T

myBasic.dropsNormally();
```

:::

:::group{name=dynamicShape}

Return Type: T

```zenscript
// Basic.dynamicShape() as T

myBasic.dynamicShape();
```

:::

:::group{name=dynamicShape}

Return Type: T

```zenscript
Basic.dynamicShape(dynamic as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| dynamic   | boolean |


:::

:::group{name=explosionResistance}

Return Type: T

```zenscript
Basic.explosionResistance(explosionResistance as float) as T
```

|      Parameter      | Type  |
|---------------------|-------|
| explosionResistance | float |


:::

:::group{name=friction}

Return Type: T

```zenscript
Basic.friction(friction as float) as T
```

| Parameter | Type  |
|-----------|-------|
| friction  | float |


:::

:::group{name=generateCorrespondingItem}

Return Type: T

```zenscript
Basic.generateCorrespondingItem(enable as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| enable    | boolean |


:::

:::group{name=hasCollisions}

Return Type: T

```zenscript
Basic.hasCollisions(collisions as boolean) as T
```

| Parameter  |  Type   |
|------------|---------|
| collisions | boolean |


:::

:::group{name=jumpFactor}

Return Type: T

```zenscript
Basic.jumpFactor(jump as float) as T
```

| Parameter | Type  |
|-----------|-------|
| jump      | float |


:::

:::group{name=lightLevel}

Return Type: T

```zenscript
Basic.lightLevel(level as int) as T
```

| Parameter | Type |
|-----------|------|
| level     | int  |


:::

:::group{name=lightLevel}

Return Type: T

```zenscript
Basic.lightLevel(lightLevelComputer as LightLevelComputer) as T
```

|     Parameter      |                                           Type                                            |
|--------------------|-------------------------------------------------------------------------------------------|
| lightLevelComputer | [LightLevelComputer](/mods/contenttweaker/object/vanilla/property/fun/LightLevelComputer) |


:::

:::group{name=material}

Return Type: T

```zenscript
Basic.material(reference as Reference<Material>) as T
```

| Parameter |                                                    Type                                                    |
|-----------|------------------------------------------------------------------------------------------------------------|
| reference | [Reference](/mods/contenttweaker/object/Reference)&lt;[Material](/vanilla/api/block/material/Material)&gt; |


:::

:::group{name=noCollisions}

Return Type: T

```zenscript
// Basic.noCollisions() as T

myBasic.noCollisions();
```

:::

:::group{name=noCorrespondingItem}

Return Type: T

```zenscript
// Basic.noCorrespondingItem() as T

myBasic.noCorrespondingItem();
```

:::

:::group{name=noDrops}

Return Type: T

```zenscript
// Basic.noDrops() as T

myBasic.noDrops();
```

:::

:::group{name=noOcclusion}

Return Type: T

```zenscript
// Basic.noOcclusion() as T

myBasic.noOcclusion();
```

:::

:::group{name=occludes}

Return Type: T

```zenscript
Basic.occludes(occlude as boolean) as T
```

| Parameter |  Type   |
|-----------|---------|
| occlude   | boolean |


:::

:::group{name=overridingMaterialColor}

Return Type: T

```zenscript
Basic.overridingMaterialColor(finder as MaterialColorFinder) as T
```

| Parameter |                                            Type                                             |
|-----------|---------------------------------------------------------------------------------------------|
| finder    | [MaterialColorFinder](/mods/contenttweaker/object/vanilla/property/fun/MaterialColorFinder) |


:::

:::group{name=requiresToolToDrop}

Return Type: T

```zenscript
// Basic.requiresToolToDrop() as T

myBasic.requiresToolToDrop();
```

:::

:::group{name=requiresToolToDrop}

Return Type: T

```zenscript
Basic.requiresToolToDrop(requiresTool as boolean) as T
```

|  Parameter   |  Type   |
|--------------|---------|
| requiresTool | boolean |


:::

:::group{name=sound}

Return Type: T

```zenscript
Basic.sound(reference as Reference<SoundType>) as T
```

| Parameter |                                                Type                                                 |
|-----------|-----------------------------------------------------------------------------------------------------|
| reference | [Reference](/mods/contenttweaker/object/Reference)&lt;[SoundType](/vanilla/api/sound/SoundType)&gt; |


:::

:::group{name=speedFactor}

Return Type: T

```zenscript
Basic.speedFactor(speed as float) as T
```

| Parameter | Type  |
|-----------|-------|
| speed     | float |


:::

:::group{name=strength}

Return Type: T

```zenscript
Basic.strength(strength as float) as T
```

| Parameter | Type  |
|-----------|-------|
| strength  | float |


:::

:::group{name=strength}

Return Type: T

```zenscript
Basic.strength(destroyTime as float, explosionResistance as float) as T
```

|      Parameter      | Type  |
|---------------------|-------|
| destroyTime         | float |
| explosionResistance | float |


:::

:::group{name=tab}

Return Type: T

```zenscript
Basic.tab(reference as CreativeTabReference) as T
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| reference | [CreativeTabReference](/mods/contenttweaker/object/vanilla/CreativeTabReference) |


:::

:::group{name=ticksRandomly}

Return Type: T

```zenscript
// Basic.ticksRandomly() as T

myBasic.ticksRandomly();
```

:::

:::group{name=ticksRandomly}

Return Type: T

```zenscript
Basic.ticksRandomly(ticksRandomly as boolean) as T
```

|   Parameter   |  Type   |
|---------------|---------|
| ticksRandomly | boolean |


:::



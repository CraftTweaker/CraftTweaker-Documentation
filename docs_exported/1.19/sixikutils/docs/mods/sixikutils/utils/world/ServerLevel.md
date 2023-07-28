# ServerLevel

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.ServerLevel;
```


## Extending Level

ServerLevel extends [Level](/mods/sixikutils/pmmo/server/world). That means all methods available in [Level](/mods/sixikutils/pmmo/server/world) are also available in ServerLevel

## Methods

:::group{name=createOrExtendRaid}

```zenscript
ServerLevel.createOrExtendRaid(player as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=getAbsoluteMaxWorldBorderSize}

Return Type: int

```zenscript
// ServerLevel.getAbsoluteMaxWorldBorderSize() as int

myServerLevel.getAbsoluteMaxWorldBorderSize();
```

:::

:::group{name=getChunkMaxBlockX}

Return Type: int

```zenscript
ServerLevel.getChunkMaxBlockX(pos as BlockPos) as int
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getChunkMaxBlockZ}

Return Type: int

```zenscript
ServerLevel.getChunkMaxBlockZ(pos as BlockPos) as int
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getChunkMinBlockX}

Return Type: int

```zenscript
ServerLevel.getChunkMinBlockX(pos as BlockPos) as int
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getDamagePerBlock}

Return Type: double

```zenscript
// ServerLevel.getDamagePerBlock() as double

myServerLevel.getDamagePerBlock();
```

:::

:::group{name=getDamageSafeZone}

Return Type: double

```zenscript
// ServerLevel.getDamageSafeZone() as double

myServerLevel.getDamageSafeZone();
```

:::

:::group{name=getDifficultyIndex}

Return Type: int

```zenscript
// ServerLevel.getDifficultyIndex() as int

myServerLevel.getDifficultyIndex();
```

:::

:::group{name=getDifficultyKey}

Return Type: string

```zenscript
// ServerLevel.getDifficultyKey() as string

myServerLevel.getDifficultyKey();
```

:::

:::group{name=getDifficultyString}

Return Type: string

```zenscript
// ServerLevel.getDifficultyString() as string

myServerLevel.getDifficultyString();
```

:::

:::group{name=getDistanceToWorldBorder}

Return Type: double

```zenscript
ServerLevel.getDistanceToWorldBorder(entity as Entity) as double
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| entity    | [Entity](/mods/sixikutils/utils/entity/ExpandEntity) |


:::

:::group{name=getEntity}

Return Type: [Entity](/mods/sixikutils/utils/entity/ExpandEntity)

```zenscript
ServerLevel.getEntity(id as int) as Entity
```

| Parameter | Type |
|-----------|------|
| id        | int  |


:::

:::group{name=getEntity}

Return Type: [Entity](/mods/sixikutils/utils/entity/ExpandEntity)

```zenscript
ServerLevel.getEntity(id as string) as Entity
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=getGameRulesString}

Return Type: string

```zenscript
// ServerLevel.getGameRulesString() as string

myServerLevel.getGameRulesString();
```

:::

:::group{name=getHeight}

Return Type: int

```zenscript
// ServerLevel.getHeight() as int

myServerLevel.getHeight();
```

:::

:::group{name=getMaxBuildHeight}

Return Type: int

```zenscript
// ServerLevel.getMaxBuildHeight() as int

myServerLevel.getMaxBuildHeight();
```

:::

:::group{name=getMaxEntityRadius}

Return Type: double

```zenscript
// ServerLevel.getMaxEntityRadius() as double

myServerLevel.getMaxEntityRadius();
```

:::

:::group{name=getMaxLightLevel}

Return Type: int

```zenscript
// ServerLevel.getMaxLightLevel() as int

myServerLevel.getMaxLightLevel();
```

:::

:::group{name=getMaxLocalRawBrightness}

Return Type: int

```zenscript
ServerLevel.getMaxLocalRawBrightness(pos as BlockPos) as int
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getMoonBrightness}

Return Type: float

```zenscript
// ServerLevel.getMoonBrightness() as float

myServerLevel.getMoonBrightness();
```

:::

:::group{name=getMoonPhase}

Return Type: int

```zenscript
// ServerLevel.getMoonPhase() as int

myServerLevel.getMoonPhase();
```

:::

:::group{name=getOverworld}

Return Type: [ServerLevel](/mods/sixikutils/utils/world/ServerLevel)

```zenscript
// ServerLevel.getOverworld() as ServerLevel

myServerLevel.getOverworld();
```

:::

:::group{name=getRandomPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)

```zenscript
// ServerLevel.getRandomPlayer() as ServerPlayer

myServerLevel.getRandomPlayer();
```

:::

:::group{name=getRandomPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
ServerLevel.getRandomPos(t as int[]) as BlockPos
```

| Parameter | Type  |
|-----------|-------|
| t         | int[] |


:::

:::group{name=getSeaLevel}

Return Type: int

```zenscript
// ServerLevel.getSeaLevel() as int

myServerLevel.getSeaLevel();
```

:::

:::group{name=getStructureManager}

Return Type: [StructureTemplateManager](/mods/sixikutils/utils/world/StructureTemplateManager)

```zenscript
// ServerLevel.getStructureManager() as StructureTemplateManager

myServerLevel.getStructureManager();
```

:::

:::group{name=getWarningBlocks}

Return Type: int

```zenscript
// ServerLevel.getWarningBlocks() as int

myServerLevel.getWarningBlocks();
```

:::

:::group{name=getWarningTime}

Return Type: int

```zenscript
// ServerLevel.getWarningTime() as int

myServerLevel.getWarningTime();
```

:::

:::group{name=getWorldBorderCenterX}

Return Type: double

```zenscript
// ServerLevel.getWorldBorderCenterX() as double

myServerLevel.getWorldBorderCenterX();
```

:::

:::group{name=getWorldBorderCenterZ}

Return Type: double

```zenscript
// ServerLevel.getWorldBorderCenterZ() as double

myServerLevel.getWorldBorderCenterZ();
```

:::

:::group{name=getWorldBorderSize}

Return Type: double

```zenscript
// ServerLevel.getWorldBorderSize() as double

myServerLevel.getWorldBorderSize();
```

:::

:::group{name=setAbsoluteMaxWorldBorderSize}

```zenscript
ServerLevel.setAbsoluteMaxWorldBorderSize(size as int)
```

| Parameter | Type |
|-----------|------|
| size      | int  |


:::

:::group{name=setDamagePerBlock}

```zenscript
ServerLevel.setDamagePerBlock(damage as double)
```

| Parameter |  Type  |
|-----------|--------|
| damage    | double |


:::

:::group{name=setDamageSafeZone}

```zenscript
ServerLevel.setDamageSafeZone(damage as double)
```

| Parameter |  Type  |
|-----------|--------|
| damage    | double |


:::

:::group{name=setWarningBlocks}

```zenscript
ServerLevel.setWarningBlocks(warn as int)
```

| Parameter | Type |
|-----------|------|
| warn      | int  |


:::

:::group{name=setWarningTime}

```zenscript
ServerLevel.setWarningTime(time as int)
```

| Parameter | Type |
|-----------|------|
| time      | int  |


:::

:::group{name=setWorldBorderCenter}

```zenscript
ServerLevel.setWorldBorderCenter(x as double, z as double)
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| z         | double |


:::

:::group{name=setWorldBorderSize}

```zenscript
ServerLevel.setWorldBorderSize(size as double)
```

| Parameter |  Type  |
|-----------|--------|
| size      | double |


:::



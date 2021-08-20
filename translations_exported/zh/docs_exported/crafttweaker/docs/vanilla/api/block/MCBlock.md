# MCBlock #MC方块



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlock;
```


## Casters

| 结果类型                                                   | 是否隐藏  |
| ------------------------------------------------------ | ----- |
| [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | false |
| string                                                 | false |

## 方法

:::group{name=asItem}

Gets the Item representation of this Block.

 ***NOTE:*** Not all Blocks have Items, for instance, a Lit Redstone Lamp does not have an Item.

Returns: The Item representation of this Block.  
Return Type: [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

```zenscript
// MCBlock.asItem() as MCItemDefinition

<block:minecraft:grass_block>.asItem();
```

:::

:::group{name=canCollide}

Checks if entities can collide with this Block.

Returns: True if entities will collide with this Block. False otherwise.  
Return Type: boolean

```zenscript
// MCBlock.canCollide() as boolean

<block:minecraft:grass_block>.canCollide();
```

:::

:::group{name=canSpawnInBlock}

Checks if an entity can be spawned inside this Block.

 This is used to find valid spawn locations for players.

Returns: True if an entity can be spawned in this Block. False Otherwise.  
Return Type: boolean

```zenscript
// MCBlock.canSpawnInBlock() as boolean

<block:minecraft:grass_block>.canSpawnInBlock();
```

:::

:::group{name=getBlastResistance}

Gets the blast resistance of this Block.

Returns: The blast resistance of this Block.  
Return Type: float

```zenscript
// MCBlock.getBlastResistance() as float

<block:minecraft:grass_block>.getBlastResistance();
```

:::

:::group{name=getCommandString}

Gets the block bracket handler syntax for this Block.

 E.G.
 <code>
 <block:minecraft:dirt>
 </code>

Returns: The block bracket handler syntax for this Block.  
Return Type: string

```zenscript
// MCBlock.getCommandString() as string

<block:minecraft:grass_block>.getCommandString();
```

:::

:::group{name=getDefaultState}

Gets the default [MCBlockState](/vanilla/api/block/MCBlockState) of this Block.

Returns: The default [MCBlockState](/vanilla/api/block/MCBlockState) of this Block.  
Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCBlock.getDefaultState() as MCBlockState

<block:minecraft:grass_block>.getDefaultState();
```

:::

:::group{name=getHarvestLevel}

Gets the harvest level for this Block.

 NOTE: This will get the level for the default blockstate, you should use the BlockState specific method for a more accurate result!

Returns: The harvest tool for this Block.  
Return Type: int

```zenscript
// MCBlock.getHarvestLevel() as int

<block:minecraft:grass_block>.getHarvestLevel();
```

:::

:::group{name=getHarvestTool}

Gets the harvest tool for this Block.

 NOTE: This will get the tool for the default blockstate, you should use the BlockState specific method for a more accurate result!

Returns: The harvest tool for this Block.  
Return Type: [ToolType](/vanilla/api/tool/ToolType)?

```zenscript
// MCBlock.getHarvestTool() as ToolType?

<block:minecraft:grass_block>.getHarvestTool();
```

:::

:::group{name=getJumpFactor}

Gets the jump factor of this Block.

Returns: The jump factor of this Block.  
Return Type: float

```zenscript
// MCBlock.getJumpFactor() as float

<block:minecraft:grass_block>.getJumpFactor();
```

:::

:::group{name=getLootTable}

Gets the loot table id for this Block.

Returns: The loot table id for this Block.  
Return Type: string

```zenscript
// MCBlock.getLootTable() as string

<block:minecraft:grass_block>.getLootTable();
```

:::

:::group{name=getMaterial}

Gets the material of this Block.

Returns: The material of this Block.  
Return Type: [MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
// MCBlock.getMaterial() as MCMaterial

<block:minecraft:grass_block>.getMaterial();
```

:::

:::group{name=getRegistryName}

Gets the registry name of this block.

Returns: A ResourceLocation of the registry name of this block.  
Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
// MCBlock.getRegistryName() as MCResourceLocation

<block:minecraft:grass_block>.getRegistryName();
```

:::

:::group{name=getSlipperiness}

Gets the slipperiness of this Block.

Returns: The Slipperiness of this Block.  
Return Type: float

```zenscript
// MCBlock.getSlipperiness() as float

<block:minecraft:grass_block>.getSlipperiness();
```

:::

:::group{name=getSpeedFactor}

Gets the speed factor of this Block.

Returns: The speed factor of this Block.  
Return Type: float

```zenscript
// MCBlock.getSpeedFactor() as float

<block:minecraft:grass_block>.getSpeedFactor();
```

:::

:::group{name=getTags}

Gets all the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;s that contain this Block.

Returns: a List of [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;s that contain this Block.  
Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt;&gt;

```zenscript
// MCBlock.getTags() as stdlib.List<MCTag<MCBlock>>

<block:minecraft:grass_block>.getTags();
```

:::

:::group{name=getTranslationKey}

Gets the translation key that is used to localize this Block.

Returns: The unlocalized name of this block.  
Return Type: string

```zenscript
// MCBlock.getTranslationKey() as string

<block:minecraft:grass_block>.getTranslationKey();
```

:::

:::group{name=getValidStates}

Gets a list of valid [MCBlockState](/vanilla/api/block/MCBlockState)s for this Block.

Returns: A list of valid [MCBlockState](/vanilla/api/block/MCBlockState)s for this Block.  
Return Type: stdlib.List&lt;[MCBlockState](/vanilla/api/block/MCBlockState)&gt;

```zenscript
// MCBlock.getValidStates() as stdlib.List<MCBlockState>

<block:minecraft:grass_block>.getValidStates();
```

:::

:::group{name=isInTag}

Checks if this Block is in the given [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;.

Returns: True if this Block is in the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;. False otherwise.  
Return Type: boolean

```zenscript
MCBlock.isInTag(tag as MCTag<MCBlock>) as boolean
```

| 参数  | 类型                                                                                        | 描述                                                                          |
| --- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| tag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt; | The [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; to check against. |


:::

:::group{name=isVariableOpacity}

Checks if the opacity of this block is different in different areas of the Block.

Returns: True if this Block has variable opacity. False otherwise.  
Return Type: boolean

```zenscript
// MCBlock.isVariableOpacity() as boolean

<block:minecraft:grass_block>.isVariableOpacity();
```

:::

:::group{name=matchesBlock}

Checks whether this Block matches another Block.

Returns: True if this Block matches the other Block. False otherwise.  
Return Type: boolean

```zenscript
MCBlock.matchesBlock(other as MCBlock) as boolean
```

| 参数    | 类型                                          | 描述                                              |
| ----- | ------------------------------------------- | ----------------------------------------------- |
| other | [MCBlock #MC方块](/vanilla/api/block/MCBlock) | The other Block to check if this Block matches. |


:::

:::group{name=setBlastResistance}

Sets the blast resistance of this Block.

Return Type: void

```zenscript
// MCBlock.setBlastResistance(resistance as float) as void

<block:minecraft:grass_block>.setBlastResistance(2);
```

| 参数         | 类型    | 描述                                      |
| ---------- | ----- | --------------------------------------- |
| resistance | float | The new blast resistance of this Block. |


:::

:::group{name=setCanCollide}

Sets whether entities can collide with this Block.

Return Type: void

```zenscript
// MCBlock.setCanCollide(canCollide as boolean) as void

<block:minecraft:grass_block>.setCanCollide(true);
```

| 参数         | 类型      | 描述                                    |
| ---------- | ------- | ------------------------------------- |
| canCollide | boolean | Can entities collide with this Block. |


:::

:::group{name=setHarvestLevel}

Sets the harvest level for this Block.

Return Type: void

```zenscript
// MCBlock.setHarvestLevel(level as int) as void

<block:minecraft:grass_block>.setHarvestLevel(2);
```

| 参数    | 类型  | 描述                     |
| ----- | --- | ---------------------- |
| level | int | the new harvest level. |


:::

:::group{name=setHarvestTool}

Sets the harvest tool for this Block.

Return Type: void

```zenscript
// MCBlock.setHarvestTool(type as ToolType?) as void

<block:minecraft:grass_block>.setHarvestTool(<tooltype:axe>);
```

| 参数 | 类型                                      | 描述                |
| -- | --------------------------------------- | ----------------- |
| 类型 | [ToolType](/vanilla/api/tool/ToolType)? | The new tooltype. |


:::

:::group{name=setJumpFactor}

Sets the jump factor of this Block.

Return Type: void

```zenscript
// MCBlock.setJumpFactor(jumpFactor as float) as void

<block:minecraft:grass_block>.setJumpFactor(2);
```

| 参数         | 类型    | 描述                                 |
| ---------- | ----- | ---------------------------------- |
| jumpFactor | float | The new jump factor of this Block. |


:::

:::group{name=setMaterial}

Sets the material of this Block.

Return Type: void

```zenscript
// MCBlock.setMaterial(material as MCMaterial) as void

<block:minecraft:grass_block>.setMaterial(<blockmaterial:earth>);
```

| 参数       | 类型                                                         | 描述                              |
| -------- | ---------------------------------------------------------- | ------------------------------- |
| material | [MCMaterial #MC材料](/vanilla/api/block/material/MCMaterial) | The new material of this Block. |


:::

:::group{name=setSlipperiness}

Sets the slipperiness of this Block.

Return Type: void

```zenscript
// MCBlock.setSlipperiness(slipperiness as float) as void

<block:minecraft:grass_block>.setSlipperiness(2);
```

| 参数           | 类型    | 描述                                  |
| ------------ | ----- | ----------------------------------- |
| slipperiness | float | The new slipperiness of this Block. |


:::

:::group{name=setSpeedFactor}

Sets the speed factor of this Block.

Return Type: void

```zenscript
// MCBlock.setSpeedFactor(speedFactor as float) as void

<block:minecraft:grass_block>.setSpeedFactor(2);
```

| 参数          | 类型    | 描述                                  |
| ----------- | ----- | ----------------------------------- |
| speedFactor | float | The new speed factor of this Block. |


:::


## 参数

| 名称              | 类型                                                                                                                       | 可获得  | 可设置   | 描述                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ---- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blastResistance | float                                                                                                                    | true | true  | Gets the blast resistance of this Block.                                                                                                                                                                             |
| canCollide      | boolean                                                                                                                  | true | true  | Checks if entities can collide with this Block.                                                                                                                                                                      |
| commandString   | string                                                                                                                   | true | false | Gets the block bracket handler syntax for this Block. <br />  <br />  E.G. <br />  <code> <br />  <block:minecraft:dirt> <br />  </code>                                                                                         |
| defaultState    | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState)                                                                  | true | false | Gets the default [MCBlockState](/vanilla/api/block/MCBlockState) of this Block.                                                                                                                                      |
| harvestLevel    | int                                                                                                                      | true | true  | Gets the harvest level for this Block. <br />  <br />  NOTE: <br />  This will get the level for the default blockstate, you should use the BlockState specific method for a more accurate result! |
| harvestTool     | [ToolType](/vanilla/api/tool/ToolType)?                                                                                  | true | true  | Gets the harvest tool for this Block. <br />  <br />  NOTE: <br />  This will get the tool for the default blockstate, you should use the BlockState specific method for a more accurate result!   |
| jumpFactor      | float                                                                                                                    | true | true  | Gets the jump factor of this Block.                                                                                                                                                                                  |
| lootTable       | string                                                                                                                   | true | false | Gets the loot table id for this Block.                                                                                                                                                                               |
| material        | [MCMaterial #MC材料](/vanilla/api/block/material/MCMaterial)                                                               | true | true  | Gets the material of this Block.                                                                                                                                                                                     |
| registryName    | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)                                                               | true | false | Gets the registry name of this block.                                                                                                                                                                                |
| slipperiness    | float                                                                                                                    | true | true  | Gets the slipperiness of this Block.                                                                                                                                                                                 |
| speedFactor     | float                                                                                                                    | true | true  | Gets the speed factor of this Block.                                                                                                                                                                                 |
| tags            | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt;&gt; | true | false | Gets all the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;s that contain this Block.                                                                                                                         |
| translationKey  | string                                                                                                                   | true | false | Gets the translation key that is used to localize this Block.                                                                                                                                                        |
| validStates     | stdlib.List&lt;[MCBlockState](/vanilla/api/block/MCBlockState)&gt;                                           | true | false | Gets a list of valid [MCBlockState](/vanilla/api/block/MCBlockState)s for this Block.                                                                                                                                |
| variableOpacity | boolean                                                                                                                  | true | false | Checks if the opacity of this block is different in different areas of the Block.                                                                                                                                    |


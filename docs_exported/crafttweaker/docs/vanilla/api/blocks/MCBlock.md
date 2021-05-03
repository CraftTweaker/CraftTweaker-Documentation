# MCBlock

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.blocks.MCBlock;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | false |
| string | false |

## Methods

:::group{name=asItem}

Gets the Item representation of this Block.

 ***NOTE:*** Not all Blocks have Items, for instance, a Lit Redstone Lamp does not have an Item.

Return Type: [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

```zenscript
// MCBlock.asItem() as MCItemDefinition

myMCBlock.asItem();
```

:::

:::group{name=canSpawnInBlock}

Checks if an entity can be spawned inside this Block.

 This is used to find valid spawn locations for players.

Return Type: boolean

```zenscript
// MCBlock.canSpawnInBlock() as boolean

myMCBlock.canSpawnInBlock();
```

:::

:::group{name=getCommandString}

Gets the block bracket handler syntax for this Block.

 E.G.
 <code>
 <block:minecraft:dirt>
 </code>

Return Type: string

```zenscript
// MCBlock.getCommandString() as string

myMCBlock.getCommandString();
```

:::

:::group{name=getDefaultState}

Gets the default [MCBlockState](/vanilla/api/blocks/MCBlockState) of this Block.

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
// MCBlock.getDefaultState() as MCBlockState

myMCBlock.getDefaultState();
```

:::

:::group{name=getJumpFactor}

Gets the jump factor of this Block.

Return Type: float

```zenscript
// MCBlock.getJumpFactor() as float

myMCBlock.getJumpFactor();
```

:::

:::group{name=getLootTable}

Gets the loot table id for this Block.

Return Type: string

```zenscript
// MCBlock.getLootTable() as string

myMCBlock.getLootTable();
```

:::

:::group{name=getSlipperiness}

Gets the slipperiness of this Block.

Return Type: float

```zenscript
// MCBlock.getSlipperiness() as float

myMCBlock.getSlipperiness();
```

:::

:::group{name=getSpeedFactor}

Gets the speed factor of this Block.

Return Type: float

```zenscript
// MCBlock.getSpeedFactor() as float

myMCBlock.getSpeedFactor();
```

:::

:::group{name=getTags}

Gets all thr [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;s that contain this Block.

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt;&gt;

```zenscript
// MCBlock.getTags() as stdlib.List<MCTag<MCBlock>>

myMCBlock.getTags();
```

:::

:::group{name=getTranslationKey}

Gets the translation key that is used to localize this Block.

Return Type: string

```zenscript
// MCBlock.getTranslationKey() as string

myMCBlock.getTranslationKey();
```

:::

:::group{name=getValidStates}

Gets a list of valid [MCBlockState](/vanilla/api/blocks/MCBlockState)s for this Block.

Return Type: stdlib.List&lt;[MCBlockState](/vanilla/api/blocks/MCBlockState)&gt;

```zenscript
// MCBlock.getValidStates() as stdlib.List<MCBlockState>

myMCBlock.getValidStates();
```

:::

:::group{name=isInTag}

Checks if this Block is in the given [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;.

Return Type: boolean

```zenscript
MCBlock.isInTag(tag as MCTag<MCBlock>) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt; | The [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; to check against. |


:::

:::group{name=isVariableOpacity}

Checks if the opacity of this block is different in different areas of the Block.

Return Type: boolean

```zenscript
// MCBlock.isVariableOpacity() as boolean

myMCBlock.isVariableOpacity();
```

:::

:::group{name=matchesBlock}

Checks whether this Block matches another Block.

Return Type: boolean

```zenscript
MCBlock.matchesBlock(other as MCBlock) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCBlock](/vanilla/api/blocks/MCBlock) | The other Block to check if this Block matches. |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| commandString | string | true | false | Gets the block bracket handler syntax for this Block. <br />  <br />  E.G. <br />  <code> <br />  <block:minecraft:dirt> <br />  </code> |
| defaultState | [MCBlockState](/vanilla/api/blocks/MCBlockState) | true | false | Gets the default [MCBlockState](/vanilla/api/blocks/MCBlockState) of this Block. |
| jumpFactor | float | true | false | Gets the jump factor of this Block. |
| lootTable | string | true | false | Gets the loot table id for this Block. |
| slipperiness | float | true | false | Gets the slipperiness of this Block. |
| speedFactor | float | true | false | Gets the speed factor of this Block. |
| tags | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt;&gt; | true | false | Gets all thr [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;s that contain this Block. |
| translationKey | string | true | false | Gets the translation key that is used to localize this Block. |
| validStates | stdlib.List&lt;[MCBlockState](/vanilla/api/blocks/MCBlockState)&gt; | true | false | Gets a list of valid [MCBlockState](/vanilla/api/blocks/MCBlockState)s for this Block. |
| variableOpacity | boolean | true | false | Checks if the opacity of this block is different in different areas of the Block. |


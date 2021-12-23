# WorldTransmutation

This class was added by a mod with mod-id `projecte`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.projecte.WorldTransmutation;
```

## Static Methods

:::group{name=add}

Adds an in world transmutation "recipe".

Return Type: void

```zenscript
WorldTransmutation.add(input as MCBlockState, output as MCBlockState, sneakOutput as MCBlockState) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| input | [MCBlockState](/vanilla/api/block/MCBlockState) | [MCBlockState](/vanilla/api/block/MCBlockState) representing the input or target state. | false |  |
| output | [MCBlockState](/vanilla/api/block/MCBlockState) | [MCBlockState](/vanilla/api/block/MCBlockState) representing the output state. | false |  |
| sneakOutput | [MCBlockState](/vanilla/api/block/MCBlockState) | Optional [MCBlockState](/vanilla/api/block/MCBlockState) representing the output state when sneaking. | true |  |

:::

:::group{name=remove}

Removes an existing in world transmutation "recipe".

Return Type: void

```zenscript
WorldTransmutation.remove(input as MCBlockState, output as MCBlockState, sneakOutput as MCBlockState) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| input | [MCBlockState](/vanilla/api/block/MCBlockState) | [MCBlockState](/vanilla/api/block/MCBlockState) representing the input or target state. | false |  |
| output | [MCBlockState](/vanilla/api/block/MCBlockState) | [MCBlockState](/vanilla/api/block/MCBlockState) representing the output state. | false |  |
| sneakOutput | [MCBlockState](/vanilla/api/block/MCBlockState) | Optional [MCBlockState](/vanilla/api/block/MCBlockState) representing the output state when sneaking. | true |  |

:::

:::group{name=removeAll}

Removes all existing in world transmutation "recipes".

Return Type: void

```zenscript
// WorldTransmutation.removeAll() as void

WorldTransmutation.removeAll();
```

:::


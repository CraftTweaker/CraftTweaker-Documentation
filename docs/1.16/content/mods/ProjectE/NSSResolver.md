# NSSResolver

This class was added by a mod with mod-id `projecte`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.projecte.NSSResolver;
```

## Static Methods

:::group{name=deserialize}

Creates a [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) based on its string
representation.

Returns: A [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) based on its string
representation.  
Return Type: [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)

```zenscript
NSSResolver.deserialize(representation as string) as NormalizedSimpleStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| representation | string | String representation as would be found in custom_emc.json |

:::

:::group{name=fromFluid}

Create a [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a
given [MCFluid](/vanilla/api/fluid/MCFluid).

Returns: A [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a
given [MCFluid](/vanilla/api/fluid/MCFluid).  
Return Type: [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)

```zenscript
NSSResolver.fromFluid(fluid as MCFluid) as NormalizedSimpleStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| fluid | [MCFluid](/vanilla/api/fluid/MCFluid) | Fluid to represent |

:::

:::group{name=fromFluid}

Creates a [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) that matches the given
stack's fluid and NBT.

Returns: A [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) that matches the given
stack's fluid and NBT.  
Return Type: [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)

```zenscript
NSSResolver.fromFluid(stack as IFluidStack) as NormalizedSimpleStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IFluidStack](/vanilla/api/fluid/IFluidStack) | Stack to match the fluid and NBT of |

:::

:::group{name=fromFluidTag}

Create a [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a given
MCTag<Fluid>.

Returns: A [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a given
MCTag<Fluid>.  
Return Type: [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)

```zenscript
NSSResolver.fromFluidTag(tag as MCTag<MCFluid>) as NormalizedSimpleStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt; | Fluid Tag to represent |

:::

:::group{name=fromItem}

Create a [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a
given [MCItemDefinition](/vanilla/api/item/MCItemDefinition).

Returns: A [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a
given [MCItemDefinition](/vanilla/api/item/MCItemDefinition).  
Return Type: [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)

```zenscript
NSSResolver.fromItem(item as MCItemDefinition) as NormalizedSimpleStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | Item to represent |

:::

:::group{name=fromItem}

Creates a [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) that matches the given
stack's item and NBT.

Returns: A [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) that matches the given
stack's item and NBT.  
Return Type: [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)

```zenscript
NSSResolver.fromItem(stack as IItemStack) as NormalizedSimpleStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | Stack to match the item and NBT of |

:::

:::group{name=fromItemTag}

Create a [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a given
MCTag<Item>.

Returns: A [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing a given
MCTag<Item>.  
Return Type: [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)

```zenscript
NSSResolver.fromItemTag(tag as MCTag<MCItemDefinition>) as NormalizedSimpleStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | Item Tag to represent |

:::


# ModuleHelper

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.gear.ModuleHelper;
```

## Static Methods

:::group{name=getSupported}

Gets all the module types a given item support.

Returns: Set of supported module types.  
Return Type: Set&lt;[ModuleData](/mods/Mekanism/api/gear/ModuleData)&gt;

```zenscript
ModuleHelper.getSupported(container as ItemStack) as Set<ModuleData>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| container | [ItemStack](/vanilla/api/item/ItemStack) | Module container, for example a Meka-Tool or MekaSuit piece. |

:::

:::group{name=getSupported}

Helper to get the various items that support a given module type.

Returns: Set of items that support the given module type.  
Return Type: Set&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt;

```zenscript
ModuleHelper.getSupported(type as ModuleData) as Set<MCItemDefinition>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| type | [ModuleData](/mods/Mekanism/api/gear/ModuleData) | Module type. |

:::

:::group{name=isEnabled}

Helper method to check if an item has a module installed and the module is enabled.

Returns: `true` if the item has the module installed and enabled.  
Return Type: boolean

```zenscript
ModuleHelper.isEnabled(container as ItemStack, type as ModuleData) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| container | [ItemStack](/vanilla/api/item/ItemStack) | Module container, for example a Meka-Tool or MekaSuit piece. |
| type | [ModuleData](/mods/Mekanism/api/gear/ModuleData) | Module type. |

:::

:::group{name=load}

Helper method to try and load a module from an item.

Returns: Module, or `null` if no module of the given type is installed.  
Return Type: [Module](/mods/Mekanism/api/gear/Module)&lt;MODULE&gt;?

```zenscript
ModuleHelper.load<MODULE>(container as ItemStack, type as ModuleData<MODULE>) as Module<MODULE>?
```

| Parameter | Type | Description |
|-----------|------|-------------|
| container | [ItemStack](/vanilla/api/item/ItemStack) | Module container, for example a Meka-Tool or MekaSuit piece. |
| type | [ModuleData](/mods/Mekanism/api/gear/ModuleData)&lt;MODULE&gt; | Module type. |
| MODULE |  | No Description Provided |

:::

:::group{name=loadAll}

Gets a list of all modules on an item stack.

Returns: List of modules on an item, or an empty list if the item doesn't support modules.  
Return Type: stdlib.List&lt;[Module](/mods/Mekanism/api/gear/Module)&gt;

```zenscript
ModuleHelper.loadAll(container as ItemStack) as stdlib.List<Module>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| container | [ItemStack](/vanilla/api/item/ItemStack) | Module container, for example a Meka-Tool or MekaSuit piece. |

:::

:::group{name=loadAllTypes}

Gets all the module types on an item stack.

Returns: Module types on an item.  
Return Type: Collection&lt;[ModuleData](/mods/Mekanism/api/gear/ModuleData)&gt;

```zenscript
ModuleHelper.loadAllTypes(container as ItemStack) as Collection<ModuleData>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| container | [ItemStack](/vanilla/api/item/ItemStack) | Module container, for example a Meka-Tool or MekaSuit piece. |

:::


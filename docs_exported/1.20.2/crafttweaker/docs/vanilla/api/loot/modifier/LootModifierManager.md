# LootModifierManager

Manager for loot modifiers.

 An instance of this manager can be obtained via the [LootManager](/vanilla/api/loot/LootManager).

 The main usage of this manager is for registering "global loot modifiers", also known as "loot modifiers" for
 short. A global loot modifier runs on the loot drop of every loot table (unless otherwise specified by conditions)
 and is as such able to modify it according either to predetermined parameters (e.g. replacing items) or via
 completely customized code that leverages the dropping context.

 For more information, refer to [ILootModifier](/vanilla/api/loot/modifier/ILootModifier).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.modifier.LootModifierManager;
```


## Methods

:::group{name=getAll}

Gets a list containing all currently registered loot modifiers.

Returns: A list containing all currently registered loot modifiers.  
Return Type: stdlib.List&lt;[ILootModifier](/vanilla/api/loot/modifier/ILootModifier)&gt;

```zenscript
// LootModifierManager.getAll() as stdlib.List<ILootModifier>

loot.modifiers.getAll();
```

:::

:::group{name=getAllNames}

Gets a list of all the names of the currently registered loot modifiers.

Returns: A list with all the names of the currently registered loot modifiers.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// LootModifierManager.getAllNames() as stdlib.List<ResourceLocation>

loot.modifiers.getAllNames();
```

:::

:::group{name=getByName}

Gets the loot modifier with the given name, if it exists.

 If no loot modifier with that name exists, a default no-op instance is returned.

Returns: The [ILootModifier](/vanilla/api/loot/modifier/ILootModifier) with the given name, or a default one if no such instance exists.  
Return Type: [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)

```zenscript
LootModifierManager.getByName(name as string) as ILootModifier
```

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| name      | string | The name of the loot modifier. |


:::

:::group{name=register}

Registers a new global loot modifier with the given name.

 The loot modifier will be run only when the given set of conditions is satisfied.

```zenscript
LootModifierManager.register(name as string, conditions as LootConditions, modifier as ILootModifier)
```

| Parameter  |                             Type                             |                                                              Description                                                              |
|------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| name       | string                                                       | The unique identifier for the loot modifier. It must be all lowercase and devoid of both spaces and <br />                    colons. |
| conditions | [LootConditions](/vanilla/api/loot/condition/LootConditions) | A set of conditions that restrict the context in which the loot modifier applies.                                                     |
| modifier   | [ILootModifier](/vanilla/api/loot/modifier/ILootModifier)    | The loot modifier itself. It may be created via [CommonLootModifiers](/vanilla/api/loot/modifier/CommonLootModifiers).                |


:::

:::group{name=removeAll}

Removes all loot modifiers that have been registered up to this point.

```zenscript
// LootModifierManager.removeAll()

loot.modifiers.removeAll();
```

:::

:::group{name=removeByModId}

Removes all loot modifiers that have been registered by the mod with the given ID.

```zenscript
LootModifierManager.removeByModId(modId as string)
```

| Parameter |  Type  | Description |
|-----------|--------|-------------|
| modId     | string | The mod ID. |


:::

:::group{name=removeByName}

Removes the loot modifier with the given name.

 The name may either contain a colon or not. If no colon is present, it is assumed that the loot modifier name
 is one of the modifiers that have been already registered in a script.

```zenscript
LootModifierManager.removeByName(name as string)
```

| Parameter |  Type  |               Description                |
|-----------|--------|------------------------------------------|
| name      | string | The name of the loot modifier to remove. |


:::

:::group{name=removeByRegex}

Removes all loot modifiers whose name matches the given regular expression.

 The entire name is taken into consideration for the match, effectively matching the format of a
 [ResourceLocation](/vanilla/api/resource/ResourceLocation).

```zenscript
LootModifierManager.removeByRegex(regex as string)
```

| Parameter |  Type  |           Description            |
|-----------|--------|----------------------------------|
| regex     | string | The regular expression to match. |


:::



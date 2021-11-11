# LootModifierManager

Manager for loot modifiers.

 An instance of this manager can be obtained via the [LootManager](/vanilla/api/loot/LootManager).

 The main usage of this manager is for registering "global loot modifiers", also known as "loot modifiers" for short.
 A global loot modifier runs on the loot drop of every loot table (unless otherwise specified by conditions) and is
 as such able to modify it according either to predetermined parameters (e.g. replacing items) or via completely
 customized code that leverages the dropping context.

 For more information, refer to [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.modifiers.LootModifierManager;
```


## Methods

:::group{name=getAll}

Gets a list containing all currently registered loot modifiers.

Returns: A list containing all currently registered loot modifiers.  
Return Type: stdlib.List&lt;[ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)&gt;

```zenscript
// LootModifierManager.getAll() as stdlib.List<ILootModifier>

loot.modifiers.getAll();
```

:::

:::group{name=getAllNames}

Gets a list of all the names of the currently registered loot modifiers.

Returns: A list with all the names of the currently registered loot modifiers.  
Return Type: stdlib.List&lt;string&gt;

```zenscript
// LootModifierManager.getAllNames() as stdlib.List<string>

loot.modifiers.getAllNames();
```

:::

:::group{name=getByName}

Gets the loot modifier with the given name, if it exists.

 If no loot modifier with that name exists, a default no-op instance is returned.

Returns: The [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) with the given name, or a default one if no such instance exists.  
Return Type: [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier)

```zenscript
LootModifierManager.getByName(name as string) as ILootModifier
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the loot modifier. |


:::

:::group{name=register}

Registers a new global loot modifier with the given name.

 The loot modifier will be run only when all conditions registered within the [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) pass,
 effectively as if they were merged with an 'AND' condition.

 This method is to be preferred instead of the method that takes a raw [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) array.

 It is suggested to provide a list of conditions that match as closely as possible the desired conditions rather
 than checking them manually in the modifier itself, since the game may perform additional optimizations.

Return Type: void

```zenscript
LootModifierManager.register(name as string, builder as LootConditionBuilder, modifier as ILootModifier) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The unique identifier for the loot modifier. It must be all lowercase and devoid of both spaces and <br />                  colons. |
| builder | [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) | A [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) representing a list of conditions that should be merged together <br />                  via 'AND'. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier itself. It may be created via [CommonLootModifiers](/vanilla/api/loot/modifiers/CommonLootModifiers). |


:::

:::group{name=register}

Registers a new global loot modifier with the given name.

 The loot modifier will be run only when all conditions pass, effectively as if they were merged with an 'AND'
 condition. An empty condition array (or a <code>null</code> one) indicates a lack of conditions, meaning that the
 loot modifier will be run on every loot table.

 It is nevertheless suggested to provide a list of conditions that match as closely as possible the desired
 conditions rather than checking them manually in the modifier itself, since the game may perform additional
 optimizations.

Return Type: void

```zenscript
LootModifierManager.register(name as string, conditions as ILootCondition?[], modifier as ILootModifier) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The unique identifier for the loot modifier. It must be all lowercase and devoid of both spaces and <br />                    colons. |
| conditions | [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)?[] | A set of conditions that restrict the context in which the loot modifier applies. It can be <br />                    empty or <code>null</code>, which indicates a lack of conditions. The conditions are all merged <br />                    together with an 'AND' connector. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier itself. It may be created via [CommonLootModifiers](/vanilla/api/loot/modifiers/CommonLootModifiers). |


:::

:::group{name=registerUnconditional}

Registers a new global loot modifier with the given name without providing any conditions.

 The loot modifier will be run for every loot table rolled in the entire game. It is thus suggested to use this
 method sparingly and to implement a very fast loot modifier.

Return Type: void

```zenscript
LootModifierManager.registerUnconditional(name as string, modifier as ILootModifier) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The unique identifier for the loot modifier. It must be all lowercase and devoid of both spaces and <br />                  colons. |
| modifier | [ILootModifier](/vanilla/api/loot/modifiers/ILootModifier) | The loot modifier itself. It may be created via [CommonLootModifiers](/vanilla/api/loot/modifiers/CommonLootModifiers). |


:::

:::group{name=removeAll}

Removes all loot modifiers that have been registered up to this point.

Return Type: void

```zenscript
// LootModifierManager.removeAll() as void

loot.modifiers.removeAll();
```

:::

:::group{name=removeByModId}

Removes all loot modifiers that have been registered by the mod with the given ID.

Return Type: void

```zenscript
LootModifierManager.removeByModId(modId as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modId | string | The mod ID. |


:::

:::group{name=removeByName}

Removes the loot modifier with the given name.

 The name may either contain a colon or not. If no colon is present, it is assumed that the loot modifier name is
 one of the modifiers that have been already registered in a script.

Return Type: void

```zenscript
LootModifierManager.removeByName(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | The name of the loot modifier to remove. |


:::

:::group{name=removeByRegex}

Removes all loot modifiers whose name matches the given regular expression.

 The entire name is taken into consideration for the match, effectively matching the format of a
 [MCResourceLocation](/vanilla/api/util/MCResourceLocation).

Return Type: void

```zenscript
LootModifierManager.removeByRegex(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | The regular expression to match. |


:::



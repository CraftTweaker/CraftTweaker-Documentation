# Json

Builder to create an arbitrary loot condition through a JSON-based structure.

 This builder allows to create arbitrary JSON structures, which can reference other mod-added loot conditions that do not provide native CraftTweaker support. The given JSON structure needs to be a valid JSON-object representation, meaning it needs to be an instance of [MapData](/vanilla/api/data/MapData). The JSON may or may not specify the type. If the type is specified then it must match the one given in the builder; otherwise the type is automatically added.

 The JSON structure along with the condition type is mandatory.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.Json;
```


## Implemented Interfaces
Json implements the following interfaces. That means all methods defined in these interfaces are also available in Json

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Static Methods

:::group{name=create}

Creates an [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) of the given <code>type</code> parsing the given <code>json</code>. <br />  <br />  The JSON must respect the constraints specified in the class documentation. It is suggested to use this method <br />  sparingly, preferring to instead create JSON conditions as needed from within a [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder). <br />  <br />  If no valid condition is found, or the JSON is invalid, an error gets thrown. <br />  <br />  This method is equivalent to <code>makeJson</code> in [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder).

Returns: An [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) instance built according to the given data, if possible.  
Return Type: [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)

```zenscript
Json.create(type as MCResourceLocation, json as IData) as ILootCondition
```

| Parameter | Type                                                        | Beschreibung                                                                                                       |
| --------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| type      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) identifying the type of the loot condition to create. |
| json      | [IData](/vanilla/api/data/IData)                            | The JSON data, according to the given constraints.                                                                 |


:::

:::group{name=create}

Creates an [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) of the given <code>type</code> parsing the given <code>json</code>. <br />  <br />  The name is treated as a [MCResourceLocation](/vanilla/api/util/MCResourceLocation), lacking the type safety of the bracket handler. For this <br />  reason, it's suggested to prefer the method with a [MCResourceLocation](/vanilla/api/util/MCResourceLocation) as parameter. <br />  <br />  The JSON must respect the constraints specified in the class documentation. It is suggested to use this method <br />  sparingly, preferring to instead create JSON conditions as needed from within a [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder). <br />  <br />  If no valid condition is found, or the JSON is invalid, an error gets thrown. <br />  <br />  This method is equivalent to <code>makeJson</code> in [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder).

Returns: An [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) instance built according to the given data, if possible.  
Return Type: [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)

```zenscript
Json.create(type as string, json as IData) as ILootCondition
```

| Parameter | Type                             | Beschreibung                                                                               |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| type      | string                           | A string in resource location format identifying the type of the loot condition to create. |
| json      | [IData](/vanilla/api/data/IData) | The JSON data, according to the given constraints.                                         |


:::

## Methoden

:::group{name=withJson}

Sets the type of the condition that will be built along with the JSON representation that will be parsed.

 The JSON must respect the constraints specified in the class documentation.

Returns: This builder for chaining.  
Return Type: [Json](/vanilla/api/loot/conditions/crafttweaker/Json)

```zenscript
Json.withJson(type as MCResourceLocation, json as IData) as Json
```

| Parameter | Type                                                        | Beschreibung                                                                                             |
| --------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| type      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) identifying the type of the loot condition. |
| json      | [IData](/vanilla/api/data/IData)                            | The JSON data, according to the given constraints.                                                       |


:::

:::group{name=withJson}

Sets the type of the condition that will be built along with the JSON representation that will be parsed.

 The name is treated as a [MCResourceLocation](/vanilla/api/util/MCResourceLocation), lacking the type safety of the bracket handler. For this reason, it's suggested to prefer the method with a [MCResourceLocation](/vanilla/api/util/MCResourceLocation) as parameter.

 The JSON must respect the constraints specified in the class documentation.

Returns: This builder for chaining.  
Return Type: [Json](/vanilla/api/loot/conditions/crafttweaker/Json)

```zenscript
Json.withJson(type as string, json as IData) as Json
```

| Parameter | Type                             | Beschreibung                                                                     |
| --------- | -------------------------------- | -------------------------------------------------------------------------------- |
| type      | string                           | A string in resource location format identifying the type of the loot condition. |
| json      | [IData](/vanilla/api/data/IData) | The JSON data, according to the given constraints.                               |


:::



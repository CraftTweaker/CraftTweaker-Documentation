# LootConditionBuilder

Manages the creation of one or multiple [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)s using the builders provided by [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder).

 Each instance of this class may handle the presence of more than one conditions. On the other hand, some builders may require the presence of at most one condition. Refer to their documentation for more information.

 This builder does not force any particular interpretation in case of multiple conditions being added: they may be merged together via 'AND', 'OR', or not merged together at all. It is up to the user of the builder to decide how the merges should happen.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.LootConditionBuilder;
```


## Static Methods

:::group{name=create}

Creates a new empty [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder).

Returns: The newly created instance.  
Return Type: [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder)

```zenscript
// LootConditionBuilder.create() as LootConditionBuilder

LootConditionBuilder.create();
```

:::

:::group{name=createForSingle}

Creates a new [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) and automatically adds a single condition of the specified type. <br />  <br />  This is merely a helper method to avoid multiple method calls and chains when the user needs to create a builder <br />  but only wants to add a single condition to it. It is effectively a call to <code>create</code> followed by one <br />  to <code>add</code>.

Returns: The newly created builder, already containing the created condition.  
Return Type: [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder)

```zenscript
LootConditionBuilder.createForSingle<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as LootConditionBuilder
```

| Параметр | Тип                                                                                 | Описание                                                     |
| -------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| lender   | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the given condition. |
| T        | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                      |


:::

:::group{name=createInAnd}

Creates a new [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) containing an [And](/vanilla/api/loot/conditions/crafttweaker/And). <br />  <br />  This ensures that, no matter what the underlying implementation may assume, the various conditions will be <br />  treated as part of an 'And' condition. Refer to [And](/vanilla/api/loot/conditions/crafttweaker/And) for more information.

Returns: The newly created instance, containing the 'And' condition.  
Return Type: [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder)

```zenscript
LootConditionBuilder.createInAnd(lender as Consumer<And>) as LootConditionBuilder
```

| Параметр | Тип                                                                              | Описание                                                                                                |
| -------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| lender   | Consumer&lt;[And](/vanilla/api/loot/conditions/crafttweaker/And)&gt; | A consumer used to configure an [And](/vanilla/api/loot/conditions/crafttweaker/And) condition builder. |


:::

:::group{name=createInOr}

Creates a new [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder) containing an [Or](/vanilla/api/loot/conditions/crafttweaker/Or). <br />  <br />  This ensures that, no matter what the underlying implementation may assume, the various conditions will be <br />  treated as part of an 'Or' condition. Refer to [Or](/vanilla/api/loot/conditions/crafttweaker/Or) for more information.

Returns: The newly created instance, containing the 'Or' condition.  
Return Type: [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder)

```zenscript
LootConditionBuilder.createInOr(lender as Consumer<Or>) as LootConditionBuilder
```

| Параметр | Тип                                                                            | Описание                                                                                              |
| -------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| lender   | Consumer&lt;[Or](/vanilla/api/loot/conditions/crafttweaker/Or)&gt; | A consumer used to configure an [Or](/vanilla/api/loot/conditions/crafttweaker/Or) condition builder. |


:::

:::group{name=makeJson}

Creates an [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) of the given <code>type</code> parsing the given <code>json</code>. <br />  <br />  The JSON must respect the constraints specified in the documentation of the [Json](/vanilla/api/loot/conditions/crafttweaker/Json) <br />  loot condition. <br />  <br />  If no valid condition is found, or the JSON is invalid, an error gets thrown.

Returns: An [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) instance built according to the given data, if possible.  
Return Type: [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)

```zenscript
LootConditionBuilder.makeJson(type as MCResourceLocation, data as IData) as ILootCondition
```

| Параметр | Тип                                                                      | Описание                                                                                                           |
| -------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| type     | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation) | A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) identifying the type of the loot condition to create. |
| data     | [IData](/vanilla/api/data/IData)                                         | The JSON data, according to the given constraints.                                                                 |


:::

:::group{name=makeJson}

Creates an [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) of the given <code>type</code> parsing the given <code>json</code>. <br />  <br />  The name is treated as a [MCResourceLocation](/vanilla/api/util/MCResourceLocation), lacking the type safety of the bracket handler. For this <br />  reason, it's suggested to prefer the method with a [MCResourceLocation](/vanilla/api/util/MCResourceLocation) as parameter. <br />  <br />  The JSON must respect the constraints specified in the documentation of the [Json](/vanilla/api/loot/conditions/crafttweaker/Json) <br />  loot condition. <br />  <br />  If no valid condition is found, or the JSON is invalid, an error gets thrown.

Returns: An [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) instance built according to the given data, if possible.  
Return Type: [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)

```zenscript
LootConditionBuilder.makeJson(type as string, data as IData) as ILootCondition
```

| Параметр | Тип                              | Описание                                                                                   |
| -------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| type     | string                           | A string in resource location format identifying the type of the loot condition to create. |
| data     | [IData](/vanilla/api/data/IData) | The JSON data, according to the given constraints.                                         |


:::

:::group{name=makeSingle}

Creates a new [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) of the given type, according to the parameters specified in the <br />  <code>lender</code>. <br />  <br />  In other words, a new [ILootCondition](/vanilla/api/loot/conditions/ILootCondition) is created based on the chosen [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder). <br />  <br />  This is particularly useful if the creation of a single loot condition is required and the user wants to use one <br />  of the already existing builders.

Returns: The condition created by the builder itself.  
Return Type: [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)

```zenscript
LootConditionBuilder.makeSingle<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as ILootCondition
```

| Параметр | Тип                                                                                 | Описание                                                     |
| -------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| lender   | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the given condition. |
| T        | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                      |


:::

## Методы

:::group{name=add}

Adds a new condition of the given type to the ones of this builder.

 The condition is built according to the defaults of the [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) specified. It is thus assumed that the default values lead to a well-formed and correct loot condition. If such isn't the case, then the method may behave erratically or throw an exception: refer to the two parameter version of <code>add</code>
 for the method that allows configuration.

Returns: This builder for chaining.  
Return Type: [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder)

```zenscript
LootConditionBuilder.add<T : ILootConditionTypeBuilder>() as LootConditionBuilder
```

| Параметр | Тип                                                                                 | Описание                                |
| -------- | ----------------------------------------------------------------------------------- | --------------------------------------- |
| T        | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself. |


:::

:::group{name=add}

Adds a new condition of the given type and configuration to the ones of this builder.

 The condition is built according to the specified [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) and configured according to the details given in <code>lender</code>. If the default configuration is satisfying, then the single parameter version of <code>add</code> may also be used.

Returns: This builder for chaining.  
Return Type: [LootConditionBuilder](/vanilla/api/loot/conditions/LootConditionBuilder)

```zenscript
LootConditionBuilder.add<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as LootConditionBuilder
```

| Параметр | Тип                                                                                 | Описание                                                     |
| -------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| lender   | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the given condition. |
| T        | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                      |


:::

:::group{name=build}

Builds the current builder, returning all its contents as an array of [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)s.

 The builder may then be re-used for additional purposes, though this is not suggested.

Returns: The current set of built conditions.  
Return Type: [ILootCondition](/vanilla/api/loot/conditions/ILootCondition)[]

```zenscript
// LootConditionBuilder.build() as ILootCondition[]

myLootConditionBuilder.build();
```

:::



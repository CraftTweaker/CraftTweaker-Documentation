# EntityScores

Builder to create an 'EntityScores' loot condition.

 This condition checks the [LootContext](/vanilla/api/loot/LootContext) for an [MCEntity](/vanilla/api/entity/MCEntity) that matches the targeted one, specified via [TargetedEntity](/vanilla/api/predicate/TargetedEntity), and then tests its scoreboard properties against a set of values.

 The condition passes if and only if there exists a valid entity to target and all the specified scoreboard entries are within the given bounds.

 A valid 'EntityScores' loot condition has to specify a targeted entity. A well-formed 'EntityScores' condition must also specify at least one scoreboard property to check against. Not specifying any scoreboard values makes the condition simply act as a way to check for the presence of an entity of the given type.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.EntityScores;
```


## Implemented Interfaces
EntityScores implements the following interfaces. That means all methods defined in these interfaces are also available in EntityScores

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Методы

:::group{name=withExactScore}

Adds the scoreboard property <code>name</code> to the ones that should be checked, making sure that the values matches exactly the given one.

 If the scoreboard property had already some bounds specified, then the bounds will get overwritten.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [EntityScores](/vanilla/api/loot/conditions/vanilla/EntityScores)

```zenscript
EntityScores.withExactScore(name as string, value as int) as EntityScores
```

| Параметр | Тип    | Описание                                           |
| -------- | ------ | -------------------------------------------------- |
| name     | string | The name of the scoreboard property to check.      |
| value    | int    | The exact value the scoreboard property must have. |


:::

:::group{name=withMaximumScore}

Adds the scoreboard property <code>name</code> to the ones that should be checked, setting its maximum accepted value to <code>max</code>.

 If the scoreboard property had already some bounds specified, then the maximum value of the bound will be overwritten with the new value specified in <code>max</code>. On the other hand, if the scoreboard property didn't have any specified bounds, the maximum value is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [EntityScores](/vanilla/api/loot/conditions/vanilla/EntityScores)

```zenscript
EntityScores.withMaximumScore(name as string, max as int) as EntityScores
```

| Параметр | Тип    | Описание                                            |
| -------- | ------ | --------------------------------------------------- |
| name     | string | The name of the scoreboard property to check.       |
| max      | int    | The maximum value the scoreboard property can have. |


:::

:::group{name=withMinimumScore}

Adds the scoreboard property <code>name</code> to the ones that should be checked, setting its minimum accepted value to <code>min</code>.

 If the scoreboard property had already some bounds specified, then the minimum value of the bound will be overwritten with the new value specified in <code>min</code>. On the other hand, if the scoreboard property didn't have any specified bounds, the minimum value is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [EntityScores](/vanilla/api/loot/conditions/vanilla/EntityScores)

```zenscript
EntityScores.withMinimumScore(name as string, min as int) as EntityScores
```

| Параметр | Тип    | Описание                                            |
| -------- | ------ | --------------------------------------------------- |
| name     | string | The name of the scoreboard property to check.       |
| min      | int    | The minimum value the scoreboard property can have. |


:::

:::group{name=withRangedScore}

Adds the scoreboard property <code>name</code> to the ones that should be checked, setting both its minimum and maximum accepted values respectively to <code>min</code> and <code>max</code>.

 If the scoreboard property had already some bounds specified, then the bounds will get completely overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [EntityScores](/vanilla/api/loot/conditions/vanilla/EntityScores)

```zenscript
EntityScores.withRangedScore(name as string, min as int, max as int) as EntityScores
```

| Параметр | Тип    | Описание                                            |
| -------- | ------ | --------------------------------------------------- |
| name     | string | The name of the scoreboard property to check.       |
| min      | int    | The minimum value the scoreboard property can have. |
| max      | int    | The maximum value the scoreboard property can have. |


:::

:::group{name=withTargetedEntity}

Sets the entity that should be targeted by the loot condition.

 Refer to [TargetedEntity](/vanilla/api/predicate/TargetedEntity) for a full list and their respective meaning.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [EntityScores](/vanilla/api/loot/conditions/vanilla/EntityScores)

```zenscript
EntityScores.withTargetedEntity(entity as TargetedEntity) as EntityScores
```

| Параметр | Тип                                                     | Описание                            |
| -------- | ------------------------------------------------------- | ----------------------------------- |
| entity   | [TargetedEntity](/vanilla/api/predicate/TargetedEntity) | The entity that should be targeted. |


:::



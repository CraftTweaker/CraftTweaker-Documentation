# PlayerPredicate

Represents a predicate for a player, as a specialization of [EntityPredicate](/vanilla/api/predicate/EntityPredicate).

 This predicate can be used to check various properties of the player entity, such as the game mode, experience, unlocked advancements and recipes, or statistics.

 By default, the entity passes the checks without caring about the entity type. If at least one of the properties is set, then the entity must be a player to pass the checks.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.PlayerPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

PlayerPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in PlayerPredicate

## Methoden

:::group{name=withAdvancementPredicate}

Adds an advancement to the ones that should be checked, along with the [AdvancementPredicate](/vanilla/api/predicate/AdvancementPredicate) that should be used to validate it.

 If the same advancement had already been added to the map with a different predicate, then the previous configuration is replaced. Otherwise the addition completes normally.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withAdvancementPredicate(advancement as string, builder as Consumer<AdvancementPredicate>) as PlayerPredicate
```

| Parameter   | Type                                                                                            | Beschreibung                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| advancement | string                                                                                          | The advancement that should be checked.                                                                                    |
| bauer       | Consumer&lt;[AdvancementPredicate](/vanilla/api/predicate/AdvancementPredicate)&gt; | A consumer to configure the [AdvancementPredicate](/vanilla/api/predicate/AdvancementPredicate) for the given advancement. |


:::

:::group{name=withBoundedExperienceLevel}

Sets both the minimum and maximum value the experience level should be to <code>min</code> and <code>max</code>
 respectively.

 If the experience level had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withBoundedExperienceLevel(min as int, max as int) as PlayerPredicate
```

| Parameter | Type | Beschreibung                                      |
| --------- | ---- | ------------------------------------------------- |
| min       | int  | The minimum value the experience level should be. |
| max       | int  | The maximum value the experience level should be. |


:::

:::group{name=withBoundedStatistic}

Sets both the minimum and maximum value the statistic should be to <code>minValue</code> and
 <code>maxValue</code> respectively.

 If the statistic had already some bounds specified, then they will be overwritten with the new values.

 Both minimum and maximum values are inclusive, meaning that a value that is equal to either <code>min</code> or
 <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withBoundedStatistic(type as MCResourceLocation, name as MCResourceLocation, minValue as int, maxValue as int) as PlayerPredicate
```

| Parameter | Type                                                        | Beschreibung                               |
| --------- | ----------------------------------------------------------- | ------------------------------------------ |
| type      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's base type.                 |
| name      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's unique identifier.         |
| minValue  | int                                                         | The minimum value the statistic should be. |
| maxValue  | int                                                         | The maximum value the statistic should be. |


:::

:::group{name=withExactExperienceLevel}

Sets the experience level to exactly match the given <code>value</code>.

 If the experience level had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withExactExperienceLevel(level as int) as PlayerPredicate
```

| Parameter | Type | Beschreibung                                    |
| --------- | ---- | ----------------------------------------------- |
| level     | int  | The exact value the experience level should be. |


:::

:::group{name=withExactStatistic}

Sets the statistic to exactly match the given <code>value</code>.

 If the statistic had already some bounds specified, then they will be overwritten with the new value.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withExactStatistic(type as MCResourceLocation, name as MCResourceLocation, value as int) as PlayerPredicate
```

| Parameter | Type                                                        | Beschreibung                             |
| --------- | ----------------------------------------------------------- | ---------------------------------------- |
| type      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's base type.               |
| name      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's unique identifier.       |
| value     | int                                                         | The exact value the statistic should be. |


:::

:::group{name=withGameMode}

Sets the [GameMode](/vanilla/api/predicate/GameMode) the player has to be in.

Returns: This player for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withGameMode(mode as GameMode) as PlayerPredicate
```

| Parameter | Type                                        | Beschreibung   |
| --------- | ------------------------------------------- | -------------- |
| mode      | [GameMode](/vanilla/api/predicate/GameMode) | The game mode. |


:::

:::group{name=withLockedRecipe}

Adds the recipe <code>name</code> to the list of recipes that have to be locked.

 If the predicate had already been set to check for this recipe's unlocked status, the setting is overwritten.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withLockedRecipe(name as string) as PlayerPredicate
```

| Parameter | Type   | Beschreibung                                    |
| --------- | ------ | ----------------------------------------------- |
| name      | string | The name of the recipe that needs to be locked. |


:::

:::group{name=withMaximumExperienceLevel}

Sets the maximum value the experience level should be to <code>max</code>.

 If the experience level had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the experience level didn't have any bounds set, the maximum is set, leaving the lower end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withMaximumExperienceLevel(max as int) as PlayerPredicate
```

| Parameter | Type | Beschreibung                                      |
| --------- | ---- | ------------------------------------------------- |
| max       | int  | The maximum value the experience level should be. |


:::

:::group{name=withMaximumStatistic}

Sets the maximum value the statistic should be to <code>max</code>.

 If the statistic had already some bounds specified, then the maximum value of the bound will be overwritten with the value specified in <code>max</code>. On the other hand, if the statistic didn't have any bounds set, the maximum is set, leaving the upper end unbounded.

 The maximum value is inclusive, meaning that a value that is equal to <code>max</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withMaximumStatistic(type as MCResourceLocation, name as MCResourceLocation, max as int) as PlayerPredicate
```

| Parameter | Type                                                        | Beschreibung                               |
| --------- | ----------------------------------------------------------- | ------------------------------------------ |
| type      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's base type.                 |
| name      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's unique identifier.         |
| max       | int                                                         | The maximum value the statistic should be. |


:::

:::group{name=withMinimumExperienceLevel}

Sets the minimum value the experience level should be to <code>min</code>.

 If the experience level had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the experience level didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withMinimumExperienceLevel(min as int) as PlayerPredicate
```

| Parameter | Type | Beschreibung                                      |
| --------- | ---- | ------------------------------------------------- |
| min       | int  | The minimum value the experience level should be. |


:::

:::group{name=withMinimumStatistic}

Sets the minimum value the statistic should be to <code>min</code>.

 If the statistic had already some bounds specified, then the minimum value of the bound will be overwritten with the value specified in <code>min</code>. On the other hand, if the statistic didn't have any bounds set, the minimum is set, leaving the upper end unbounded.

 The minimum value is inclusive, meaning that a value that is equal to <code>min</code> will pass the check.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withMinimumStatistic(type as MCResourceLocation, name as MCResourceLocation, min as int) as PlayerPredicate
```

| Parameter | Type                                                        | Beschreibung                               |
| --------- | ----------------------------------------------------------- | ------------------------------------------ |
| type      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's base type.                 |
| name      | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | The statistic's unique identifier.         |
| min       | int                                                         | The minimum value the statistic should be. |


:::

:::group{name=withUnlockedRecipe}

Adds the recipe <code>name</code> to the list of recipes that have to be unlocked.

 If the predicate had already been set to check for this recipe's locked status, the setting is overwritten.

Returns: This predicate for chaining.  
Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
PlayerPredicate.withUnlockedRecipe(name as string) as PlayerPredicate
```

| Parameter | Type   | Beschreibung                                      |
| --------- | ------ | ------------------------------------------------- |
| name      | string | The name of the recipe that needs to be unlocked. |


:::



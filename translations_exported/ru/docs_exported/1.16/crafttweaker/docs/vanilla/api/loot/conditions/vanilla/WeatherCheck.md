# WeatherCheck

Builder for the 'WeatherCheck' loot condition.

 This condition checks the current in-game weather, ensuring that it matches the parameters specified in the condition itself.

 A well-formed 'WeatherCheck' loot condition must have at least one of the various possible states set. If that isn't the case, then the condition will simply pass no matter what, making its presence redundant.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.WeatherCheck;
```


## Implemented Interfaces
WeatherCheck implements the following interfaces. That means all methods defined in these interfaces are also available in WeatherCheck

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Методы

:::group{name=withRain}

Sets the condition to require a rainy weather.

 If the condition had been previously set to require a non-rainy weather, then the value gets overwritten.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [WeatherCheck](/vanilla/api/loot/conditions/vanilla/WeatherCheck)

```zenscript
// WeatherCheck.withRain() as WeatherCheck

myWeatherCheck.withRain();
```

:::

:::group{name=withThunders}

Sets the condition to require a thundering weather.

 If the condition had been previously set to require a non-thundering weather, then the value gets overwritten.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [WeatherCheck](/vanilla/api/loot/conditions/vanilla/WeatherCheck)

```zenscript
// WeatherCheck.withThunders() as WeatherCheck

myWeatherCheck.withThunders();
```

:::

:::group{name=withoutRain}

Sets the condition to require a non-rainy weather.

 If the condition had been previously set to require a rainy weather, then the value gets overwritten.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [WeatherCheck](/vanilla/api/loot/conditions/vanilla/WeatherCheck)

```zenscript
// WeatherCheck.withoutRain() as WeatherCheck

myWeatherCheck.withoutRain();
```

:::

:::group{name=withoutThunders}

Sets the condition to require a non-thundering weather.

 If the condition had been previously set to require a thundering weather, then the value gets overwritten.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [WeatherCheck](/vanilla/api/loot/conditions/vanilla/WeatherCheck)

```zenscript
// WeatherCheck.withoutThunders() as WeatherCheck

myWeatherCheck.withoutThunders();
```

:::



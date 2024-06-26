# IReductionFunction

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.world.damage.IReductionFunction;
```


## Static Methods

:::group{name=of}

Return Type: [IReductionFunction](/neoforge/api/world/damage/IReductionFunction)

```zenscript
IReductionFunction.of(func as BiFunction<DamageContainer,float?,float?>) as IReductionFunction
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| func      | BiFunction&lt;[DamageContainer](/neoforge/api/world/damage/DamageContainer),float?,float?&gt; |


:::

## Methods

:::group{name=modify}

Return Type: float

```zenscript
IReductionFunction.modify(container as DamageContainer, reductionIn as float) as float
```

|  Parameter  |                             Type                              |
|-------------|---------------------------------------------------------------|
| container   | [DamageContainer](/neoforge/api/world/damage/DamageContainer) |
| reductionIn | float                                                         |


:::



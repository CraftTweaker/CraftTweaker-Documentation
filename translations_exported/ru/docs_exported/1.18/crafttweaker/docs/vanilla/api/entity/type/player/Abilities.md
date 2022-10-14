# Abilities

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Abilities;
```


## Методы

:::group{name=getFlyingSpeed}

Return Type: float

```zenscript
// Abilities.getFlyingSpeed() as float

myAbilities.getFlyingSpeed();
```

:::

:::group{name=getWalkingSpeed}

Return Type: float

```zenscript
// Abilities.getWalkingSpeed() as float

myAbilities.getWalkingSpeed();
```

:::

:::group{name=setFlyingSpeed}

```zenscript
Abilities.setFlyingSpeed(param0 as float)
```

| Параметр | Тип   |
| -------- | ----- |
| param0   | float |


:::

:::group{name=setWalkingSpeed}

```zenscript
Abilities.setWalkingSpeed(param0 as float)
```

| Параметр | Тип   |
| -------- | ----- |
| param0   | float |


:::


## Свойства

| Название     | Тип   | Имеет Getter | Имеет Setter |
| ------------ | ----- | ------------ | ------------ |
| flyingSpeed  | float | true         | true         |
| walkingSpeed | float | true         | true         |


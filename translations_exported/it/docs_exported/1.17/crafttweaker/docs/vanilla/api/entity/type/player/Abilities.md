# Abilities

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Abilities;
```


## Metodi

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

Return Type: void

```zenscript
Abilities.setFlyingSpeed(param0 as float) as void
```

| Parametro | Tipo  | Descrizione             |
| --------- | ----- | ----------------------- |
| param0    | float | No Description Provided |


:::

:::group{name=setWalkingSpeed}

Return Type: void

```zenscript
Abilities.setWalkingSpeed(param0 as float) as void
```

| Parametro | Tipo  | Descrizione             |
| --------- | ----- | ----------------------- |
| param0    | float | No Description Provided |


:::


## Proprietà

| Nome         | Tipo  | Ha Getter | Ha Setter | Descrizione             |
| ------------ | ----- | --------- | --------- | ----------------------- |
| flyingSpeed  | float | sì        | sì        | No Description Provided |
| walkingSpeed | float | sì        | sì        | No Description Provided |


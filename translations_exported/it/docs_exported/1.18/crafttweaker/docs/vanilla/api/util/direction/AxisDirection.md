# AxisDirection

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.AxisDirection;
```


## Enum Constants

AxisDirection is an enum. It has 2 enum constants. They are accessible using the code below.

```zenscript
AxisDirection.POSITIVE
AxisDirection.NEGATIVE
```
## Metodi

:::group{name=getName}

Return Type: string

```zenscript
// AxisDirection.getName() as string

myAxisDirection.getName();
```

:::

:::group{name=getStep}

Return Type: int

```zenscript
// AxisDirection.getStep() as int

myAxisDirection.getStep();
```

:::

:::group{name=opposite}

Return Type: [AxisDirection](/vanilla/api/util/direction/AxisDirection)

```zenscript
// AxisDirection.opposite() as AxisDirection

myAxisDirection.opposite();
```

:::


## Proprietà

| Nome     | Tipo                                                       | Ha Getter | Ha Setter | Descrizione             |
| -------- | ---------------------------------------------------------- | --------- | --------- | ----------------------- |
| nome     | string                                                     | sì        | no        | No Description Provided |
| opposite | [AxisDirection](/vanilla/api/util/direction/AxisDirection) | sì        | no        | No Description Provided |
| step     | int                                                        | sì        | no        | No Description Provided |


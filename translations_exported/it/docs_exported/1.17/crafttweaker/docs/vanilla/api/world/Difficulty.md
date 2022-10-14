# Difficulty

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Difficulty;
```


## Enum Constants

Difficulty is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
Difficulty.PEACEFUL
Difficulty.EASY
Difficulty.NORMAL
Difficulty.HARD
```
## Metodi

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Difficulty.getDisplayName() as Component

myDifficulty.getDisplayName();
```

:::

:::group{name=getId}

Return Type: int

```zenscript
// Difficulty.getId() as int

myDifficulty.getId();
```

:::

:::group{name=getKey}

Return Type: string

```zenscript
// Difficulty.getKey() as string

myDifficulty.getKey();
```

:::


## Proprietà

| Nome        | Tipo                                     | Ha Getter | Ha Setter | Descrizione             |
| ----------- | ---------------------------------------- | --------- | --------- | ----------------------- |
| displayName | [Component](/vanilla/api/text/Component) | sì        | no        | No Description Provided |
| id          | int                                      | sì        | no        | No Description Provided |
| key         | string                                   | sì        | no        | No Description Provided |


# Percentaged&LT;T : Object&GT;

Used to represent data with an attached percentage (think an ItemStack with a 50% chance of being outputted).

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.random.Percentaged;
```


## Interfacce Implementate
Percentaged implements the following interfaces. That means all methods defined in these interfaces are also available in Percentaged

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Metodi

:::group{name=getData}

Return Type: T

```zenscript
// Percentaged.getData() as T

myPercentaged.getData();
```

:::

:::group{name=getPercentage}

Return Type: double

```zenscript
// Percentaged.getPercentage() as double

myPercentaged.getPercentage();
```

:::


## Proprietà

| Nome       | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| ---------- | ------ | --------- | --------- | ----------------------- |
| data       | T      | sì        | no        | No Description Provided |
| percentage | double | sì        | no        | No Description Provided |


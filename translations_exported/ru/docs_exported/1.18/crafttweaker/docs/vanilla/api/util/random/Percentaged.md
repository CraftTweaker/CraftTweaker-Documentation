# Percentaged&LT;T : Object&GT;

Used to represent data with an attached percentage (think an ItemStack with a 50% chance of being outputted).

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.random.Percentaged;
```


## Implemented Interfaces
Percentaged implements the following interfaces. That means all methods defined in these interfaces are also available in Percentaged

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Методы

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


## Свойства

| Название   | Тип    | Имеет Getter | Имеет Setter | Описание                |
| ---------- | ------ | ------------ | ------------ | ----------------------- |
| data       | T      | true         | false        | No Description Provided |
| percentage | double | true         | false        | No Description Provided |


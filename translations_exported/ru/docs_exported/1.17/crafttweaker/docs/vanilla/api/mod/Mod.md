# Mod

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mod.Mod;
```


## Extending Record

Mod extends Record. That means all methods available in Record are also available in Mod

## Методы

:::group{name=displayName}

Return Type: string

```zenscript
// Mod.displayName() as string

myMod.displayName();
```

:::

:::group{name=id}

Return Type: string

```zenscript
// Mod.id() as string

myMod.id();
```

:::

:::group{name=version}

Return Type: string

```zenscript
// Mod.version() as string

myMod.version();
```

:::


## Свойства

| Название    | Тип    | Имеет Getter | Имеет Setter | Описание                |
| ----------- | ------ | ------------ | ------------ | ----------------------- |
| displayName | string | true         | false        | No Description Provided |
| id          | string | true         | false        | No Description Provided |
| version     | string | true         | false        | No Description Provided |


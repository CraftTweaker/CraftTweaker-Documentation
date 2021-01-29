# Модификатор перенаправления MCSingleRedirectModifier

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSingleRedirectModifier;
```


## Constructors

No Description Provided
```zenscript
new MCSingleRedirectModifier(fun as Function<MCCommandContext,MCCommandSource>) as MCSingleRedirectModifier
```
| Параметр | Тип                                                                                                                                                           | Description             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| весело   | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

### применить

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCSingleRedirectModifier.apply(context as MCCommandContext) as MCCommandSource
```
| Параметр | Тип                                                               | Description             |
| -------- | ----------------------------------------------------------------- | ----------------------- |
| контекст | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |

### equals

Return Type: boolean

```zenscript
MCSingleRedirectModifier.equals(o as Object) as boolean
```
| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |

### hashCode

Return Type: int

```zenscript
MCSingleRedirectModifier.hashCode() as int
myMCSingleRedirectModifier.hashCode();
```
### toString

Return Type: string

```zenscript
MCSingleRedirectModifier.toString() as string
myMCSingleRedirectModifier.toString();
```

## Операторы

### EQUALS

```zenscript
myMCSingleRedirectModifier == o как объект
```




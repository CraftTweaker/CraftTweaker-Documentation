# MCCommand

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommand;
```


## Constructors

No Description Provided
```zenscript
new MCCommand(fun as Function<MCCommandContext,Integer>) as MCCommand
```

| Параметр | Тип                                                                                                   | Description             |
| -------- | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| весело   | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),Integer&gt; | No Description Provided |



## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

:::group{name=equals}

Return Type: boolean

```zenscript
MCCommand.equals(o as Object) as boolean
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCCommand.hashCode() as int
myMCCommand.hashCode();
```

:::

:::group{name=run}

Return Type: int

```zenscript
MCCommand.run(context as MCCommandContext) as int
```

| Параметр | Тип                                                               | Description             |
| -------- | ----------------------------------------------------------------- | ----------------------- |
| контекст | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCCommand.toString() as string
myMCCommand.toString();
```

:::


## Операторы

:::group{name=EQUALS}

```zenscript
myMCCommand == o как объект
```

:::



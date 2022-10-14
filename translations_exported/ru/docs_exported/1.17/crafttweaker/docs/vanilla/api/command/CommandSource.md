# CommandSource

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.command.CommandSource;
```


## Методы

:::group{name=acceptsFailure}

Return Type: boolean

```zenscript
// CommandSource.acceptsFailure() as boolean

myCommandSource.acceptsFailure();
```

:::

:::group{name=acceptsSuccess}

Return Type: boolean

```zenscript
// CommandSource.acceptsSuccess() as boolean

myCommandSource.acceptsSuccess();
```

:::

:::group{name=alwaysAccepts}

Return Type: boolean

```zenscript
// CommandSource.alwaysAccepts() as boolean

myCommandSource.alwaysAccepts();
```

:::

:::group{name=sendMessage}

Return Type: void

```zenscript
CommandSource.sendMessage(component as Component, senderUUID as invalid) as void
```

| Параметр   | Тип                                      | Описание                |
| ---------- | ---------------------------------------- | ----------------------- |
| component  | [Component](/vanilla/api/text/Component) | No Description Provided |
| senderUUID | **invalid**                              | No Description Provided |


:::

:::group{name=shouldInformAdmins}

Return Type: boolean

```zenscript
// CommandSource.shouldInformAdmins() as boolean

myCommandSource.shouldInformAdmins();
```

:::


## Свойства

| Название           | Тип     | Имеет Getter | Имеет Setter | Описание                |
| ------------------ | ------- | ------------ | ------------ | ----------------------- |
| acceptsFailure     | boolean | true         | false        | No Description Provided |
| acceptsSuccess     | boolean | true         | false        | No Description Provided |
| alwaysAccepts      | boolean | true         | false        | No Description Provided |
| shouldInformAdmins | boolean | true         | false        | No Description Provided |


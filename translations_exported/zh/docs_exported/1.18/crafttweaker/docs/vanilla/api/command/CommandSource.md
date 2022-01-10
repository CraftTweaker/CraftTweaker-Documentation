# CommandSource

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.command.CommandSource;
```


## 使用方式

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

| 参数         | 类型                                       | 描述                      |
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


## 参数

| 名称                 | 类型  | 可获得  | 可设置   | 描述                      |
| ------------------ | --- | ---- | ----- | ----------------------- |
| acceptsFailure     | 布尔值 | true | false | No Description Provided |
| acceptsSuccess     | 布尔值 | true | false | No Description Provided |
| alwaysAccepts      | 布尔值 | true | false | No Description Provided |
| shouldInformAdmins | 布尔值 | true | false | No Description Provided |


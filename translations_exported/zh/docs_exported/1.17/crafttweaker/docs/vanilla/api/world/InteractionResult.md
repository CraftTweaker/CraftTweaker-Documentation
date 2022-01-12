# InteractionResult

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.InteractionResult;
```


## Enum Constants

InteractionResult is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
InteractionResult.SUCCESS
InteractionResult.CONSUME
InteractionResult.CONSUME_PARTIAL
InteractionResult.PASS
InteractionResult.FAIL
```
## 使用方式

:::group{name=consumesAction}

Return Type: boolean

```zenscript
// InteractionResult.consumesAction() as boolean

myInteractionResult.consumesAction();
```

:::

:::group{name=shouldAwardStats}

Return Type: boolean

```zenscript
// InteractionResult.shouldAwardStats() as boolean

myInteractionResult.shouldAwardStats();
```

:::

:::group{name=shouldSwing}

Return Type: boolean

```zenscript
// InteractionResult.shouldSwing() as boolean

myInteractionResult.shouldSwing();
```

:::


## 参数

| 名称               | 类型  | 可获得  | 可设置   | 描述                      |
| ---------------- | --- | ---- | ----- | ----------------------- |
| consumesAction   | 布尔值 | true | false | No Description Provided |
| shouldAwardStats | 布尔值 | true | false | No Description Provided |
| shouldSwing      | 布尔值 | true | false | No Description Provided |


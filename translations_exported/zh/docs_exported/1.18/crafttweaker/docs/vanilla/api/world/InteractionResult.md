# InteractionResult

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.InteractionResult;
```


## Enum Constants

InteractionResult is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:world/interactionresult:success>
<constant:minecraft:world/interactionresult:consume>
<constant:minecraft:world/interactionresult:consume_partial>
<constant:minecraft:world/interactionresult:pass>
<constant:minecraft:world/interactionresult:fail>
```
## Static Methods

:::group{name=sidedSuccess}

Returns true if `successSide` is true, this can be used to return `SUCCESS` on the client, but `CONSUME` on the server.

Returns: <constant:minecraft:world> if `successSide` is true, otherwise <constant:minecraft:world>.  
Return Type: [InteractionResult](/vanilla/api/world/InteractionResult)

```zenscript
// InteractionResult.sidedSuccess(successSide as boolean) as InteractionResult

InteractionResult.sidedSuccess(true);
```

| 参数          | 类型  | 描述                                    |
| ----------- | --- | ------------------------------------- |
| successSide | 布尔值 | Is the current side the success side. |


:::

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

| 名称               | 类型  | 可获得  | 可设置   |
| ---------------- | --- | ---- | ----- |
| consumesAction   | 布尔值 | true | false |
| shouldAwardStats | 布尔值 | true | false |
| shouldSwing      | 布尔值 | true | false |


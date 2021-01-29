# MCItemSmeltedEvent

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCItemSmeltedEvent;
```


## Extending MCPlayerEvent

MCItemSmeltedEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCItemSmeltedEvent

## 方法

### getSmelted

Gets the smelted item (the output stack)

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCItemSmeltedEvent.getSmelted() as IItemStack
myMCItemSmeltedEvent.getSmelted();
```

## 参数

| 名称      | 类型                                          | 可获得  | 可设置   |
| ------- | ------------------------------------------- | ---- | ----- |
| smelted | [IItemStack](/vanilla/api/items/IItemStack) | true | false |


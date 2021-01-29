# MCPlayerEvent

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCPlayerEvent;
```


## Extending MCLivingEvent

MCPlayerEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCPlayerEvent

## 方法

### getPlayer

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
MCPlayerEvent.getPlayer() as MCPlayerEntity
myMCPlayerEvent.getPlayer();
```

## 参数

| 名称     | 类型                                                           | 可获得  | 可设置   |
| ------ | ------------------------------------------------------------ | ---- | ----- |
| player | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | true | false |


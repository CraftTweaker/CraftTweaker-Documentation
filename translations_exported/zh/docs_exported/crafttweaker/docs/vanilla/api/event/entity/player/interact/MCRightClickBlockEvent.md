# MCRightClickBlockEvent

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.MCRightClickBlockEvent;
```


## Extending MCPlayerInteractEvent

MCRightClickBlockEvent extends [MCPlayerInteractEvent](/vanilla/api/event/entity/player/interact/MCPlayerInteractEvent). That means all methods available in [MCPlayerInteractEvent](/vanilla/api/event/entity/player/interact/MCPlayerInteractEvent) are also available in MCRightClickBlockEvent

## 方法

### getFace

The face of the block that was clicked Unlike in [MCPlayerInteractEvent](/vanilla/api/event/entity/player/interact/MCPlayerInteractEvent) this is known not to be null

Return Type: [Direction](/vanilla/api/util/Direction)

```zenscript
MCRightClickBlockEvent.getFace() as Direction
myMCRightClickBlockEvent.getFace();
```


## 参数

| 名称   | 类型                                       | 可获得  | 可设置   |
| ---- | ---------------------------------------- | ---- | ----- |
| face | [Direction](/vanilla/api/util/Direction) | true | false |


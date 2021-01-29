# MCXpChangeEvent

This event is fired when the player's xp count is changed. If the amount is positive the xp is being added. If the xp is negative, the xp is being removed. This event takes place before the xp has changed, allowing you to change the amount, or negate the change entirely.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.xp.MCXpChangeEvent;
```


## 方法

### getXp

Gets the amount of xp that the player's xp counter is being changed by.

Return Type: int

```zenscript
MCXpChangeEvent.getXp() as int
event.getXp();
```
### setXp

Sets the amount of xp to change the player's xp counter by.

Return Type: void

```zenscript
MCXpChangeEvent.setXp(amount as int) as void
```
| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |


## 参数

| 名称 | 类型  | 可获得  | 可设置  |
| -- | --- | ---- | ---- |
| xp | int | true | true |


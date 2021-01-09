# MCPlayerLoggedInEvent

The playerLoggedIn event does not add any new Properties. Since it is a [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent), you can already access the getter

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCPlayerLoggedInEvent;
```


## Extending MCPlayerEvent

MCPlayerLoggedInEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCPlayerLoggedInEvent


# ICitizenChatHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenChatHandler;
```


## Methods

:::group{name=notifyDeath}

```zenscript
ICitizenChatHandler.notifyDeath(var1 as DamageSource)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [DamageSource](/vanilla/api/world/DamageSource) |


:::

:::group{name=sendLocalizedChat}

```zenscript
ICitizenChatHandler.sendLocalizedChat(var1 as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [Component](/vanilla/api/text/Component) |


:::

:::group{name=sendLocalizedChat}

```zenscript
ICitizenChatHandler.sendLocalizedChat(var1 as string, var2 as Object[])
```

| Parameter |   Type   |
|-----------|----------|
| var1      | string   |
| var2      | Object[] |


:::



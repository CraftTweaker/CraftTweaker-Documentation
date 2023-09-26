# SocketHelper

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.socket.SocketHelper;
```


## Static Methods

:::group{name=getActiveGems}

Return Type: stdlib.List&lt;[Gem](/mods/sdmcrtplus/integration/apotheosis/adventure/socket/gem/Gem)&gt;

```zenscript
SocketHelper.getActiveGems(itemStack as IItemStack) as stdlib.List<Gem>
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getFirstEmptySocket}

Return Type: int

```zenscript
SocketHelper.getFirstEmptySocket(itemStack as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getGemInstances}

Return Type: **invalid**

```zenscript
SocketHelper.getGemInstances(itemStack as IItemStack) as invalid
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getGems}

Return Type: stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
SocketHelper.getGems(itemStack as IItemStack) as stdlib.List<ItemStack>
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getSockets}

Return Type: int

```zenscript
SocketHelper.getSockets(itemStack as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=setSockets}

```zenscript
SocketHelper.setSockets(itemStack as IItemStack, gems as stdlib.List<IItemStack>)
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack)                    |
| gems      | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=setSockets}

```zenscript
SocketHelper.setSockets(itemStack as IItemStack, sockets as int)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |
| sockets   | int                                        |


:::


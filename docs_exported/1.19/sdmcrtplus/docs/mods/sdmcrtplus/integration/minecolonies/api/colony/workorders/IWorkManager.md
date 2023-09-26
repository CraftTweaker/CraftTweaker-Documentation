# IWorkManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.workorders.IWorkManager;
```


## Methods

:::group{name=addWorkOrder}

```zenscript
IWorkManager.addWorkOrder(var1 as IWorkOrder, var2 as boolean)
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| var1      | [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder) |
| var2      | boolean                                                                                  |


:::

:::group{name=clearWorkForCitizen}

```zenscript
IWorkManager.clearWorkForCitizen(var1 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
// IWorkManager.getColony() as IColony

myIWorkManager.getColony();
```

:::

:::group{name=getOrderedList}

Return Type: stdlib.List&lt;W&gt;

```zenscript
IWorkManager.getOrderedList<W : IWorkOrder>(var2 as BlockPos) as stdlib.List<W>
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)                                              |
| W         | [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder) |


:::

:::group{name=getOrderedList}

Return Type: stdlib.List&lt;[IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder)&gt;

```zenscript
IWorkManager.getOrderedList(var1 as Predicate<IWorkOrder>, var2 as BlockPos) as stdlib.List<IWorkOrder>
```

| Parameter |                                                                        Type                                                                        |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder)&gt; |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)                                                                                                        |


:::

:::group{name=getUnassignedWorkOrder}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable W

```zenscript
IWorkManager.getUnassignedWorkOrder<W : IWorkOrder>() as @org.openzen.zencode.java.ZenCodeType.Nullable W
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| W         | [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder) |


:::

:::group{name=getWorkOrder}

Return Type: [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder)

```zenscript
IWorkManager.getWorkOrder(var1 as int) as IWorkOrder
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getWorkOrder}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable W

```zenscript
IWorkManager.getWorkOrder<W : IWorkOrder>(var1 as int, var2 as Class<W>) as @org.openzen.zencode.java.ZenCodeType.Nullable W
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| var1      | int                                                                                      |
| var2      | Class&lt;W&gt;                                                                           |
| W         | [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder) |


:::

:::group{name=getWorkOrders}

Return Type: [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder)[int?]

```zenscript
// IWorkManager.getWorkOrders() as IWorkOrder[int?]

myIWorkManager.getWorkOrders();
```

:::

:::group{name=getWorkOrdersOfType}

Return Type: stdlib.List&lt;W&gt;

```zenscript
IWorkManager.getWorkOrdersOfType<W : IWorkOrder>() as stdlib.List<W>
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| W         | [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder) |


:::

:::group{name=isDirty}

Return Type: boolean

```zenscript
// IWorkManager.isDirty() as boolean

myIWorkManager.isDirty();
```

:::

:::group{name=onColonyTick}

```zenscript
IWorkManager.onColonyTick(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=read}

```zenscript
IWorkManager.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=removeWorkOrder}

```zenscript
IWorkManager.removeWorkOrder(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=removeWorkOrder}

```zenscript
IWorkManager.removeWorkOrder(var1 as IWorkOrder)
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| var1      | [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder) |


:::

:::group{name=setDirty}

```zenscript
IWorkManager.setDirty(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=write}

```zenscript
IWorkManager.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::



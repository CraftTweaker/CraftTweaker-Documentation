# ICuriosItemHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.ICuriosItemHandler;
```


## Methods

:::group{name=getCurios}

Return Type: [ICurioStacksHandler](/mods/sdmcrtplus/integration/curios/ICurioStacksHandler)[string]

```zenscript
// ICuriosItemHandler.getCurios() as ICurioStacksHandler[string]

myICuriosItemHandler.getCurios();
```

:::

:::group{name=getLootingLevel}

Return Type: int

```zenscript
ICuriosItemHandler.getLootingLevel(var1 as DamageSource, var2 as LivingEntity, var3 as int) as int
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [DamageSource](/vanilla/api/world/DamageSource)  |
| var2      | [LivingEntity](/vanilla/api/entity/LivingEntity) |
| var3      | int                                              |


:::

:::group{name=getSlots}

Return Type: int

```zenscript
// ICuriosItemHandler.getSlots() as int

myICuriosItemHandler.getSlots();
```

:::

:::group{name=getStacksHandler}

Return Type: [ICurioStacksHandler](/mods/sdmcrtplus/integration/curios/ICurioStacksHandler)

```zenscript
ICuriosItemHandler.getStacksHandler(var1 as string) as ICurioStacksHandler
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getUpdatingInventories}

Return Type: Set&lt;[ICurioStacksHandler](/mods/sdmcrtplus/integration/curios/ICurioStacksHandler)&gt;

```zenscript
// ICuriosItemHandler.getUpdatingInventories() as Set<ICurioStacksHandler>

myICuriosItemHandler.getUpdatingInventories();
```

:::

:::group{name=getVisibleSlots}

Return Type: int

```zenscript
// ICuriosItemHandler.getVisibleSlots() as int

myICuriosItemHandler.getVisibleSlots();
```

:::

:::group{name=getWearer}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// ICuriosItemHandler.getWearer() as LivingEntity

myICuriosItemHandler.getWearer();
```

:::

:::group{name=setCurios}

```zenscript
ICuriosItemHandler.setCurios(var1 as ICurioStacksHandler[string])
```

| Parameter |                                          Type                                          |
|-----------|----------------------------------------------------------------------------------------|
| var1      | [ICurioStacksHandler](/mods/sdmcrtplus/integration/curios/ICurioStacksHandler)[string] |


:::


## Properties

|     Name     |                                          Type                                          | Has Getter | Has Setter |
|--------------|----------------------------------------------------------------------------------------|------------|------------|
| curios       | [ICurioStacksHandler](/mods/sdmcrtplus/integration/curios/ICurioStacksHandler)[string] | true       | false      |
| slots        | int                                                                                    | true       | false      |
| visibleSlots | int                                                                                    | true       | false      |
| wearer       | [LivingEntity](/vanilla/api/entity/LivingEntity)                                       | true       | false      |


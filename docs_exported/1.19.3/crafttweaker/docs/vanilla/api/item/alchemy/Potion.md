# Potion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.alchemy.Potion;
```


## Methods

:::group{name=getEffects}

Return Type: stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

```zenscript
// Potion.getEffects() as stdlib.List<MobEffectInstance>

myPotion.getEffects();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
Potion.getName(prefix as string) as string
```

| Parameter |  Type  |
|-----------|--------|
| prefix    | string |


:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Potion.getRegistryName() as ResourceLocation

myPotion.getRegistryName();
```

:::

:::group{name=hasInstantEffects}

Return Type: boolean

```zenscript
// Potion.hasInstantEffects() as boolean

myPotion.hasInstantEffects();
```

:::


## Properties

|       Name        |                                         Type                                         | Has Getter | Has Setter |
|-------------------|--------------------------------------------------------------------------------------|------------|------------|
| commandString     | string                                                                               | true       | false      |
| effects           | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | true       | false      |
| hasInstantEffects | boolean                                                                              | true       | false      |
| registryName      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                           | true       | false      |


# CriterionTriggerInstance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.advancements.CriterionTriggerInstance;
```


## Methods

:::group{name=getCriterion}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// CriterionTriggerInstance.getCriterion() as ResourceLocation

myCriterionTriggerInstance.getCriterion();
```

:::

:::group{name=serializeToJson}

Return Type: [JsonObject](/mods/sdmcrtplus/utils/file/json/google/gson/JsonObject)

```zenscript
CriterionTriggerInstance.serializeToJson(context as SerializationContext) as JsonObject
```

| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| context   | [SerializationContext](/mods/sdmcrtplus/advancements/critereon/SerializationContext) |


:::



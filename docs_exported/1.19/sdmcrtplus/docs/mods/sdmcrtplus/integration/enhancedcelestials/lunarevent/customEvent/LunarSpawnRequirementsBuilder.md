# LunarSpawnRequirementsBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enhancedcelestials.lunarevent.customEvent.LunarSpawnRequirementsBuilder;
```


## Static Properties

|           Name            |          Type           | Has Getter | Has Setter |
|---------------------------|-------------------------|------------|------------|
| DEFAULT_PHASES            | stdlib.List&lt;int?&gt; | true       | false      |
| DEFAULT_SUPER_MOON_PHASES | stdlib.List&lt;int?&gt; | true       | false      |

## Constructors


```zenscript
new LunarSpawnRequirementsBuilder() as LunarSpawnRequirementsBuilder
new LunarSpawnRequirementsBuilder();
```

## Methods

:::group{name=create}

Return Type: [LunarSpawnRequirementsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarSpawnRequirementsBuilder)

```zenscript
LunarSpawnRequirementsBuilder.create(chance as double, minNumberOfNights as int, validMoonPhases as stdlib.List<int?>) as LunarSpawnRequirementsBuilder
```

|     Parameter     |          Type           |
|-------------------|-------------------------|
| chance            | double                  |
| minNumberOfNights | int                     |
| validMoonPhases   | stdlib.List&lt;int?&gt; |


:::



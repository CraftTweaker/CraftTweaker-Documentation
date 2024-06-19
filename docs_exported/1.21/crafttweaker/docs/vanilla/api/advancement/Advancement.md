# Advancement

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.Advancement;
```


## Extending Record

Advancement extends Record. That means all methods available in Record are also available in Advancement

## Properties

|        Name         |                                    Type                                     | Has Getter | Has Setter |
|---------------------|-----------------------------------------------------------------------------|------------|------------|
| criteria            | [Criterion](/vanilla/api/advancement/Criterion)[string]                     | true       | false      |
| display             | [DisplayInfo](/vanilla/api/advancement/DisplayInfo)?                        | true       | false      |
| isRoot              | boolean                                                                     | true       | false      |
| name                | [Component](/vanilla/api/text/Component)?                                   | true       | false      |
| parent              | [ResourceLocation](/vanilla/api/resource/ResourceLocation)?                 | true       | false      |
| requirements        | [AdvancementRequirements](/vanilla/api/advancement/AdvancementRequirements) | true       | false      |
| rewards             | [AdvancementRewards](/vanilla/api/advancement/AdvancementRewards)           | true       | false      |
| sendsTelemetryEvent | boolean                                                                     | true       | false      |


# AdvancementProgress

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.AdvancementProgress;
```


## Implemented Interfaces
AdvancementProgress implements the following interfaces. That means all methods defined in these interfaces are also available in AdvancementProgress

- Comparable&lt;[AdvancementProgress](/vanilla/api/advancement/AdvancementProgress)&gt;

## Methods

:::group{name=getCriterion}

Return Type: [CriterionProgress](/vanilla/api/advancement/CriterionProgress)?

```zenscript
AdvancementProgress.getCriterion(criterionName as string) as CriterionProgress?
```

|   Parameter   |  Type  |
|---------------|--------|
| criterionName | string |


:::

:::group{name=grantProgress}

Return Type: boolean

```zenscript
AdvancementProgress.grantProgress(criterionName as string) as boolean
```

|   Parameter   |  Type  |
|---------------|--------|
| criterionName | string |


:::

:::group{name=revokeProgress}

Return Type: boolean

```zenscript
AdvancementProgress.revokeProgress(criterionName as string) as boolean
```

|   Parameter   |  Type  |
|---------------|--------|
| criterionName | string |


:::


## Properties

|       Name        |                   Type                    | Has Getter | Has Setter |
|-------------------|-------------------------------------------|------------|------------|
| completedCriteria | stdlib.List&lt;string&gt;                 | true       | false      |
| done              | boolean                                   | true       | false      |
| hasProgress       | boolean                                   | true       | false      |
| percent           | float                                     | true       | false      |
| progressText      | [Component](/vanilla/api/text/Component)? | true       | false      |
| remainingCriteria | stdlib.List&lt;string&gt;                 | true       | false      |


# ExperienceOrb

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.misc.ExperienceOrb;
```


## Extending Entity

ExperienceOrb extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in ExperienceOrb

## Methods

:::group{name=getIcon}

Return Type: int

```zenscript
// ExperienceOrb.getIcon() as int

myExperienceOrb.getIcon();
```

:::

:::group{name=getValue}

Return Type: int

```zenscript
// ExperienceOrb.getValue() as int

myExperienceOrb.getValue();
```

:::


## Properties

| Name  | Type | Has Getter | Has Setter |
|-------|------|------------|------------|
| icon  | int  | true       | false      |
| value | int  | true       | false      |


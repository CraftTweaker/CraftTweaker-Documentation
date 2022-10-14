# HumanoidArm

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.HumanoidArm;
```


## Enum Constants

HumanoidArm is an enum. It has 2 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:entity/humanoidarm:left>
<constant:minecraft:entity/humanoidarm:right>
```
## Methods

:::group{name=getName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// HumanoidArm.getName() as Component

myHumanoidArm.getName();
```

:::

:::group{name=getOpposite}

Return Type: [HumanoidArm](/vanilla/api/entity/HumanoidArm)

```zenscript
// HumanoidArm.getOpposite() as HumanoidArm

myHumanoidArm.getOpposite();
```

:::


## Properties

| Nombre   | Type                                           | Has Getter | Has Setter |
| -------- | ---------------------------------------------- | ---------- | ---------- |
| opposite | [HumanoidArm](/vanilla/api/entity/HumanoidArm) | true       | false      |


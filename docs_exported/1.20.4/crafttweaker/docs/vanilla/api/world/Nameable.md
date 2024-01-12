# Nameable

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Nameable;
```


## Methods

:::group{name=getCustomName}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// Nameable.getCustomName() as Component?

myNameable.getCustomName();
```

:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Nameable.getDisplayName() as Component

myNameable.getDisplayName();
```

:::

:::group{name=getName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Nameable.getName() as Component

myNameable.getName();
```

:::

:::group{name=hasCustomName}

Return Type: boolean

```zenscript
// Nameable.hasCustomName() as boolean

myNameable.hasCustomName();
```

:::


## Properties

|     Name      |                   Type                    | Has Getter | Has Setter |
|---------------|-------------------------------------------|------------|------------|
| customName    | [Component](/vanilla/api/text/Component)? | true       | false      |
| displayName   | [Component](/vanilla/api/text/Component)  | true       | false      |
| hasCustomName | boolean                                   | true       | false      |
| name          | [Component](/vanilla/api/text/Component)  | true       | false      |


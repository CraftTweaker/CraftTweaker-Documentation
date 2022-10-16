# Nameable

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Nameable;
```


## Metodi

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


## Proprietà

| Nome          | Tipo                                      | Ha Getter | Ha Setter |
| ------------- | ----------------------------------------- | --------- | --------- |
| customName    | [Component](/vanilla/api/text/Component)? | sì        | no        |
| displayName   | [Component](/vanilla/api/text/Component)  | sì        | no        |
| hasCustomName | boolean                                   | sì        | no        |
| nome          | [Component](/vanilla/api/text/Component)  | sì        | no        |


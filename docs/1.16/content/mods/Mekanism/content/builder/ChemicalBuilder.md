# ChemicalBuilder&LT;CHEMICAL : Chemical<CHEMICAL>, BUILDER, ATTRIBUTE : ChemicalAttribute, CRT_BUILDER : ChemicalBuilder<CHEMICAL,BUILDER,ATTRIBUTE,CRT_BUILDER>&GT;

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.builder.ChemicalBuilder;
```

## Methods

:::group{name=build}

Create a chemical from this builder with the given name.

Return Type: void

```zenscript
ChemicalBuilder.build(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Registry name for the chemical. |

:::

:::group{name=color}

Sets the tint to apply to this chemical when rendering.

Return Type: CRT_BUILDER

```zenscript
ChemicalBuilder.color(color as int) 
```

| Parameter | Type | Description |
|-----------|------|-------------|
| color | int | Color in RRGGBB format |

:::

:::group{name=colorRepresentation}

Sets the color representation to apply to this chemical when used for things like durability bars.
Mostly for use in combination with custom textures that are not tinted.

Return Type: CRT_BUILDER

```zenscript
ChemicalBuilder.colorRepresentation(color as int)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| color | int | Color in RRGGBB format |

:::

:::group{name=hidden}

Marks that this chemical will be hidden in JEI, and not included in the preset of filled chemical
tanks.

Return Type: CRT_BUILDER

```zenscript
// ChemicalBuilder.hidden()

myChemicalBuilder.hidden();
```

:::

:::group{name=with}

Adds an attribute to the set of attributes this chemical has.

Return Type: CRT_BUILDER

```zenscript
ChemicalBuilder.with(attribute as ATTRIBUTE)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| attribute | ATTRIBUTE | Attribute to add. |

:::



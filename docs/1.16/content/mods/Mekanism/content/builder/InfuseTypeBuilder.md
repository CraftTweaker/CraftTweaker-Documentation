# InfuseTypeBuilder

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.builder.InfuseTypeBuilder;
```

## Extending ChemicalBuilder

InfuseTypeBuilder extends [ChemicalBuilder](/mods/Mekanism/content/builder/ChemicalBuilder). That
means all methods available in [ChemicalBuilder](/mods/Mekanism/content/builder/ChemicalBuilder) are
also available in InfuseTypeBuilder

## Static Methods

:::group{name=builder}

Creates a builder for registering a custom [InfuseType](/mods/Mekanism/api/chemical/InfuseType).

Returns: A builder for creating a custom [InfuseType](/mods/Mekanism/api/chemical/InfuseType).  
Return Type: [InfuseTypeBuilder](/mods/Mekanism/content/builder/InfuseTypeBuilder)

```zenscript
InfuseTypeBuilder.builder(textureLocation as MCResourceLocation) as InfuseTypeBuilder
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| textureLocation | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | If present the [MCResourceLocation](/vanilla/api/util/MCResourceLocation) representing the texture this [InfuseType](/mods/Mekanism/api/chemical/InfuseType) will use, otherwise defaults to our default { | true |  |

:::

## Methods

:::group{name=build}

Create a chemical from this builder with the given name.

Return Type: void

```zenscript
InfuseTypeBuilder.build(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Registry name for the chemical. |

:::

:::group{name=color}

Sets the tint to apply to this chemical when rendering.

Return Type: CRT_BUILDER

```zenscript
InfuseTypeBuilder.color(color as int) as CRT_BUILDER
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
InfuseTypeBuilder.colorRepresentation(color as int) as CRT_BUILDER
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
// InfuseTypeBuilder.hidden() as CRT_BUILDER

myInfuseTypeBuilder.hidden();
```

:::

:::group{name=with}

Adds an attribute to the set of attributes this chemical has.

Return Type: CRT_BUILDER

```zenscript
InfuseTypeBuilder.with(attribute as ATTRIBUTE) as CRT_BUILDER
```

| Parameter | Type | Description |
|-----------|------|-------------|
| attribute | ATTRIBUTE | Attribute to add. |

:::



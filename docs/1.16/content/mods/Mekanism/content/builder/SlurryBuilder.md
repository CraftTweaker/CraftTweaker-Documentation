# SlurryBuilder

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.builder.SlurryBuilder;
```

## Extending ChemicalBuilder

SlurryBuilder extends [ChemicalBuilder](/mods/Mekanism/content/builder/ChemicalBuilder). That means
all methods available in [ChemicalBuilder](/mods/Mekanism/content/builder/ChemicalBuilder) are also
available in SlurryBuilder

## Static Methods

:::group{name=builder}

Creates a builder for registering a custom [Slurry](/mods/Mekanism/api/chemical/Slurry).

Returns: A builder for creating a custom [Slurry](/mods/Mekanism/api/chemical/Slurry).  
Return Type: [SlurryBuilder](/mods/Mekanism/content/builder/SlurryBuilder)

```zenscript
SlurryBuilder.builder(textureLocation as MCResourceLocation) as SlurryBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| textureLocation | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) representing the texture this [Slurry](/mods/Mekanism/api/chemical/Slurry) will use. |

:::

:::group{name=clean}

Creates a builder for registering a custom [Slurry](/mods/Mekanism/api/chemical/Slurry), using our
default clean [Slurry](/mods/Mekanism/api/chemical/Slurry) texture.

Returns: A builder for creating a custom [Slurry](/mods/Mekanism/api/chemical/Slurry).  
Return Type: [SlurryBuilder](/mods/Mekanism/content/builder/SlurryBuilder)

```zenscript
// SlurryBuilder.clean() as SlurryBuilder

SlurryBuilder.clean();
```

:::

:::group{name=dirty}

Creates a builder for registering a custom [Slurry](/mods/Mekanism/api/chemical/Slurry), using our
default dirty [Slurry](/mods/Mekanism/api/chemical/Slurry) texture.

Returns: A builder for creating a custom [Slurry](/mods/Mekanism/api/chemical/Slurry).  
Return Type: [SlurryBuilder](/mods/Mekanism/content/builder/SlurryBuilder)

```zenscript
// SlurryBuilder.dirty() as SlurryBuilder

SlurryBuilder.dirty();
```

:::

## Methods

:::group{name=build}

Create a chemical from this builder with the given name.

Return Type: void

```zenscript
SlurryBuilder.build(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Registry name for the chemical. |

:::

:::group{name=color}

Sets the tint to apply to this chemical when rendering.

Return Type: CRT_BUILDER

```zenscript
SlurryBuilder.color(color as int) as CRT_BUILDER
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
SlurryBuilder.colorRepresentation(color as int) as CRT_BUILDER
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
// SlurryBuilder.hidden() as CRT_BUILDER

mySlurryBuilder.hidden();
```

:::

:::group{name=ore}

Sets the tag that represents the ore that goes with
this [Slurry](/mods/Mekanism/api/chemical/Slurry).

Return Type: [SlurryBuilder](/mods/Mekanism/content/builder/SlurryBuilder)

```zenscript
SlurryBuilder.ore(oreTag as MCTag<MCItemDefinition>) as SlurryBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| oreTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | Tag representing the ore. |

:::

:::group{name=ore}

Sets the tag that represents the ore that goes with
this [Slurry](/mods/Mekanism/api/chemical/Slurry).

Return Type: [SlurryBuilder](/mods/Mekanism/content/builder/SlurryBuilder)

```zenscript
SlurryBuilder.ore(oreTagLocation as MCResourceLocation) as SlurryBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| oreTagLocation | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) of the item tag representing the ore. |

:::

:::group{name=with}

Adds an attribute to the set of attributes this chemical has.

Return Type: CRT_BUILDER

```zenscript
SlurryBuilder.with(attribute as ATTRIBUTE) as CRT_BUILDER
```

| Parameter | Type | Description |
|-----------|------|-------------|
| attribute | ATTRIBUTE | Attribute to add. |

:::



# Fábrica de Vanilla

La Fábrica de Vanilla te permite crear [Bloques](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/), [Elementos](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) y [Pestañas creativas](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) que puedes añadir al juego.

## Llamando

Puede encontrar el paquete en `mods.contenttweaker.VanillaFactory`

## Creando contenido

### Crear bloques

```zenscript
mods.contenttweaker.VanillaFactory.createBlock(String unlocalizedName, IMaterialDefinition material);
```

Parámetros:

- String unlocalizedName: El nombre no traducido del bloque.
- [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) material: El material base del que está hecho el bloque.

Devuelve un objeto de [BlockRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/). ¡Consulta la página de [Bloquear](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) para más información y un script de ejemplo!

### Crear artículos

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

Parámetros:

- Cadena unlocalizedName: El nombre del elemento no localizado.

Devuelve un objeto de [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). ¡Consulta la página de [artículo](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) para más información y un script de ejemplo!

### Crear Pestañas Creativas

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemStackSupplier
```

Parámetros:

- String unlocalizedName: El nombre de la pestaña no localizado.
- Representación de objetos o bloques: El ítem/bloque que se mostrará como el símbolo de la pestaña. También puede utilizar una función [de ItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/).

Devuelve un objeto [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/). ¡Consulta la página de [Creative Tab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/) para más información y un script de ejemplo!

### Crear fluidos

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

Parámetros:

- String unlocalizedName: El nombre no traducido del fluido.
- Color int: Código de color del fluido.
- [Color CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) : El color del fluido como objeto de color.

Devuelve un objeto de [FluidRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/). Consulta la página [de fluidos](/Mods/ContentTweaker/Vanilla/Creatable_Content/Fluid/) para más información y un script de ejemplo.

### Crear artículos de comida

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

Parámetros:

- String unlocalizedName: El nombre del elemento no localizado.
- int healAmount: El Valor de Alimento

Devuelve un objeto de [ItemFoodRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/). Echa un vistazo a la página de [Comida](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) para más información y un script de ejemplo.
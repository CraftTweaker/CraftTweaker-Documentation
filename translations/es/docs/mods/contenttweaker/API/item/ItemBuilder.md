# ItemBuilder

The item builder is to... build items (surprise!) <p> It allows you to set various properties that will change how the item behaves and what it can do. También puedes usar [mods.contenttweaker.item.ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) para cambiar a un constructor más especializado, si existe ninguno. <p> Para decirle a CoT que quieres que el elemento aparezca en el juego, necesitas llamar a [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) y especificar una ruta de ubicación de recurso válida.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.item.ItemBuilder
```

## Implemented Interfaces
ItemBuilder implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
Creates a new ItemBuilder. Recuerda que esto _no_ creará un nuevo bloque en el juego, necesitas llamar a [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) para eso.
```zenscript
nuevo mods.contenttweaker.item.ItemBuilder();
```

## Methods
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| Parameter        | Type   | Description                          |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |


### withItemGroup

Allows you to set the item group that this item will appear in. By default, items will land in `misc`

 Returns: `This builder, used for method chaining`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Parameter | Type                                                                              | Description                               |
| --------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| itemGroup | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The item group this item should appear in |


### withMaxDamage

Te permite establecer el daño máximo para este objeto.<br/> Tenga en cuenta que esto no se puede usar en combinación con [mods. ontenttweaker.item.ItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Returns: `This builder, used for method chaining`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxDamage(maxDamage as int);
new ItemBuilder().withMaxDamage(250);
```

| Parameter | Type | Description            |
| --------- | ---- | ---------------------- |
| maxDamage | int  | The maximum stack size |


### withMaxStackSize

Le permite establecer el tamaño máximo de la pila para este elemento.<br/> Tenga en cuenta que esto no se puede usar en combinación con [mods. ontenttweaker.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Returns: `This builder, used for method chaining`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize as int);
new ItemBuilder().withMaxStackSize(16);
```

| Parameter    | Type | Description            |
| ------------ | ---- | ---------------------- |
| maxStackSize | int  | The maximum stack size |


### withNoRepair

Sets that this item may not be repaired in an anvil Returns: `This builder, used for method chaining`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withNoRepair();
```

### withRarity

Allows you to set the item's rarity

 Returns: `This builder, used for method chaining`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| rarity    | String | The rarity  |


### withType

Sets the specific type of this item. After this method is called the builder's context will switch to the more provided type builder. That means that the methods of this builder will no longer be available, so any properties you wish to set should be set before you call this method. Returns: `A builder with the given item.`

Return type: T

```zenscript
new ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| ParameterName | Bounds                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------- |
| T             | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |



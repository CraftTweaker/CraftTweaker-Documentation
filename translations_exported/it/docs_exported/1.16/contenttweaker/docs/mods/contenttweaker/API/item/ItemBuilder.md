# ItemBuilder

The item builder is to... build items (surprise!)

 It allows you to set various properties that will change how the item behaves and what it can do. You can also use [this](.)#withType to switch to a more specialized builder, if there exist any.

 To tell CoT that you want the item to appear in-game you need to call [this](.)#build(String) and specify a valid resource location path.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.ItemBuilder;
```


## Interfacce Implementate
ItemBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in ItemBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors

Creates a new ItemBuilder. <br />  Remember that this will _not_ create a new block in the game, you need to call [this](.)#build(String) for that.
```zenscript
new ItemBuilder() as ItemBuilder
new ItemBuilder();
```

## Metodi

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// ItemBuilder.build(resourceLocation as string) as void

new ItemBuilder().build("my_awesome_block");
```

| Parametro        | Tipo   | Descrizione                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::

:::group{name=isImmuneToFire}

Sets that this item is immune to fire

Returns: The builder, used for method chaining  
Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
// ItemBuilder.isImmuneToFire() as ItemBuilder

new ItemBuilder().isImmuneToFire();
```

:::

:::group{name=withFood}

Sets that this item is a food

Returns: The builder, used for method chaining  
Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
ItemBuilder.withFood(food as MCFood) as ItemBuilder
```

| Parametro | Tipo                               | Descrizione |
| --------- | ---------------------------------- | ----------- |
| food      | [MCFood](/vanilla/api/food/MCFood) | the food    |


:::

:::group{name=withItemGroup}

Allows you to set the item group that this item will appear in. By default, items will land in `misc`

Returns: This builder, used for method chaining  
Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
// ItemBuilder.withItemGroup(itemGroup as ItemGroup) as ItemBuilder

new ItemBuilder().withItemGroup(<itemGroup:misc>);
```

| Parametro | Tipo                                     | Descrizione                               |
| --------- | ---------------------------------------- | ----------------------------------------- |
| itemGroup | [ItemGroup](/vanilla/api/item/ItemGroup) | The item group this item should appear in |


:::

:::group{name=withMaxDamage}

Allows you to set the maximum damage for this item.<br/> Be warned that this cannot be used in combination with [this](.)#withMaxStackSize!

Returns: This builder, used for method chaining  
Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
// ItemBuilder.withMaxDamage(maxDamage as int) as ItemBuilder

new ItemBuilder().withMaxDamage(250);
```

| Parametro | Tipo | Descrizione            |
| --------- | ---- | ---------------------- |
| maxDamage | int  | The maximum stack size |


:::

:::group{name=withMaxStackSize}

Allows you to set the maximum stack size for this item.<br/> Be warned that this cannot be used in combination with [this](.)#withMaxDamage!

Returns: This builder, used for method chaining  
Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
// ItemBuilder.withMaxStackSize(maxStackSize as int) as ItemBuilder

new ItemBuilder().withMaxStackSize(16);
```

| Parametro    | Tipo | Descrizione            |
| ------------ | ---- | ---------------------- |
| maxStackSize | int  | The maximum stack size |


:::

:::group{name=withNoRepair}

Sets that this item may not be repaired in an anvil

Returns: This builder, used for method chaining  
Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
// ItemBuilder.withNoRepair() as ItemBuilder

new ItemBuilder().withNoRepair();
```

:::

:::group{name=withRarity}

Allows you to set the item's rarity

Returns: This builder, used for method chaining  
Return Type: [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
// ItemBuilder.withRarity(rarity as string) as ItemBuilder

new ItemBuilder().withRarity("EPIC");
```

| Parametro | Tipo   | Descrizione |
| --------- | ------ | ----------- |
| rarity    | string | La rarità   |


:::

:::group{name=withType}

Sets the specific type of this item. Dopo aver chiamato questo metodo il contesto del builder passerà al builder del tipo più fornito. Questo significa che i metodi di questo builder non saranno più disponibili, quindi ogni proprietà che desideri impostare dovrà essere impostata prima di chiamare questo metodo.

Returns: A builder with the given item.  
Return Type: T

```zenscript
ItemBuilder.withType<T : ItemTypeBuilder>() as T
```

| Parametro | Tipo                                                             | Descrizione                              |
| --------- | ---------------------------------------------------------------- | ---------------------------------------- |
| T         | [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) | The Type of item that this should become |


:::



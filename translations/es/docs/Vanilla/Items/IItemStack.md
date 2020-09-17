# IItemStack

Un objeto ItemStack consiste en una definición de artículo [](/Vanilla/Items/IItemDefinition/), un valor de meta/daño y datos NBT.  
En otras palabras, se refiere a un elemento o a un bloque.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.item.ItemStack;`

## Calling an IItemStack

Hay varios métodos que devuelven un ItemStack

* Usando el [bracket Handler](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* Usando el método `makeStack()` en un objeto [ItemDefinition](/Vanilla/Items/IItemDefinition/) `<minecraft:stone>.definition.makeStack(0)`
* Usando el getter de `pila` en un objeto [IEntityDrop](/Vanilla/Entities/IEntityDrop/)
* Usando el getter `first Item` en un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

## Calling an IItemStack[] or a IItemStack List

Si llama a estas funciones, lo más probable es que lo haga para iterar a través de las listas/matrices resultantes

* Utilizando el método `items` en un [IIngredient](/Vanilla/Variable_Types/IIngredient/) devuelve un IItemStack List: `<ore:ingotGold>.items`
* Utilizando el método `itemArray` en un [IIngredient](/Vanilla/Variable_Types/IIngredient/) devuelve un ItemStack[]: `<ore:ingotGold>.itemArray`
* Utilizando el método `items` en un objeto [IMod](/Vanilla/Game/Mods/#imod) devuelve un ItemStack[]: `loadedMods["minecraft"].items`

## Funciones

¿Qué podemos hacer con eso ahora?

### Extendiendo IIngrediente

IItemStack extends [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
That means all functionality that is available to [IIngredient](/Vanilla/Variable_Types/IIngredient/) objects also is applicable to IItemStacks. <details><summary>Métodos derivados</summary> 

* stack.mark
* stack.amount
* stack.items
* stack.itemArray
* pila.líquidos
* stack.commandString
* pila | otherIngredient
* stack.or(otherIngredient)
* stack.transform([transformer](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([transformer](/Vanilla/Items/Item_Transformers/))
* stack.only([condición](/Vanilla/Items/Item_Conditions/))
* stack.marked(marcar)
* stack.matches(elemento)
* stack.matchesExact(elemento)
* stack.matches(líquido)
* la pila tiene ingrediente
* stack.applyTransform(pila, jugador)
* stack.hasTransformers()</details>

### ZenGetters/ZenSetters

Lea cómo usarlos [aquí](/UsingThisWiki/). También, revisa los ejemplos a continuación.

| ZenGetter/ZenMethod              | ZenSetter/ZenMethod | Tipo                                                           |
| -------------------------------- | ------------------- | -------------------------------------------------------------- |
| definición                       |                     | [Definición de ítems](/Vanilla/Items/IItemDefinition/)         |
| nombre                           |                     | cadena                                                         |
| nombre de pantalla               | nombre de pantalla  | cadena                                                         |
| maxStackSize                     | maxStackSize        | int                                                            |
| dureza                           | dureza              | flotante                                                       |
| daño                             |                     | int                                                            |
| maxDamage                        | maxDamage           | int                                                            |
| hasTag                           |                     | pluma                                                          |
| etiqueta                         | withTag(etiqueta)   | [IData](/Vanilla/Data/IData/)                                  |
| ores                             |                     | Lista <[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)\>     |
| clases de herramientas           |                     | Lista<string\>                                                |
| itemEnchantability               |                     | int                                                            |
| contenedor                       |                     | IItemStack                                                     |
| hasContainerItem                 |                     | pluma                                                          |
| coste de reparación              | coste de reparación | int                                                            |
| canEditBloques                   |                     | pluma                                                          |
| isOnItemFrame                    |                     | pluma                                                          |
| encantable                       |                     | pluma                                                          |
| encantado                        |                     | pluma                                                          |
| está Dañado                      |                     | pluma                                                          |
| dañable                          |                     | pluma                                                          |
| es ItemBlock                     |                     | libro (si el elemento contiene es un bloque de elementos)      |
| es apilable                      |                     | pluma                                                          |
| isBeaconPayment                  |                     | pluma                                                          |
| hasEfecto                        |                     | pluma                                                          |
| hasDisplayName                   |                     | pluma                                                          |
| metadatos                        |                     | int                                                            |
| hasSubtypes                      |                     | pluma                                                          |
| isEmpty                          |                     | pluma                                                          |
| tiempo quemado                   |                     | int                                                            |
| mostrar barra de durabilidad     |                     | pluma                                                          |
| ha Personalizado                 |                     | pluma                                                          |
| encantamientos                   |                     | Lista <[Encantamiento](/Vanilla/Enchantments/IEnchantment/)\> |
| coincidir con la etiqueta exacta |                     | pluma                                                          |

#### Cantidad

| Método de llamada                | Devuelve                                                       | Tipos de parámetros |
| -------------------------------- | -------------------------------------------------------------- | ------------------- |
| `stack.anyAmount()`              | Un nuevo ItemStack con la propiedad cambiada                   |                     |
| `monto stack.amount(int amount)` | Un nuevo ItemStack con la propiedad cambiada                   | int                 |
| `pila.withAmount(cantidad int)`  | Un nuevo ItemStack con la propiedad cambiada                   | int                 |
| `monto de pila *`                | Un nuevo ItemStack con la propiedad cambiada                   | int                 |
| `stack.splitStack(int amount)`   | El ItemStack dividido. La antigua se reducirá en consecuencia. | int                 |

#### Peso

| Método de llamada                     | Devuelve                                                   | Tipos de parámetros   |
| ------------------------------------- | ---------------------------------------------------------- | --------------------- |
| `stack.percent(oportunidad flotante)` | Una [Pesada de objetos](/Vanilla/Items/WeightedItemStack/) | flotante (100 = 100%) |
| `stack.weight(oportunidad flotante)`  | Una [Pesada de objetos](/Vanilla/Items/WeightedItemStack/) | flotante (1 = 100%)   |

#### Daño

| Método de llamada                            | Devuelve                                     | Tipos de parámetros                       |
| -------------------------------------------- | -------------------------------------------- | ----------------------------------------- |
| `stack.anyDamage()`                          | Un nuevo ItemStack con la propiedad cambiada |                                           |
| `pila.withDaño (daño de int)`                | Un nuevo ItemStack con la propiedad cambiada | int                                       |
| `stack.damageItem(int amount, Itity entity)` | vacío (nada)                                 | int, [Itidad](/Vanilla/Entities/IEntity/) |

#### Etiquetas

| Método de llamada                                | Devuelve                                     | Tipos de parámetros                 |
| ------------------------------------------------ | -------------------------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | Un nuevo ItemStack con la propiedad cambiada |                                     |
| `stack.withTag(IData tag)`                       | Un nuevo ItemStack con la propiedad cambiada | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(IData tag, bool matchTagExact)`   | Un nuevo ItemStack con la propiedad cambiada | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(String name)`                   | Un nuevo ItemStack con la propiedad cambiada | cadena                              |
| `stack.updateTag(IData tag)`                     | Un nuevo ItemStack con la propiedad cambiada | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData tag, bool matchTagExact)` | Un nuevo ItemStack con la propiedad cambiada | [IData](/Vanilla/Data/IData/), bool |

#### Bloquear proyección

| Método de llamada  | Devuelve                                           |
| ------------------ | -------------------------------------------------- |
| `stack.asBlock()`  | Un nuevo objeto [IBlock](/Vanilla/Blocks/IBlock/). |
| `pila como IBlock` | Un nuevo objeto [IBlock](/Vanilla/Blocks/IBlock/). |

#### Nombre Lor/Mostrar

| Método de llamada                    | Devuelve                                                                                                              | Tipos de parámetros                         |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `stack.withDisplayName(String name)` | Un nuevo ItemStack con la propiedad cambiada. A diferencia del setter displayNombre, esto sólo se aplica a este ítem. | string (supports color codes with "§")      |
| `pila.withLore(String[] lore)`       | Un nuevo ItemStack con la propiedad cambiada.                                                                         | cadena[] (soporta códigos de color con "§") |
| `stack.clearCustomName()`            | vacío (nada)                                                                                                          |                                             |

#### Encantamientos

| Método de llamada                                                         | Devuelve     | Tipos de parámetros                                                           |
| ------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------- |
| `stack.canApplyAtCraftingTable(encantamiento de IEnchantmentDefinition )` | Una bota.    | [Definición de IEncantamiento](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `stack.addEnchantment(encantamiento IEnchantment)`                        | vacío (nada) | [Iencantamiento](/Vanilla/Enchantments/IEnchantment/)                         |

#### canItem...

| Método de llamada                                   | Devuelve                                                          | Tipos de parámetros                                       |
| --------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------- |
| `stack.canPlaceOn(IBlockDefinition block)`          | Una pluma que indica si el objeto puede colocarse en el bloque.   | [Definición de IBlock](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canDestroy(bloque IBlockDefinition )`        | Una pluma que indica si el objeto puede destruir el bloque.       | [Definición de IBlock](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(bloque IBlockState)`         | Una pluma que indica si el objeto puede cosechar el bloque.       | [Estado de IBlock](/Vanilla/Blocks/IBlockState/)          |
| `stack.getStrength�n.instBlock(bloque IBlockState)` | Un flotante que representa la fuerza del objeto contra el bloque. | [Estado de IBlock](/Vanilla/Blocks/IBlockState/)          |

#### create IEntityItem

| Método de llamada                                            | Devuelve                                                                                                  | Tipos de parámetro                                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `stack.createEntityItem(mundo IWorld, int x, int y, int z);` | Un nuevo [ItityItem](/Vanilla/Entities/IEntityItem/) que corresponde al nuevo elemento creado en el mundo | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | Un nuevo [ItityItem](/Vanilla/Entities/IEntityItem/) que corresponde al nuevo elemento creado en el mundo | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## ItemTransformers and ItemCondiciones

Puede encontrar cómo utilizarlos en la página [IIngredient](/Vanilla/Variable_Types/IIngredient/) o en sus entradas de nuevo especificadas:  
[Condiciones del artículo](/Vanilla/Items/Item_Conditions/)  
[Transformadores del artículo](/Vanilla/Items/Item_Transformers/)

## Ejemplos

#### Nombre a mostrar

Globalmente (traduce el elemento al nuevo nombre).

```zenscript
val apple = <minecraft:apple>;

//prints "Apple"
print(apple.displayName);

//Establece el nombre de la pantalla de manzanas a "Tomato"
apple. isplayName = "Tomato";

//prints "Tomato"
print(apple.displayName);
```

Localmente (sólo este elemento).

```zenscript
<minecraft:coal>.withDisplayName("Oro negro");
```

#### Lore

`<minecraft:coal>.withLore(["Esta función","requiere un","string[]"]);`

#### Tamaño máximo de la pila

El tamaño máximo de la pila es cuántos objetos caben en una pila por ejemplo, el tamaño de la pila es 64 y el de los cubos es de solo 16.

```zenscript
val manzana = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//prints 64
print(apple. axStackSize);

//establece el tamaño máximo de la pila a 32
apple.maxStackSize = 32;

//prints 32
print(apple. axStackSize);

//sets apples Max Stack size to Bucket's Max Stack size
apple.maxStackSize = bucket.maxStackSize;

//prints 16
print(apple.maxStackSize);
```

#### Dureza

La dureza es cuánto tiempo se tarda en romper el bloque referido. Sólo funciona si el objeto se refiere a un bloque.

```zenscript
val herass = <minecraft:grass>;

//prints 1.0
print(grass.hardness);

//sets grass Hardness to 10.0
grass.hardness = 10.0;

//prints 10.0
print(grass.hardness);
```

#### Daño

El daño de objetos que no pueden ser dañados es 0.

```zenscript
val pick = <minecraft:diamond_pickaxe>;

//prints 1561
print(pick. axDaño);

//establece el daño máximo del Pico de Diamante a 256
pick.maxDamage = 256;

//prints 256
print(pick. axDaño);



//Daño no importa, usado en recetas
<minecraft:iron_pickaxe>.anyDamage();

//Con el daño dado
<minecraft:iron_pickaxe>.withDamage(122);
```

#### Etiqueta

La etiqueta es un objeto [IData](/Vanilla/Data/IData/) .  
Si el elemento no contiene una etiqueta, retornará una etiqueta vacía, nunca nula.

```zenscript
//creates apple with the given tag
//Removes existing tags
<minecraft:apple>. ithTag({Unbreakable: 1});

//creates apple with an emtpy tag
<minecraft:apple>. ithEmptyTag();

//elimina una etiqueta por su nombre
item. emoveTag("tagName");

//actualizar la etiqueta existente
//Si la etiqueta no sobreescribe una etiqueta existente, permanecerán constantes.
item.updateTag({Unbreakable: 1});
```

#### Líquido

Devuelve el líquido contenido en un único elemento (si es múltiple) o nulo si el elemento no es un contenedor.  
Devuelve un [objeto ILiquidStack](/Vanilla/Liquids/ILiquidStack/) o nulo.

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### Cantidad

¿Cuántas manzanas hay?

```zenscript
<minecraft:apple>. nyAmount();

//1 Apple
val manzana = <minecraft:apple>;

//2 manzanas
val moreApples = manzana * 2;

//3 Manzanas
val evenMoreApples = <minecraft:apple> * 3;
```

#### Peso

Devuelve un [weightedItemStack](/Vanilla/Items/WeightedItemStack/) con el porcentaje proporcionado.

```zenscript
val manzana = <minecraft:apple>;

//Crea un weightedItemStack con 100 por ciento de probabilidad
var applePercentage = manzana % 100;

//Hace lo mismo que el anterior
applePercent = apple. ocho(1.0);
```

#### Ores

Devuelve una Lista de [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) que se refiere a este elemento.

```zenscript
<minecraft:apple>.ores;
```

#### Enviando a IBlock

Puedes lanzar una pila de objetos a un [IBlock](/Vanilla/Blocks/IBlock/), siempre y cuando se refiera a un bloque, de lo contrario el reparto lanzará una excepción.

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> como crafttweaker.block.IBlock;
```

También puedes probar si un ItemStack contiene un ItemBlock y puede ser convertido:

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### Propiedades de comida

Puedes comprobar si una pila de ítems es un objeto de comida y qué propiedades de comida tiene.  
¡Que no funcione para cada artículo de comida modda!

```zenscript
<minecraft:apple>.isFood; //true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```
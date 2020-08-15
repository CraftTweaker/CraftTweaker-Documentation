# Entrada IreDictada

Cuando el [IOreDict](/Vanilla/OreDict/IOreDict/) es el léxico, el IOreDictEntries son las entradas del léxico.  
Consisten en un nombre (nombre del OreDiccionario) y una explicación (todos los elementos coincidentes).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.oredict.IOreDictEntry;`

## Recuperando tal objeto.

There are multiple ways of getting an IOreDictEntry Object: If you refer to an oreDict that does not yet exist, it will be created.

- Usando la clase [IOreDict](/Vanilla/OreDict/IOreDict/).
- Usando el mandador de bloques de mineral [](/Vanilla/Brackets/Bracket_Ore/).
- Using an [IItemDefinition's `ores` getter](/Vanilla/Items/IItemDefinition/).

## ZenGetters

Puedes usar estos getters para recuperar información sobre el orédico:

| nombre      | Descripción                                     | Tipo de devolución                       |
| ----------- | ----------------------------------------------- | ---------------------------------------- |
| nombre      | Devuelve el nombre de oreDict                   | cadena                                   |
| vacío       | Devuelve si el oreDict está vacío               | pluma                                    |
| primer ítem | Devuelve el primero de los elementos de oreDict | [IItemStack](/Vanilla/Items/IItemStack/) |

## Métodos

Puede utilizar estos métodos en un objeto IOreDictEntry :

### Añadir/Quitar elementos

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(ItemStack[] elementos);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### Comprobar si un IOreDictEntrada contiene un elemento

Puede comprobar si un IOreDictEntry contiene un elemento usando `in` o `tiene` palabras clave:

```zenscript
val oreDictEnt = <ore:ingotIron>;

//Mientras usas es posible
if(oreDictEnt en <minecraft:iron_ingot>){
    print("¡Hierro está en el oreDict! );
}

//muchos prefieren usar tiene ya que podría tener más sentido grammar-wise
if(oreDictEnt tiene <minecraft:iron_ingot>){
    print("¡Hierro todavía está en el oreDict! );
}
```

### Ordena una Entrada IOreDictosa

La corrección de una entrada IOreDictEntry significa que todos los elementos en el otro oreDictEntry serán reemplazados por los elementos en la entrada oreDictEntry que el método fue ejecutado en:

```zenscript
//hacer hierro y cobre equivalente
val iron = <ore:ingotIron>;
val cobre = <ore:ingotCopper>;

//agrega todas las entradas del hierro al cobre para que el cobre contenga las entradas de hierro y cobre oreDic
de hierro. ddAll(cobre); 


//espeja cobre a hierro, por lo que todos los objetos en hierro serán reemplazados por todos los en cobre.
//En este caso eso significa por todos los hierro y cobre oreDictEntries
coper.mirror(iron);
```

## Implementación de IIngredient

IOreDictEntry extiende [IIngrediente](/Vanilla/Variable_Types/IIngredient/). Esto significa que todos los métodos disponibles para [IIngredient](/Vanilla/Variable_Types/IIngredient/) también están disponibles para IOreDictEntries. También significa que usted puede colocar IOreDictEntries en los arreglos de IIngredient (tales como los métodos de elaboración de recetas).

### Iterando a través de elementos de un oreDictEntry

```zenscript
val hierro = <ore:ingotIron>;

for item in iron.items{
    recipe.remove(item);
}
```
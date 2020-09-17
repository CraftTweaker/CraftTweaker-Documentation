# Tipos variables

Como seguramente ya estropeaste un poco con variables y valores, deberías preguntarte, cómo CraftTweaker sabe si se trata de un entero, un objeto o una entrada oreDic?

La forma más fácil de declarar una variable es usando ```nombre de var = valor;```. This creates the variable and casts it to the value it thinks is most fitting for the situation.

## Moviendo una variable a un tipo específico

Los scripts más complejos pueden requerir convertir una variable como un tipo específico. Por ejemplo, esto fallaría:

```zenscript
var test;

test = <minecraft:dirt>;
recetas.remove(test);
```

Entonces, ¿por qué fracasa esto? Esto se debe a que CT envía variables que no tienen un valor de inicio al tipo IAny Type. Ese tipo se hizo para facilitar algunos manejadores de recetas, aunque nunca se implementó realmente, por lo que a veces hace más daño que bien. Originalmente fue concebido como un tipo que puede tomar la forma de la mayoría de otros tipos así que no necesita cambiar variables todo el tiempo, pero la interfaz nunca se implementó.

Back to the topic: How can we fix this issue? Al emitir la prueba de variable a ```IItemStack```, que es el tipo utilizado para los artículos. Lamentablemente, primero hay que importar algunos tipos y éste es uno de ellos.

```zenscript
import crafttweaker.item.IItemStack;
var test como IItemStack;

test = <minecraft:dirt>;
recipes.remove(test);
```

## Lista de tipos de variables

Aquí hay una lista (incompleta) de la mayoría de tipos de variable

| Nombre en CT)                                         | Explicación                                                                                                                 | Ejemplo                                                | Importar                                    |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| Entero (int)                                          | Los números enteros son números enteros (por ejemplo, 1,2,3,...), mayúsculas a 2 147 483 647                                | `var test = 10 as int;`                                |                                             |
| [IItemStack](/Vanilla/Items/IItemStack/)              | Elementos individuales                                                                                                      | `var test = <minecraft:dirt> como ItemStack;`    | importar crafttweaker.item.IItemStack;      |
| [IIngredientes](/Vanilla/Variable_Types/IIngredient/) | Artículos individuales o múltiples (por ejemplo, `<minecraft:dirt>`, `<ore:ingotIron>`,...)                     | `var test = <minecraft:dirt> como IIngrediente;` | importar crafttweaker.item.IIngredient;     |
| [Entrada IreDictada](/Vanilla/OreDict/IOreDictEntry/) | Múltiples elementos de un OreDict (por ejemplo, `<ore:ingotIron>`, `<ore:ingotGold>`,...)                       | `var test = <ore:ingotIron> como IOreDictEntry;` | importar crafttweaker.oredict.IOreDictEntry |
| Booleano (bool)                                       | Los booleanos son verdaderos o falsos.                                                                                      | `var test = false como bool;`                          |                                             |
| Byte (byte)                                           | Los valores de los bytes son números enteros de 0 a 255 ()                                                                  | `var test = 125 as byte;`                              |                                             |
| Punto flotante (flotante)                             | Decimales                                                                                                                   | `var test = 1.25 as float;`                            |                                             |
| Doble precisión (doble)                               | Como los puntos flotantes, sólo más preciso y con un rango de números más alto                                              | `var test = 1.25 as double;`                           |                                             |
| Largo (largo)                                         | Como entero, pero con un rango de números más alto (por lo general int está bien)                                           | `var test = 30 como largo;`                            |                                             |
| Nulo (nulo)                                           | Null, nada, nada. No es realmente un tipo, pero todavía es útil                                                             | `var test = null;`                                     |                                             |
| Corto (corto)                                         | Como entero, pero con un rango numérico más pequeño                                                                         | `var test = 16 como corto;`                            |                                             |
| Cadena (cadena)                                       | Una cadena es un texto. Aquí normalmente no necesitará las "as", ya que cualquier cosa en "s es automáticamente una cadena. | `var test = "¡Hola Mundo!" como cadena;`               |                                             |
| Vacío (vacío)                                         | Aún menos que nulo. Probablemente sólo necesitará el tipo de vacío cuando se trate de funciones                             | `var test como vacío;`                                 |                                             |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)        | Igual que ItemStack, sólo para líquidos                                                                                     | `var test = <liquid:water> as ILiquidStack;`     | importar crafttweaker.liquid.ILiquidStack;  |
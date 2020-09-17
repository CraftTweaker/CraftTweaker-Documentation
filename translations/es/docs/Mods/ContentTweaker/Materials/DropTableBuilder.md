# DropTableBuilder

DropTableBuilder se utiliza para crear cadenas de 'soltar' para minerales y muestras que soportan soltar múltiples pilas de objetos a la vez, pilas que contienen más de un elemento, y gotas ponderadas.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.DropTableBuilder;`

## Métodos

Estos métodos permiten crear y modificar una tabla de soltar. Todos los métodos de compilación devuelven el constructor en el que fueron ejecutados, lo que permite encadenar métodos.

| Nombre del método | Descripción                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| newSlot()         | Crea una nueva tabla de soltar si se ejecuta estáticamente o añade una nueva ranura a la mesa de soltar. |
| añadir elemento   | Añade el elemento especificado a la ranura actual de la tabla de soltar.                                 |
| enableFortune()   | Permite que la ranura actual se beneficie del encantamiento de las fortunas.                             |

### Uso:

#### `newSlot()`

DropTableBuilder.newSlot() creará un nuevo constructor. \<builder\>.newSlot() finalizará la ranura actual e iniciará una nueva.

#### `addItem(String itemStr[, int weight[, int count]])`

`artículo Str` puede ser el nombre de un elemento como \<mod\>:\<item\>:\<meta\>, una entrada de diccionario de mineral como oredicto:\<entry\>, o la palabra vacía. `el peso` controla las probabilidades de que el objeto se suelte usando la fórmula \<item weight\>/\<sum of item weights within slot\>. Por defecto es 1 si se omite. `contador` es cuántos de los elementos sueltos si se seleccionan. Por defecto es 1 si se omite.

#### `enableFortune()`

Las ranuras que tengan habilitada la fortuna seleccionarán una serie de elementos adicionales desde la ranura hasta el nivel de la fortuna utilizada. Coincide con el comportamiento de las fortunas de vainilla en las ranuras que tienen sólo 1 objeto.

## Ejemplos usando el Constructor

### Crear una tabla de borrado

```zenscript
var complextable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```

Esta tabla de gota soltaría 2 diamantes (10%) o 1 carbón (90%) beneficiándose de fortuna, 1 piedra (100%) y 1 adoquín (50%).

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   . ddItem("minecraft:lapis_lazuli", 1, 4)
                   . ddItem("minecraft:lapis_lazuli", 1, 5)
                   . ddItem("minecraft:lapis_lazuli", 1, 6)
                   . ddItem("minecraft:lapis_lazuli", 1, 7)
                   . ddItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```

Este cuadro de gota imita la lapis de vainilla, dejando caer 4-8 lapis y beneficiándose de la fortuna.

### Usando una tabla de soltar

Los constructores se utilizan asignándolos como un valor de datos "soltar". Dado que los valores de datos sólo aceptan cadenas, el constructor se convertirá como una cadena usando su método toString.

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var complexData = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complex Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisData.addDataValue("drops",lapistable);
complexDataValue("drops",complextable+lapistable);
```

Cuando se agregan 2 constructores juntos, se crea una nueva tabla con las ranuras de ambas tablas.
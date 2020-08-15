# Constructor de material

¡Usando este paquete puedes crear materiales con los que puedes crear herramientas!

## Importar la clase

Podría ser necesario que importes la clase si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar mods.contenttweaker.tconstruct.MaterialBuilder;`

## Creando un Material

En primer lugar, necesitará crear un Constructor de Material  
Esto puede hacerse utilizando el método de creación estática.

```zenscript
//mods.contenttweaker.tconstruct.MaterialBuilder.create(String identifier);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

Recuerda que necesitarás registrar el material después de que hayas realizado tus cambios.  
Esto puede hacerse con el método `register` que devolverá una [Representación de Material](/Mods/ContentTweaker/Tinkers_Construct/Material/) del nuevo Material.

```zenscript
miMat.register();
```

## Propiedades

Puede configurar y obtener estas propiedades usando `myMaterial.name`.

| Propiedad               | Tipo                                                  | Notas adicionales                                                           |
| ----------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| identifier              | cadena                                                | Nombre único                                                                |
| color                   | int                                                   |                                                                             |
| hidden                  | pluma                                                 |                                                                             |
| líquido                 | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)        | Salida de Fundición                                                         |
| mesa de trabajo         | pluma                                                 | Se puede crear en el constructor de piezas                                  |
| castable                | pluma                                                 | Se puede crear usando lanzamientos. ¡Requiere que se establezca el líquido! |
| elemento representativo | [IItemStack](/Vanilla/Items/IItemStack/)              | Mostrar elemento en el manual de los tiradores                              |
| minero representativo   | [Entrada IreDictada](/Vanilla/OreDict/IOreDictEntry/) | Mostrar si representativeItem es nulo                                       |
| fragmento               | [IItemStack](/Vanilla/Items/IItemStack/)              | Usado en lugar del fragmento del tinker en el constructor de piezas.        |
| localizedName           | cadena                                                | El nombre mostrado                                                          |

## Propiedades calculadas

### ItemLocalizador

Puede utilizar esta función para calcular los nombres de los materiales si necesita que sea el caso.  
Utiliza una [Representación de Material](/Mods/ContentTweaker/Tinkers_Construct/Material/) de este material y el nombre de la herramienta que está siendo renombrada (por ejemplo, "Mattock")

```zenscript
myMAt.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## Añadir elementos de material

Si utiliza el elemento dado en el constructor de piezas, puedes establecer cuántos puntos materiales darán o cuánto reparará el objeto.

```zenscript
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(IItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `elemento` es el elemento que coincide en su lugar. Puede utilizar [Condiciones del artículo](/Vanilla/Items/Item_Conditions/) pero sin Transformadores. 
- `la cantidad requerida` es la cantidad de artículos que coinciden en contra. Puede dividirlos entre todas las ranuras que proporciona la forja de herramientas, lo que también le permite ir por encima de 64. En el segundo ejemplo anterior, se necesitan 4 bloques de hierro por adición. Por defecto es 1.
- `monto coincidente` es la cantidad de puntos materiales añadidos por `cantidad necesaria`. En el segundo ejemplo de arriba cuatro bloques de hierro dan dos puntos materiales. Por defecto es 144 (un valor de ingot/un material).
- Si usas la función `remover`, se eliminarán todos los ingredientes característicos que coincidan con el objeto.

## Rasgos del material

Puedes añadir un rasgo al material.  
Todos los artículos fabricados con este material tendrán este rasgo.  
Usa una Cadena con el identificador del rasgo, y una cadena de `dependencia` opcional que te dirá qué tipo de elemento debe ser afectado por el rasgo.  
Alternativamente, puedes usar una [Representación de rasgos](/Mods/ContentTweaker/Tinkers_Construct/Trait/), , que sólo funciona si el rasgo ya está inicializado por el tiempo en que se ejecuta CoT (lo más probable es que sólo para rasgos personalizados). Los valores posibles para la dependencia `` son:

- `null` (por defecto) → Todos los elementos, a menos que ese dep ya tenga otros rasgos.
- `"cabeza"`
- `"handle"`
- `"extra"`
- `"arco"`
- `"bowstring"`
- `"proyectil"`
- `"Shaft"`
- `"fletching"`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

También puedes eliminar los rasgos materiales (que es especialmente útil al realizar los materiales por lotes).  
Los quita usando su cadena de identificador y una dependencia opcional.  
Si omites la dependencia o utilizas `null` todos los rasgos con ese identificador serán removidos.

```zenscript
//myMaterial.remove(String identifier, @Optional String dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## Estadísticas del material

Para que TiCon construya sus materiales, necesita conocer las estadísticas del material.  
¡Solo se construirán los tipos de herramientas cuya estadística ha sido añadida!

```zenscript
<br /><br />myMat.addHeadMaterialStats(int durability, float miningSpeed, float attackDamage, int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat.removeHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat.removeBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
myMat.removeProjectileMaterialStats();
```

## Ejemplo

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat. iquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat. ddItem(<item:minecraft:repeater>, 1, 2);
testMat.addItem(<item:minecraft:red_flower:4>);
testMat.representativeItem = <item:minecraft:red_flower:4>;
testMat. ddHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addHandleMaterialStats(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat. ddMaterialTrait(<ticontrait:kindlich_test>, "cabeza");
testMat.addMaterialTrait("explasting", "bowstring");
testMat. ddMaterialTrait("blasting", "head");

//null (o no especificar ese parámetro) significa que este es un rasgo predeterminado.
//Los rasgos por defecto sólo se consultan cuando no se añaden otros rasgos a ese tipo de material.
//En este caso, el rasgo denso sólo estará en las barras de herramientas, porque las cuerdas de arco y las cabezas ya tienen otras características.
testMat.addMaterialTrait("dense", null);

//Faulty, debería error, aunque solo durante init, ya que entonces las cadenas serán verificadas.
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```
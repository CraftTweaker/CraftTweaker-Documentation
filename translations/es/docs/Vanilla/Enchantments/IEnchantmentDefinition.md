# Definición de IEncantamiento

Una Definición de Encantamiento es el Encantamiento real, no posee un nivel, pero puede usar esto para recuperar información sobre el Encantamiento.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.enchantments.IEnchantmentDefinition;`

## Recuperando tal objeto

Puedes recuperar un objeto de este tipo desde el manejador de [bracket de encantamiento](/Vanilla/Brackets/Bracket_Enchantment/) o desde un objeto [IEncantment](/Vanilla/Enchantments/IEnchantment/).

## ZenGetters/ZenSetters

| ZenGetter                | Ajuste | Tipo    |
| ------------------------ | ------ | ------- |
| id                       |        | int     |
| nombre                   | nombre | cadena  |
| nivel máximo             |        | int     |
| minLevel                 |        | int     |
| está permitido en libros |        | boolean |
| isTreasureEncantamiento  |        | boolean |
| isCurse                  |        | boolean |
| registryName             |        | cadena  |

## Métodos

### CanApply

Comprueba si el encantamiento se puede poner en el objeto.  
El primer método comprueba en general, el segundo comprueba si el objeto puede encantarse a este encantamiento usando la tabla de encantamientos.  
Ambos devuelven una pluma y requieren un [ItemStack](/Vanilla/Items/IItemStack/) como parámetro de entrada.

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEncantabilidad

Comprueba qué encantabilidad debe tener el objeto para el encantamiento en el nivel dado.  
Ambos métodos retornan un int y toman el nivel del encantamiento como parámetro int.

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### Nombre traducido

Devuelve el nombre traducido (por ejemplo, "smite IV").  
Devuelve una cadena y requiere el nivel del encantamiento como parámetro int.  
¡Hace lo mismo que [IEnchantment](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!

```objectzenscriptivec
ench.getTranslatedName(int level);
```

### hacer encantamiento

Al dar a una Definición de Encantamiento un nivel, puedes hacer un [IEncantamiento](/Vanilla/Enchantments/IEnchantment/) fuera de él:

```zenscript
ench.makeEnchantment(int level);
ench * level;
```

### Compara con otros objetos IEnchantmentDefinition

Puedes usar el operador `==` para comprobar si dos encantamientos son iguales.  
Esto significa si tienen el mismo id.

```zenscript
if(enchA == enchB)
    imprime ("¡Misma!");
```

## Ejemplo

```zenscript
importar crafttweaker.enchantments.IEnchantmentDefinition;
importar crafttweaker.data. Datos;

val array as IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>];

var map as IData = {};

for ench in array {
    map += ench. akeEnchantment(3).makeTag();
}

print(map.asString());


recipes.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```
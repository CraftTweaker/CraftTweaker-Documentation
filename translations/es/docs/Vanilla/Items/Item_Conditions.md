# Condiciones del artículo

A veces los artículos normales no lo cortarán:

A veces queremos ser capaces de especificar recetas que sólo funcionan cuando el objeto de entrada cumple algunas condiciones.

A veces queremos poder especificar recetas que producirán un objeto especial, ya sea con valor NBT-Tag o Daño o de otro tipo.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.item.ItemCondition;`

## Condiciones de entrada

Esto afectará a los objetos que puedes usar para fabricar el objeto resultante. Recuerda, puedes mezclar modificadores, para mezclar Daño y NBT-Tag, por ejemplo

```zenscript
<minecraft:iron_pickaxe>.onlyDamaged().withTag({display: {Lore: "¿No somos todos maripos?"}});
```

### Daño

#### cualquier daño

El valor del daño del objeto introducido no importa para la receta

```zenscript
item.anyDamage()
```

#### solo dañado

El elemento de entrada debe ser dañado

```zenscript
item.onlyDamaged();
```

#### Dañado al menos

El valor del daño del objeto de entrada debe ser al menos el `valor`especificado  
`Valor` es un int

```zenscript
item.onlyDamageAtLeast(valor);
```

#### Daño máximo

El valor máximo del daño del objeto de entrada debe ser el `valor`especificado  
`Valor` es un int

```zenscript
item.onlyDamageAtMost(valor);
```

#### Daño entre

El valor del daño del objeto de entrada debe estar entre el `valor 1` y `valor 2`  
`valor 1` es un int  
`valor 2` es un int

```zenscript
item.onlyDamageBetween(valor1, valor2);
```

### Recuperar artículos o prohibir explícitamente la reutilización de un objeto

A veces necesitas una receta en la que recuperes algunos de tus objetos de entrada.  
Al aplicar `transformDamage(int)` puedes crear tales recetas.

#### daño a transformaciones

El objeto de entrada recibirá `valor` de puntos de daño y lo recuperarás, a menos que se rompa durante el proceso de fabricación.  
`Valor` es un int

```zenscript
item.transformDamage(valor);
```

### Etiquetas NBT

A veces quieres que tus ingredientes necesiten una etiqueta NBT específica. The recipe doesn't care if your item has NBT-Tags other than the ones specified, So a pickaxe with a specific lore may also be enchanted!

Si usas `withTag` jei lo mostrará correctamente, si usas `onlyWithTag`, ¡jei solo mostrará un elemento sin etiquetas!

Here's how you do it: `NBTTag` is your NBT Data

```zenscript
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: {Name: "Escoger el Pickleberry"}});
<minecraft.iron_pickaxe>.withTag({display: {Name: "Escoger el Pickleberry"}});
```

## Modificadores de salida

Si puede especificar condiciones de entrada, no es tan difícil definir también condiciones de salida, o más bien, modificadores de salida.

### Daño

Tu objeto de salida tendrá `valor` puntos de daño.  
`Valor` es un int.

```zenscript
item.withDamage(value);
```

### Etiquetas NBT

Su elemento de salida tendrá `NBTTag` como NBT-Tag.  
`NBTTag` es su NBT Data

```zenscript
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Escoger el Pickleberry"}})
```

## Registrando condiciones propias del artículo

También puede añadir sus propias condiciones de artículo. Estas son funciones especiales que aceptan el elemento [](/Vanilla/Items/IItemStack/) en sí mismo como un solo parámetro.

```zenscript
conditionedItem = item.only(function(item) {return true;});
```

La función necesita devolver una pluma que sea cierta si el elemento coincide con la condición.
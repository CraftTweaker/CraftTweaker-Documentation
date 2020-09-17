# Manejador de brazaletes de objeto

The Item Bracket Handler gives you access to the Items in the game. Sólo es posible obtener artículos registrados en el juego por lo que añadir o eliminar mods puede causar problemas si hace referencia a los elementos del mod en un manejador de soporte de ITem.

Los artículos son referenciados en el Manejador de soportes de artículo por así:

```zenscript
<modid:itemname>
```

Con el modificador `` siendo el modificador del mod al que pertenece el articulo y `nombre de elemento` siendo el nombre del artículo, Se recomienda usar `/ct mano` para obtener el nombre correcto del artículo.

Sin embargo, en general es así:

```zenscript
<item:modid:itemname:meta>
```

Con `elemento` como primera entrada, dice específicamente "¡Esto tiene que ser un artículo!" a CT.  
Como has visto anteriormente: Opcional.  
Normalmente nunca necesitará esto, a menos que se trate de varios manejadores de brazos personalizados.  
`modid` es el modificador del mod al que pertenece el artículo.  
`nombre de artículo` es el nombre del objeto, usa /ct mano para obtener el nombre correcto.  
`meta` es el meta valor del elemento (por ejemplo, el valor del daño, tipos, etc.). Este es un Integer.  
También puede utilizar un comodín `*` para direccionar todos los valores meta.  
También opcional: Si se deja afuera, será 0.

Normalmente, esto devolverá un objeto ItemStack.  
Por favor, consulte [la respectiva entrada de la wiki](/Vanilla/Items/IItemStack/) para más información.

## Ejemplos

Un ejemplo del Manejador de Bracket Objeto sería:

```zenscript
//apple
<minecraft:apple>

//carbón
<minecraft:coal>
<minecraft:coal:0>

//charcoal
<minecraft:coal:1>

//ambos, carbón y carbón
<minecraft:coal:*>
<item:minecraft:coal:*>
```

Esto te dará acceso al artículo de `Apple`.
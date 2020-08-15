# Consejos

Añadir o eliminar una descripción es muy fácil:  
Todo lo que necesitas es un elemento (o un diccionario o similar), en otras palabras, un IIngrediente.

## Borrando tooltips

Esto elimina TODAS las sugerencias del elemento ``

```zenscript
item.clearTooltip();
```

## Eliminando tooltips específicos

Esta función elimina todos los consejos de herramientas que coincidan con la expresión regular dada. Una descripción es generalmente una línea de texto (a menos que haya referencias forzadas debido al espacio).

```zenscript
item.removeTooltip(regex);
```

`elemento` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)  
`tT` es una cadena

## Consejos normales

Esto añade `tT` como descripción a `elemento`.

```zenscript
item.addTooltip(tT);

<minecraft:chest>.addTooltip("Store, ¿qué puedo decir más?");
```

`elemento` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)  
`tT` es una cadena

## Desplazar Tooltips

Esto añade una descripción que sólo será visible cuando mantenga presionado.  
También puedes añadir una información que será visible cuando no mantengas shift (normalmente se utiliza para crear algo como un mensaje informándote sobre la descripción de turno.)

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
<minecraft:redstone>.addShiftTooltip("RED!!!", "Mantén pulsado para saber lo que soy");
```

`elemento` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)  
`tT` es un [IFormattedText](/Vanilla/Utils/IFormattedText/). También puedes usar una cadena ya que se convierten automáticamente.  
`información` es un [IFormattedText](/Vanilla/Utils/IFormattedText/). También puede utilizar una cadena ya que se convierten automáticamente.

# Markup

El mundo es colorido, y así debería ser todas nuestras herramientas. También puede anidar estas opciones, si lo desea (si desea un texto verde, que es sorprendente)

## Colorear una cadena

Puedes aplicar uno de los 16 colores a tu cadena

```zenscript
format.black
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
formato. rayo
format.darkGray
format.blue
format.green
format.aqua
format.red
format.lightPurple
formato.amarillo
formato.blanco
```

```zenscript
<minecraft:stick>.addTooltip(format.green("Este no estaba maduro"));
```

## Formateando una cadena

Puede aplicar diferentes formatos a su Cadena si lo desea:

```zenscript
format.obfuscados
format.bold
format.strikethrough
format.highligh
format.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethroughh("Esto es una descripción incorrecta"));
```

## Funciones de ayuda

Puede reemplazar el parámetro [IFormattedText](/Vanilla/Utils/IFormattedText/) con un ITooltipFunction (`import crafttweaker.item. TooltipFunction;`).  
Estas funciones le permiten generar dinámicamente una descripción basada en el ItemStack dado.

Una función tooltip es una función que toma un [ItemStack](/Vanilla/Items/IItemStack/) y devuelve la descripción como string. Esto significa que usar un comando `format` *no funciona* para estas funciones, necesitarás confiar en los prefijos de formato de Minecraft si necesitas conseguirlo.

Para las sugerencias de turno, también puedes proporcionar una segunda función que le permite también generar la descripción que debe mostrarse cuando no se presiona el cambio. Para consejos de herramientas de shift son ambos parámetros como función o ambos como [IFormattedText](/Vanilla/Utils/IFormattedText/), ¡sin mezclas!

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Ejemplo
<ore:myAxeOreDictionary>. dd(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>. ddAdvancedTooltip(function(item) {   
    return "Daño: " ~ item. daño ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>. ddShiftTooltip(function(item) {    
    return "Uses left: " ~ (item. axDaño - item.damage);
}, function(item){
    return "Mantén pulsado shift para algunas jugosas matemáticas.";
});
```
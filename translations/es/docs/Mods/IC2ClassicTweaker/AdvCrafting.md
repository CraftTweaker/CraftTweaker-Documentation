# Recetas avanzadas

## Paquete

```zenscript
importar mods.ic2.AdvRecipes;
```

## Tipos de receta
Hay varios tipos de recetas:

### Recetas moldeadas
Las recetas moldeadas son recetas, donde importa, qué objeto entra en qué ranura. Por ejemplo, no puedes organizar 7 pilas de lingotes de hierro diferentes en cualquier orden para crear piernas de hierro. La forma importa, por lo tanto es una receta en forma.

### Recetas sin Forma
Las recetas sin forma son recetas, donde sólo los objetos que pones en la cuadrícula de fabricación importan, mientras que la forma no tiene importancia. Por ejemplo, los tintes azules y amarillos crean tinte verde. A esta receta no le importa dónde pones el objeto.

## Añadir recetas

### addShaped
```zenscript
mods.ic2.AdvRecipes.addShaped(output,inputs);
```

Esto crea una receta en forma para `salida` usando `entradas` como Ingredientes.

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (see below)

`entradas` es un 2 Dimensional [IIngrediente](/Vanilla/Variable_Types/IIngredient/) Array.  
Así que la receta para Pantalones de Hierro sería escrita como `[[hierro,hierro],[hierro,hierro,hierro,[hierro],[hierro],[hierro, ull,iron]]`  
Si se trata de confundir, intente dividir los arreglos en una matriz por línea
```zenscript
hierro val = <minecraft:iron_ingot>;
piernas vales = <minecraft:iron_leggings>;

recetas avanzadas. ddShaped(piernas,
 [[hierro * 5,hierro * 7,hierro * 5],
  [hierro * 3,null,hierro * 3],
  [hierro,nulo]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(salida,entradas)
```

Esto crea una receta apilada sin forma para `salida` usando `entradas` como ingredientes.

`salida` es un [ItemStack](/Vanilla/Items/IItemStack/)  
`entradas` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(IItemStack de ingredientes, IIngredient[]);
mods.ic2.AdvRecipes.addHiddenShaped(ItemStack de salida, IIngredient[][] ingredientes);
```

Esto crea una receta apilada en forma o sin forma para `salida` usando `entradas` como ingredientes ocultos. 

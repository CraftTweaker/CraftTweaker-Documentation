# Etapas del artículo

Este mod es un complemento para la [API de GameStages](https://minecraft.curseforge.com/projects/game-stages). Las etapas de objetos permiten el acceso de objetos y bloques a un sistema de progresión personalizado establecido por el creador de modpack. Si un jugador no tiene la etapa requerida, el jugador tendrá problemas para usar el objeto. Para saber más sobre cómo hacer esto, echa un vistazo a la página de mod [aquí](https://minecraft.curseforge.com/projects/item-stages)

## Estrenando un objeto

Para que un elemento sea restringido con este mod, necesita estar asociado con una etapa. Esto se puede hacer de diferentes maneras.

```zenscript
/Etapas de un solo bloque o elemento. 
mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);

// Etapa un elemento con NBT parcial. Por ejemplo, esta etapa todos los libros de encantamiento LV 5.
mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short}]}));

// Etapa todos los elementos con una etiqueta del diccionario de minas.
mods.ItemStages.addItemStage("stage_name", <ore:dye>);

// Escena todos los elementos que son añadidos por un mod específico.
mods.ItemStages.stageModItems("stage_name", "modid");

// Elimina una etapa de un elemento específico, útil cuando está emparejado con stageModItems para reducir el tamaño del script.
mods.ItemStages.removeItemStage(<minecraft:stone>);
```

## Liquidos de Staging

Es posible que desee montar líquidos, esto se hace principalmente para ocultarlos en JEI.

```zenscript
// Efectúa un fluido único, como el agua.
mods.ItemStages.stageLiquid("stage_name", <liquid:water>);
```

## Encantamientos de Staging

Puedes escalar encantamientos para evitar que los jugadores usen objetos que tengan el encantamiento sobre ellos.

```zenscript
// Escribe un encantamiento específico. En este caso la protección.
mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);

// Escribe un encantamiento específico, a un nivel específico. En este caso Protección II.
mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
```

## Cambiando el nombre del elemento desconocido.

Puede que quieras dar un nuevo nombre a tus objetos restringidos mientras estén ocultos. Esto se puede utilizar para añadir chistes y minerales sutiles a tu paquete.

```zenscript
// Establece que toda la lana se llame "Clump of Fur" para los jugadores que no tienen el escenario correcto.
mods.ItemStages.setUnfamiliarName("Clump of Fur", <minecraft:wool:*>);
```

## Estrenando una descripción

Puede montar partes de los consejos de herramientas para ocultar información. Esto es especialmente útil cuando se trata de escenificar mods como Proyecto E que agregan una descripción "EMC:" a la mayoría de los elementos.

```zenscript
// Elimina cualquier línea en una descripción que comienza con "EMC:"
mods.ItemStages.stageTooltip("stage_name", "EMC:");
```

## Categoría de una receta

Con JEI puedes dar acceso a toda una categoría de recetas. Por ejemplo, si escalas la categoría de horno y un jugador no tiene la etapa, no podrán ver recetas de horno.

```zenscript
// Etapas de una categoría específica de recetas. En este ejemplo estamos organizando la categoría del yunque.
mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");
```
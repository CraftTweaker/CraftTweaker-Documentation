# Representación del rasgo

Una representación de Rasgo representa el Rasgo de Construir de un Tinker.  
Puedes obtener tal objeto desde el [Constructor de rasgos](/Mods/ContentTweaker/Tinkers_Construct/TraitBuilder/) o desde el [Manejador de Bracket de rasgo](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait/).

## Importar la clase

Podría ser necesario que importes la clase si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar mods.contenttweaker.tconstruct.Trait`

## ZenGetter

| ZenGetter     | Tipo   |
| ------------- | ------ |
| identifier    | cadena |
| commandString | cadena |

## Añadiendo elementos de rasgo

Si combina el ingrediente dado con una herramienta en la forja de herramientas de un tinker, puede aplicar el rasgo como modificador.

```zenscript
//myTrait.addModifierItem(elemento IIngredient, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2);
```

- `elemento` es el elemento que coincide en su lugar. Puede utilizar [Condiciones del artículo](/Vanilla/Items/Item_Conditions/) pero sin Transformadores. 
- `la cantidad requerida` es la cantidad de artículos que coinciden en contra. Puede dividirlos entre todas las ranuras que proporciona la forja de herramientas, lo que también le permite ir por encima de 64. En el ejemplo anterior, necesitas 4 bloques de hierro por adición. Por defecto es 1.
- `monto emparejado` es la cantidad de puntos de rasgo añadidos por `cantidad necesaria`. En el ejemplo de arriba cuatro bloques de hierro dan dos puntos característicos. Por defecto es 1.

## Acceder a datos de rasgo

Datos de rasgo son los datos que pertenecen a un rasgo y es itemBound. Como tal, puede proporcionar el [ItemStack](/Vanilla/Items/IItemStack/) y recuperar el objeto [TraitDataRepresentation](/Mods/ContentTweaker/Tinkers_Construct/TraitDataRepresentation/).

    val myTraitData = myTrait.getData(itemWithTrait);
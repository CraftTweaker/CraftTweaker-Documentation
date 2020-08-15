# Artículos de comida

¡Esto te permite añadir alimentos al juego!

## Crear la Representación del Artículo Alimento

Antes de poder añadir el elemento, necesitas crear una representación del artículo de comida que te permitirá establecer las propiedades del artículo que quieres añadir.  
Aquí es donde entra la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) en:

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

## Importar el paquete de representación

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.ItemFood;`

## Expansión de ElementRepresentación

La clase ItemFoodRepresentation expande [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Esto significa que todos los Métodos y ZenProperties que están disponibles para [Artículos](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) también están disponibles para artículos de comida.

## Propiedades de Zeng

Para obtener/establecer las propiedades puede utilizar ZenGetters/Setters o los métodos ZenMethods:

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| Propiedad            | Tipo                                                                                            | Requerido | Valor por defecto | Descripción/Notas                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------- | --------- | ----------------- | --------------------------------------------------------------------------------- |
| cantidad de curación | int                                                                                             | Sí        |                   | ¿Cuántos puntos de comida se restauran cuando se comen?                           |
| siempre              | pluma                                                                                           | Nu        | falso             | ¿Se puede seguir comiendo la comida si la barra de comida del usuario está llena? |
| comida de lobo       | pluma                                                                                           | Nu        | falso             | ¿Se puede utilizar la comida para domar las olas?                                 |
| saturación           | flotante                                                                                        | Nu        | 0.6               | Valor de saturación de la comida                                                  |
| onItemFoodEaten      | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | Nu        | nulo              | Called when the food item is eaten                                                |

## Registrando el elemento

¡Necesitas llamar a este método para registrar el elemento en el juego!  
¡De lo contrario no pasará nada!  
Después de haber llamado a esta función, no puede anular el registro del elemento ni cambiar ninguna de sus propiedades!

```zenscript
item.register();
```
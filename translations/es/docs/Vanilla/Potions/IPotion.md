# Ipoción

Un objeto IPotion se refiere a una poción en el juego.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.potions.IPotion;`

## Obteniendo un objeto IPotion

Puedes obtener tal objeto mediante el uso del manejador de [soporte de poción](/Vanilla/Brackets/Bracket_Potion/)

```zenscript
<potion:minecraft:strength>;
```

## Zengetters

Actualmente, todo lo que puedes hacer con pociones es obtener información sobre ellas.  
Ejemplo `<potion:minecraft:strength>.name`

| Zengetter           | ¿Qué hace                                                        | Tipo de devolución                              |
| ------------------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| nombre              | Devuelve el nombre interno de la poción                          | cadena                                          |
| badEffect           | Devuelve si el efecto de la poción es malo                       | pluma                                           |
| color líquido       | Devuelve el color de la poción                                   | int                                             |
| color líquido       | Devuelve el color de la poción                                   | int                                             |
| artículos curativos | Devuelve una lista de todos los elementos curativos de la poción | Lista <[ItemStack](/Vanilla/Items/IItemStack/)> |
| hasStatusIcono      | Devuelve si la poción tiene un icono de estado                   | pluma                                           |
| es beneficioso      | Devuelve si la poción es beneficiosa                             | pluma                                           |
| es instantáneo      | Devuelve si la poción es instantánea                             | pluma                                           |

## Métodos

### Hacer PotionEffect

Un efecto de poción [](/Vanilla/Potions/IPotionEffect/) es una poción que tiene una duración y amplificador. Puedes usar estos dos métodos para obtener uno de una IPotion:  
Como se puede adivinar, ambos retornan un objeto [IPotionEffect](/Vanilla/Potions/IPotionEffect/).

```zenscript
pot.makePotionEffect(int duration, int amplifier);
pot.makePotionEffect(int duration, int amplifier, boolean ambientEffect, boolean partículasShown);
```
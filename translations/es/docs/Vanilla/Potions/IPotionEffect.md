# Efecto de IPoción

Un IPotionEffect es un [Ipoción](/Vanilla/Potions/IPotion/) que también tiene una duración y un parámetro de amplificador (fuerza).  
Puedes obtenerlos de un objeto [IPotion](/Vanilla/Potions/IPotion/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.potions.IPotionEffect;`

## ZenGetter

| ZenGetter                                              | Tipo                                            |
| ------------------------------------------------------ | ----------------------------------------------- |
| duración                                               | int                                             |
| poción                                                 | [Ipoción](/Vanilla/Potions/IPotion/)            |
| No muestra partículas                                  | pluma                                           |
| amplificador                                           | int                                             |
| artículos curativos                                    | Lista <[ItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                                             | cadena                                          |
| isAmbient                                              | pluma                                           |
| es duración máxima de la poción (también un ZenSetter) | pluma                                           |

## Métodos

### Es un elemento curativo

Utiliza un [ItemStack](/Vanilla/Items/IItemStack/).  
Devuelve un bool

```zenscript
isCurativeItem(IItemStack item);
```

### Realiza el efecto en una entidad

Utiliza una [IEntity](/Vanilla/Entities/IEntity/) o cualquiera de sus subclases (por ejemplo, [IPlayer](/Vanilla/Players/IPlayer/)).  
Devuelve void (nada).

```zenscript
performEffect(Entidad Itidad);
```
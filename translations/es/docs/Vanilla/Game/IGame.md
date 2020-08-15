# Clase de juego

La Clase IGame se utiliza para obtener información general del juego. Se puede acceder usando `juego`

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.game.IGame;`

## Zengetters

| Zengetter | ¿Qué hace?                                          | Tipo de devolución                                                      | Uso               |
| --------- | --------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- |
| biomas    | Devuelve todos los biomas registrados como lista    | Lista<[IBiomas](/Vanilla/Biomes/IBiome/)>                               | `juego.biomas`    |
| bloques   | Devuelve todos los bloques registrados como lista   | Lista <[Definición del IBlock](/Vanilla/Blocks/IBlockDefinition/)>      | `game.blocks`     |
| entidades | Devuelve todas las entidades registradas como lista | Lista <[Definición de la Itidad](/Vanilla/Entities/IEntityDefinition/)> | `juego.entidades` |
| objetos   | Devuelve todos los elementos registrados como lista | Lista<[ItemDefinición](/Vanilla/Items/IItemDefinition/)>                | `juego.elementos` |
| líquidos  | Devuelve todos los líquidos registrados como lista  | Lista <[ILiquidDefinición](/Vanilla/Liquids/ILiquidDefinition/)>        | `juego.líquidos`  |
| pociones  | Devuelve todas las pociones registradas como lista  | Lista <[Ipoción](/Vanilla/Potions/IPotion/)>                            | `game.potions`    |

## Métodos

### Obtener Entidad

```zenscript
//getEntity(EntityName)

//essentially the same
val oveja = game.getEntity("oveja");
val oveja1 = <entity:minecraft:sheep>;
```

### Configuración de localización

Establece la localización.  
Todos los parámetros son cadenas. `game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### Localizar

Devuelve una cadena traducida  
`game.localize(key)`  
`game.localize(key, lang)`
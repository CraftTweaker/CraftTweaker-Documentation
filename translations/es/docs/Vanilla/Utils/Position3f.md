# Posición 3f

Una posición en Minecraft consiste en 3 valores: x, y y z.  
Un objeto Position3f almacena una posición usando esos tres valores.

## Importando el paquete

Podría ser necesario que [importe](/AdvancedFunctions/Import/) el paquete si encuentra algún problema (como lanzar un [Array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.util.Position3f;`

## Obteniendo un objeto Position3f

Puede obtener tal objeto utilizando:

- La posición `` de ZenGetter en un objeto [IPlayer](/Vanilla/Players/IPlayer/)
- El constructor de Position3f debajo
- El [IBlockPos](/Vanilla/World/IBlockPos/) Position3f caster.

## Constructor de posición 3f

Puede crear un objeto Position3f usando el siguiente método:

```zenscript
crafttweaker.util.Position3f.create(float x, float y, float z);
```

El primer método le permite crear una posición en las coordenadas dadas.

## ZenGetters y ZenSetters

| ZenGetter | Ajuste | Descripción                        |
| --------- | ------ | ---------------------------------- |
| x         | x      | Devuelve el valor x de la posición |
| y         | y      | Devuelve el valor y de la posición |
| z         | z      | Devuelve el valor z de la posición |

## Emitiendo como IBlockPos

You can use the two ways below to cast a Position3f Object to an [IBlockPos](/Vanilla/World/IBlockPos/) Object: Remember, for casting you need to [import](/AdvancedFunctions/Import/) the type you want to cast to unless you use the full name.

```zenscript
posThree.asBlockPos();
posTres como IBlockPos;
```
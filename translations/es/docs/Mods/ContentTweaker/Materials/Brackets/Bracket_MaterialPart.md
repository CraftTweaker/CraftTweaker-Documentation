# Manejador de partes de material

The Material Part Bracket Handler allows you access to the Material Parts in the game. Sólo es posible registrar Material Parts en el juego, por lo que debes tener cuidado con el orden de carga de los scripts.

Las Partes de Material son referenciadas en el manejador de Partes de Material de esta manera:

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

Si se encuentra la Pieza de Material, se devolverá un Objeto Definición de MaterialPart.  
Este es un objeto que actúa como ambos, una [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) así como un objeto [ItemStack](/Vanilla/Items/IItemStack/) , para que los métodos de ambas interfaces funcionen en la definición devuelta.
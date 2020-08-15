# ICTPlayer

Un ICTPlayer es el objeto especial [IPlayer](/Vanilla/Players/IPlayer/) de ContentTweaker.  
Esto significa que todos los métodos [ICTPlayer](/Vanilla/Players/IPlayer/) también están disponibles en este objeto!

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar mods.contenttweaker.Player;`

## Métodos

`IMutableItemStack getHeldItem(Hand hand);`

Parámetros:

- [Mano](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) mano → Mano principal u fuera de mano

Devuelve el [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) sostenido en la [Mano](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) dada.
# IItemRightClick

La función ItemRight Click puede añadirse a un artículo [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) y se activará cuando un usuario haga clic derecho con el objeto seleccionado en su mano principal.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.IItemRight tClick;`

## Parámetros

La función ItemRight Click es una función con los siguientes parámetros:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → El elemento que está hecho clic con el botón derecho
- [Mundo](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo en el que está el jugador
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) jugador → El jugador haciendo clic derecho
- String hand → EFF_HAND" o "MAIN_HAND"

La función necesita retornar `"SUCCESS"`, `"PASS"` o `"FAIL"`

## Ejemplo

```zenscript
zsItem.itemRight = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```
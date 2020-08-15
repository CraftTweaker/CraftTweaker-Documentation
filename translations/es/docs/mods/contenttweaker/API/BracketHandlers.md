# BracketHandlers

I advise against using the static methods in this class directly as they may be merged into CrT's BEP at any point. If you need to access the Bracket Expression Parser methods dynamically, you can use
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

This class was added by a mod with mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.BracketHandlers
```

## Metodos
### getItemGroup

Gets the itemGroup. Will throw an error if the group could not be found

 Returns: `The found MCItemGroup`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Parámetro | Tipo   | Descripción                                 |
| --------- | ------ | ------------------------------------------- |
| tokens    | Cadena | What you createDataCompound in the BEP call |


### getToolType

Gets a [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Will create a new one if the given one does not exist.

 Returns: `The [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) if found, or a new MCToolType`

Return type: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokens as String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| Parámetro | Tipo   | Descripción                                       |
| --------- | ------ | ------------------------------------------------- |
| tokens    | Cadena | What you would createDataCompound in the BEP call |




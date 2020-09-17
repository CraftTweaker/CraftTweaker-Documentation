# Manejadores de corchete

Aconsejo no usar los métodos estáticos en esta clase directamente ya que pueden ser fusionados en el BEP de CrT en cualquier momento. Si necesita acceder dinámicamente a los métodos del analizador de expresiones de corchete, puede utilizar
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.BracketHandlers
```

## Métodos
### getItemGroup

Obtiene el grupo de puntos. Lanzará un error si no se ha encontrado el grupo

 Devuelve: `El MCItemGroup encontrado`

Tipo de retorno: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Parámetro | Tipo   | Descripción                                 |
| --------- | ------ | ------------------------------------------- |
| fichas    | Cadena | Lo que creas DataCompound en la llamada BEP |


### getToolType

Obtiene un [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Se creará uno nuevo si el uno dado no existe.

 Devuelve: `El [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) si se encuentra, o un nuevo MCToolType`

Tipo de retorno: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokens as String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| Parámetro | Tipo   | Descripción                       |
| --------- | ------ | --------------------------------- |
| fichas    | Cadena | Lo que crearías en la llamada BEP |




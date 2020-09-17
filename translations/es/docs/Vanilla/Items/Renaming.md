# Cambiar el nombre

Siempre leer 'cofre es molesto, ¿no es así?

Por eso existe la posibilidad de cambiar el nombre de las cosas.

## Cambiando el nombre de la pantalla

Esta es probablemente la manera más fácil de conseguir un nombre de objeto o bloque diferente. Has renombrado `elemento` a `nuevoNombre`:

```zenscript
item.displayName = newName;

//Ejemplo
<minecraft:chest>.displayName = "Storage Box Deluxe";
```

`elemento` es un [ItemStack](/Vanilla/Items/IItemStack/).  
`newName` es una cadena.

## Cambiando la localización

Si algunos inventarios modeados todavía muestran el antiguo nombre del objeto en lugar del nuevo, necesita cambiar la localización. Puedes leer lo que eso significa en la entrada `del juego`.

```zenscript
game.setLocalization(languageCode,unlocalizedName,newName);

game.setLocalization("tile.chest.name","StorageBox Deluxe")
```

`languageCode` es una cadena y opcional. Si lo omite, se aplicará la localización independientemente del idioma definido por el cliente.  
`unlocaLizedName` es una cadena.  
`newName` es una cadena.
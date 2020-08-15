# Mods cargados

Puede utilizar la [palabra clave global](/Vanilla/Global_Functions/) `loadedMods` para acceder a todos los mods cargados actualmente.  
Si es necesario puede importar la clase usando `import crafttweaker.mods.ILoadedMods;`

## Comprobar si un mod está cargado

Utilice la función `in` para comprobar si un mod está cargado;  
También puede utilizar el método `contiene`:

```zenscript
//if MinecraftCoderPack está cargado
if(loadedMods in "mcp"){
    print("success!");
}

//if MinecraftCoderPack está cargado
if(loadedMods.contains("mcp")){
    print("success!!!");
}
```

## Obtener un mod específico

Puedes recuperar un mod específico como IMod mientras tengas su ID

```zenscript
//recupera el mod minecraftCoderPack
val mod = loadedMods["mcp"];
```

## Iterar a través de modList

Puedes iterar a través de la lista de mods cargados como este:

```zenscript
//imprime todas las definiciones de artículos registradas, no recomendadas en paquetes más grandes!
//la variable mod será un tipo IMod
para mod en loadedMods {
    print(mod. ame ~ ":");
    para elemento en mod. tems {
        print("\t\t" ~ item. isplayName);
    }
}
```

# IMod

La interfaz de IMod le proporciona información general sobre un mod específico.  
Si es necesario, puede importarse usando `import crafttweaker.mods.IMod;`

| Zengetter   | ¿Qué hace                                        | Tipo de devolución                         | Uso               |
| ----------- | ------------------------------------------------ | ------------------------------------------ | ----------------- |
| id          | Devuelve el id del mod                           | cadena                                     | `mod.id`          |
| nombre      | Devuelve el nombre interno del mod               | cadena                                     | `mod.name`        |
| versión     | Devuelve la versión del mod                      | cadena                                     | `mod.version`     |
| descripción | Devuelve la descripción del mod                  | cadena                                     | `mod.description` |
| objetos     | Devuelve todos los elementos añadidos por el mod | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |
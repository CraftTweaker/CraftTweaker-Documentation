# Modos

Contiene información sobre todos los mods que están registrados. Se puede acceder usando la palabra clave global `cargada`

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.mods.Mods
```

## Métodos
### getMod

Obtiene un mod específico

 Devuelve: `un MCModInfo específico`

Tipo de retorno: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| modificar | Cadena | No se proporcionó descripción |


### isModLoaded

Comprueba si un mod está detenido

 Devuelve: `verdadero si el mod está cargado`

Tipo de retorno: booleano

```zenscript
LoadedMods.isModLoaded(modid as String);
LoadedMods.isModLoaded("minecraft");
```

| Parámetro | Tipo   | Descripción              |
| --------- | ------ | ------------------------ |
| modificar | Cadena | modificar para comprobar |



## Propiedades

| Nombre | Tipo                                                                                | Tiene Obtén | Tiene Setter |
| ------ | ----------------------------------------------------------------------------------- | ----------- | ------------ |
| mods   | Lista&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | verdad      | falso        |
| tamaño | int                                                                                 | verdad      | falso        |


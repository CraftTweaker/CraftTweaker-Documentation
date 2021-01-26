# Preprocesador de ModCargado

Este preprocesador sólo carga un archivo si detecta un mod X en la lista de mods. 

## Uso

Puedes usar el preprocesador añadiendo ` #modloaded idDeMod ` a tu archivo zs, siendo el ` idDeMod ` el modId que quieres comprobar que exista. Un ejemplo de esto seria ` #modloaded tconstruct `.

You can also provide multiple modID's:  
`#modloaded minecraft tconstruct` will only be executed if minecraft AND tconstruct are loaded.

You can also invert a mod condition so that the mod is only loaded if the mod is NOT loaded: `#modloaded !tconstruct minecraft` will only be executed if minecraft is present and tconstruct is NOT present

## Lo que hace:

If you added this preprocessor to a script, it will only be executed if the provided modID's are present, in other words if the respecting mods are loaded.
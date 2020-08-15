# ModLoaderPreprocessor

El preprocesador modLoaded sólo ejecuta un script, si un mod determinado está presente.

## Llamar

Llamas al preprocesador modLoaded añadiendo `#modloaded modID` a tu archivo de script, con `modID` siendo el modId que desea comprobar:  
Ejemplo: `#modloaded minecraft`

También puede proporcionar múltiples modID's:  
`#modloaded minecraft tconstruct` sólo se ejecutará si se cargan minecraft AND tconstruct.

You can also invert a mod condition so that the mod is only loaded if the mod is NOT loaded: `#modloaded !tconstruct minecraft` will only be executed if minecraft is present and tconstruct is NOT present

## Qué hace

Si agregó este preprocesador a un script, sólo se ejecutará si los modID proporcionados están presentes, en otras palabras, si los mods respetan son cargados.
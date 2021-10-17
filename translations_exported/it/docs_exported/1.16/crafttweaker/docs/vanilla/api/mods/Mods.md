# Mods

Contiene informazioni su tutte le mod registrate. È possibile accedere usando la parola chiave globale `caricata.Mods`

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.Mods;
```


## Metodi

:::group{name=getMod}

Gets a specific mod

Returns: a specific MCModInfo  
Return Type: [ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
// Mods.getMod(modid as string) as ModInfo

loadedMods.getMod("minecraft");
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |


:::

:::group{name=isModLoaded}

Checks if a mod is laoded

Returns: true if the mod is loaded  
Return Type: boolean

```zenscript
// Mods.isModLoaded(modid as string) as boolean

loadedMods.isModLoaded("minecraft");
```

| Parametro | Tipo   | Descrizione           |
| --------- | ------ | --------------------- |
| modid     | string | modid per controllare |


:::


## Proprietà

| Nome | Tipo                                                                | Ha Getter | Ha Setter | Descrizione                         |
| ---- | ------------------------------------------------------------------- | --------- | --------- | ----------------------------------- |
| mod  | stdlib.List&lt;[ModInfo](/vanilla/api/mods/ModInfo)&gt; | sì        | no        | Gets a list of all mods in the game |
| size | int                                                                 | sì        | no        | Gets the amount of mods loaded      |


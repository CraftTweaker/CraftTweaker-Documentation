# Mods

Contiene informazioni su tutte le mod registrate. È possibile accedere usando la parola chiave globale `caricata.Mods`

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.mods.Mods
```

## Methods
### getMod

Ottiene una mod specifica

 Restituisce: `uno specifico MCModInfo`

Tipo restituito: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| modid     | String | Nessuna descrizione fornita |


### isModLoaded

Controlla se una mod è bloccata

 Restituisce: `true se la mod è caricata`

Return type: boolean

```zenscript
loadedMods.isModLoaded(modid as String);
loadedMods.isModLoaded("minecraft");
```

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| modid     | String | modid per controllare |



## Properties

| Name | Type                                                                                 | Ha Getter | Ha Setter |
| ---- | ------------------------------------------------------------------------------------ | --------- | --------- |
| mod  | Elenco&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true      | false     |
| size | int                                                                                  | true      | false     |


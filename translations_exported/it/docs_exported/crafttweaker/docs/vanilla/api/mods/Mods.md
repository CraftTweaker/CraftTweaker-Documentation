# Mods

Contiene informazioni su tutte le mod registrate. È possibile accedere usando la parola chiave globale `caricata.Mods`

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.mods.Mods
```

## Metodi
### getMod

Ottiene una mod specifica

 Restituisce: `uno specifico MCModInfo`

Tipo restituito: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| modid     | Stringa | Nessuna descrizione fornita |


### isModLoaded

Controlla se una mod è bloccata

 Restituisce: `true se la mod è caricata`

Tipo restituito: booleano

```zenscript
loadedMods.isModLoaded(modid as String);
loadedMods.isModLoaded("minecraft");
```

| Parametro | Tipo    | Descrizione           |
| --------- | ------- | --------------------- |
| modid     | Stringa | modid per controllare |



## Proprietà

| Nome       | Tipo                                                                                 | Ha Getter | Ha Setter |
| ---------- | ------------------------------------------------------------------------------------ | --------- | --------- |
| mod        | Elenco&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | vero      | falso     |
| dimensione | int                                                                                  | vero      | falso     |


# ITICMaterialDefinizione

Una ITICMaterialDefinition è una definizione [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) .  
Puoi usarla per recuperare alcune informazioni sull'oggetto [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import modtweaker.tconstruct.ITICMaterialDefinition;`

## Recupero di un tale oggetto

Puoi recuperare una definizione di ITICMaterialdal [definizione di ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `` ZenGetter:

```zenscript
val def = <ticmat:stone>.definizione;
```

## ZenGetters

| ZenGetter   | Tipo Di Reso | Descrizione                    |
| ----------- | ------------ | ------------------------------ |
| nome        | stringa      | Nome interno del materiale     |
| displayName | stringa      | Nome localizzato del materiale |
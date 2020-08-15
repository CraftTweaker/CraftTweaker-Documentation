# IEntityDropFunction

Una funzione IEntityDropction viene chiamata ogni volta che l'entità associata viene uccisa. Lascia fino alla tua immaginazione quello che puoi fare con questo:

## Importazione del pacakge

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityDropFunction;`

## Parametri

IEntityDropFunction è una funzione con i seguenti parametri:

- [entità IEntity](/Vanilla/Entities/IEntity/) → L'entità che è appena morta.
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → La fonte della morte dell'entità.

La funzione deve restituire un [IItemStack](/Vanilla/Items/IItemStack/), o `null`.
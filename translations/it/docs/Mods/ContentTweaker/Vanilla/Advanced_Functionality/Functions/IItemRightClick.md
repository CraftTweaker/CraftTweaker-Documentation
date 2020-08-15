# IItemRightClick

La funzione IItemRightClick può essere aggiunta ad un elemento [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) e verrà attivata quando un utente fa clic destro con l'elemento selezionato nella sua mano primaria.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemRightClick;`

## Parametri

La funzione IItemRightClick è una funzione con i seguenti parametri:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → L'elemento che è cliccato con il tasto destro del mouse
- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo in cui si trova il giocatore
- [giocatore ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) → Il giocatore che fa il clic destro
- Stringa mano → O "OFF_HAND" o "MAIN_HAND"

La funzione deve restituire `"SUCCESS"`, `"PASS"` o `"FAIL"`

## Esempio

```zenscript
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```
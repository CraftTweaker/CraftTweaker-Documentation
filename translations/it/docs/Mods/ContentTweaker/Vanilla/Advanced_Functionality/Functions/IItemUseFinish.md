# IItemUseFinish

La funzione IItemUseFinish può essere aggiunta a un elemento [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) e verrà attivata solo quando un utente finisce usando l'elemento (e. . finisce mangiare).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemUseFinish;`

## Parametri

La funzione IItemRightClickFunction è una funzione con i seguenti parametri:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → L'elemento che viene utilizzato
- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo in cui si trova il giocatore
- [entità IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) → L'entità che utilizza l'articolo

La funzione deve restituire un [IItemStack](/Vanilla/Items/IItemStack/).

## Esempio

```zenscript
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```
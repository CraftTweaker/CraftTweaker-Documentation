# IItemUseFinish

Die IItemUseFinish-Funktion kann einem [Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) hinzugefügt werden und wird nur dann ausgelöst, wenn ein Benutzer mit dem Element fertig ist (z. . Beendet das Essen).

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere mods.contenttweaker.IItemUseFinish;`

## Parameter

Die IItemRightClickFunktion ist eine Funktion mit den folgenden Parametern:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → The item that is used
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in der der Spieler ist
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) Entität → Entität mit dem Element

Die Funktion muss einen [IItemStack](/Vanilla/Items/IItemStack/) zurückgeben.

## Beispiel

```zenscript
zsItem.onItemUseFinish = function(stack, world player) {
    stack.damage(1, player);
    return stack;
};
```
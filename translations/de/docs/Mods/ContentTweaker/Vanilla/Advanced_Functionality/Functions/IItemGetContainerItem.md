# IItemGetContainerItem

Die Funktion IItemGetContainerItem kann einem [Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) hinzugefügt werden und wird immer dann ausgeführt, wenn das Element als Zutat verwendet wird.  
Es wird verwendet, um zu bestimmen, was im Handwerksfeld übrig bleibt, wenn der Gegenstand als solcher verwendet wird.  
Denken Sie zum Beispiel an Eimer, jede gefüllte Eimer hat den leeren Eimer als ContainerItem, und wenn eine gefüllte Gruppe erstellt wird, wird eine leere Gruppe angezeigt.  
Mit dieser Funktion können Sie das ContainerItem berechnen, so dass Sie verrückt werden können mit Sachen wie NBT-Tags oder mehr.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.IItemGetContainerItem;`

## Parameter

Das IItemGetContainerItem ist eine Funktion mit den folgenden Parametern:

- [IItemStack](/Vanilla/Items/IItemStack/) Stapel → Das Element.

Die Funktion muss ein neues [IItemStack](/Vanilla/Items/IItemStack/) Objekt zurückgeben, oder null, wenn das Element nichts hinterlassen soll.
# MCPotionEffectinstanz

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.potion.MCPotionEffectInstanz
```

## Methoden
### hinzufügenkurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(Stapel als crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Beschreibung                 |
| --------- | ----------------------------------------------------------------- | ---------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### kombinieren

Rückgabewert boolesch

```zenscript
myMCPotionEffectInstance.combine(Effekt als crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| effekt    | [crafttweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) | Keine Beschreibung angegeben |


### getCurativeItems

Gibt die Liste zurück<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Rückgabewert boolesch

```zenscript
myMCPotionEffectInstance.isCurativeItem(Stapel als crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Beschreibung                 |
| --------- | ----------------------------------------------------------------- | ---------------------------- |
| stapeln   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Keine Beschreibung angegeben |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(Items als crafttweaker.api.item.IItemStack[]);
```

| Parameter   | Type                                                                | Beschreibung                 |
| ----------- | ------------------------------------------------------------------- | ---------------------------- |
| gegenstände | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Keine Beschreibung angegeben |



## Eigenschaften

| Name          | Type                                                                          | Hat Getter | Hat Setter |
| ------------- | ----------------------------------------------------------------------------- | ---------- | ---------- |
| umgebung      | boolean                                                                       | true       | false      |
| verstärker    | int                                                                           | true       | false      |
| dauern        | int                                                                           | true       | false      |
| effectName    | String                                                                        | true       | false      |
| trank         | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true       | false      |
| zeige Icon    | boolean                                                                       | true       | false      |
| showParticles | boolean                                                                       | true       | false      |


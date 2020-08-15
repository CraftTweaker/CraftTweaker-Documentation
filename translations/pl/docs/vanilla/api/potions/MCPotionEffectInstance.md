# MCPotionEffectInstance

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## Metody
### addCurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parametr | Typ                                                               | Opis                    |
| -------- | ----------------------------------------------------------------- | ----------------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### combine

Returns boolean

```zenscript
myMCPotionEffectInstance.combine(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametr | Typ                                                                                           | Opis                    |
| -------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect   | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### getCurativeItems

Returns List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Returns boolean

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parametr | Typ                                                               | Opis                    |
| -------- | ----------------------------------------------------------------- | ----------------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parametr | Typ                                                                 | Opis                    |
| -------- | ------------------------------------------------------------------- | ----------------------- |
| elementy | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## Właściwości

| Nazwisko      | Typ                                                                           | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------------------- | ---------- | ---------- |
| ambient       | boolean                                                                       | prawda     | fałszywy   |
| wzmacniacz    | odcień                                                                        | prawda     | fałszywy   |
| czas trwania  | odcień                                                                        | prawda     | fałszywy   |
| effectName    | Ciąg znaków                                                                   | prawda     | fałszywy   |
| mikstura      | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | prawda     | fałszywy   |
| showIcon      | boolean                                                                       | prawda     | fałszywy   |
| showParticles | boolean                                                                       | prawda     | fałszywy   |


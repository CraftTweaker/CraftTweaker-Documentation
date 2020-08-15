# Wystąpienie MCPotionEffectInstance

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffectInstance
```

## Metody
### Element dodatkowy

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parametr | Typ                                                               | Opis             |
| -------- | ----------------------------------------------------------------- | ---------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |


### Połącz

Zwraca wartość logiczną

```zenscript
myMCPotionEffectInstance.combine(efekt jako crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametr | Typ                                                                                                         | Opis             |
| -------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| efekt    | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nie podano opisu |


### getCurativeItems

Lista zwrotów <[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Zwraca wartość logiczną

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parametr | Typ                                                               | Opis             |
| -------- | ----------------------------------------------------------------- | ---------------- |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(przedmioty jako crafttweaker.api.item.IItemStack[]);
```

| Parametr | Typ                                                                 | Opis             |
| -------- | ------------------------------------------------------------------- | ---------------- |
| elementy | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nie podano opisu |



## Właściwości

| Nazwisko              | Typ                                                                                         | Posiada Getter | Ma ustawienie |
| --------------------- | ------------------------------------------------------------------------------------------- | -------------- | ------------- |
| otoczenie             | boolean                                                                                     | prawda         | fałszywy      |
| wzmacniacz            | odcień                                                                                      | prawda         | fałszywy      |
| czas trwania          | odcień                                                                                      | prawda         | fałszywy      |
| effectName            | Ciąg znaków                                                                                 | prawda         | fałszywy      |
| mikstura              | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | prawda         | fałszywy      |
| ikona show            | boolean                                                                                     | prawda         | fałszywy      |
| Cząsteczki pokażające | boolean                                                                                     | prawda         | fałszywy      |


# MCPotionEffect

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implemented Interfaces
MCPotionEffect implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### isReady

Returns boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Parametr     | Typ    | Opis                    |
| ------------ | ------ | ----------------------- |
| czas trwania | odcień | No description provided |
| wzmacniacz   | odcień | No description provided |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Parametr     | Typ    | Opis                    | IsOptional | Wartość domyślna |
| ------------ | ------ | ----------------------- | ---------- | ---------------- |
| czas trwania | odcień | No description provided | fałszywy   | null             |
| wzmacniacz   | odcień | No description provided | prawda     | 0                |



## Właściwości

| Nazwisko             | Typ                                                                     | Has Getter | Has Setter |
| -------------------- | ----------------------------------------------------------------------- | ---------- | ---------- |
| polecenie            | Ciąg znaków                                                             | prawda     | fałszywy   |
| Przedmioty kuratywne | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | prawda     | fałszywy   |
| nazwa wyświetlacza   | Ciąg znaków                                                             | prawda     | fałszywy   |
| korzystny            | boolean                                                                 | prawda     | fałszywy   |
| Błyskawiczny         | boolean                                                                 | prawda     | fałszywy   |
| Kolor cieczy         | odcień                                                                  | prawda     | fałszywy   |
| Nazwa                | Ciąg znaków                                                             | prawda     | fałszywy   |


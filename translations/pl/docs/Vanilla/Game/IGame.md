# Klasa gry

Klasa IGame jest używana do uzyskania ogólnych informacji o grze. Można uzyskać dostęp za pomocą `gry`

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.game.IGame;`

## Zengetters

| Zengetter | Co to robi?                                         | Typ zwrotu                                                      | Użycie           |
| --------- | --------------------------------------------------- | --------------------------------------------------------------- | ---------------- |
| Biomasy   | Zwraca wszystkie zarejestrowane biomy jako listę    | List<[Ibiomy](/Vanilla/Biomes/IBiome/)>                         | `biomy`          |
| bloki     | Zwraca wszystkie zarejestrowane bloki jako lista    | List<[Definicja IBlock'a](/Vanilla/Blocks/IBlockDefinition/)>   | `bloki gry`      |
| jednostki | Zwraca wszystkie zarejestrowane podmioty jako lista | List<[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)> | `obiekty`        |
| elementy  | Zwraca wszystkie zarejestrowane elementy jako lista | List<[IItemDefinition](/Vanilla/Items/IItemDefinition/)>        | `przedmioty gry` |
| ciecze    | Zwraca wszystkie zarejestrowane płyny jako lista    | List<[ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/)>  | `ciecze`         |
| mikstury  | Zwraca wszystkie zarejestrowane mikstury jako listę | List<[IMikstura](/Vanilla/Potions/IPotion/)>                    | `Mikstury gry`   |

## Metody

### GetEntity

```zenscript
//getEntity(EntityName)

//zasadniczo te same
owce = gre.getEntity("owce");
owce 1 = <entity:minecraft:sheep>;
```

### Ustawienia lokalizacji

Ustawia lokalizację.  
Wszystkie parametry są ciągami. `game.setLocalization(klucz, wartość);`  
`gra.setLocalization(lang, key, value);`

### Lokalizuj

Zwraca zlokalizowany ciąg znaków  
`gra.localize(klucz)`  
`game.localize(key, lang)`
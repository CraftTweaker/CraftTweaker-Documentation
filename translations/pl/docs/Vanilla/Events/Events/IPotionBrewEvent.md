# Wydarzenie IPotionBrewEvent

To wydarzenie jest rozszerzone o wszystkie wydarzenia z udziałem stojaka piwowarskiego, chociaż nie jest to funkcja gracza pozwalająca na wydobywanie przedmiotów z stoiska piwowarskiego.

## Importowanie klasy
Może być wymagane [importowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`import crafttweaker.event.IPotionBrewEvent;`

## Co można z nimi zrobić?

| ZenGetter | ZenSetter | typ    |
| --------- | --------- | ------ |
| `długość` |           | odcień |

## Metody

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

Zwraca IItemStack znajdujący się na liście elementów określonej tablicy. Zwraca puste IItemStack jeśli określony indeks jest większy niż `długości`.

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

Zastępuje element w określonym indeksie określoną pozycją. Jeśli ten indeks jest większy niż długość tablicy, nic się nie wydarzy.

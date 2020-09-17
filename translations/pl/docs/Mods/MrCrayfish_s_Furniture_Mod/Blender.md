# Blender

Blender łączy przedmioty razem, co daje napój przywracający jedzenie i nasycenie.

## Napoje bezalkoholowe

- Owoc kruszony (2 x jabłka, 4 x Melon) na 4 jedzenie.
- Sok Veggie (4x marchew, 1x ziemniaka, 2x Pompkin Pie) dla 6 żywności.
- Ciasteczka i śmietanka mleczna (2 x ciasteczka, 1 x Wiadro mleka) na 4 posiłki.
- Napój energetyczny (8x czerwony kamień, 1x Ładunek ogniowy, 16x cukru) dla 8 żywności.

## Usuwanie napojów

## Usuń pasujące napoje mieszane.

```zenscript
mods.cfm.Blender.remove(@Opcjonalna ostateczna nazwa ciągu, @Opcjonalna wersja ostateczna IItemStack[] składniki, @Opcjonalna suma całkowita, @Opcjonalna wersja ostateczna int[] kolor);

// Usuń napój o nazwie "Fruit Crush"
mods.cfm.Blender. emocje („Rozbicie owoców”);
// Usunąć napoje, które wymagają jednej marchewki, jednego ziemniaka i jednej dyni do stworzenia
modów. fm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Usuń wszystkie napoje
mods.cfm.Blender.remove();
```

## Dodawanie napojów

Dodaj wymieszany napój.

## Obecnie nasycenie i wartość żywności nie mogą być ustalane niezależnie.

```zenscript
mods.cfm.Blender. ddDrink(@Nonnull końcowa nazwa ciągu, @Nonnull final IItemStack[] składniki, końcowy kolor żywności, @Nonnull final int[]);

// Dodaj napój o nazwie "Watermelon Snow", który jest koloru różowego i przywraca 20 posiłków i 20 nasyceń, wymagający 8 plastrów melonu i 4 śnieżek do tworzenia
modów. fm.Blender.addDrink("Watermelon Snow", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```
# Mischer

Der Blender kombiniert Gegenstände mit einem Getränk, das Nahrung und Sättigung wiederherstellt.

## Vanilletrinken

- Obst Crush (2x Apfel, 4x Melon) für 4 Lebensmittel.
- Veggie Saft (4x Karot, 1x Potato, 2x Kürbispause) für 6 Lebensmittel.
- Kekse und Creme Milchshake (2x Cookie, 1x Milcheimer) für 4 Lebensmittel.
- Energy Drink (8x Redstone, 1x Fire Charge, 16x Sugar) für 8 Lebensmittel.

## Getränke entfernen

## Entfernen Sie passende Mixgetränke.

```zenscript
mods.cfm.Blender.remove(@Optional finaler String name, @Optional final IItemStack[] Zutaten, @Optional finaler Integer food, @Optional finale Integer[] Farbe);

// Getränk namens "Fruit Crush" entfernen
mods.cfm.Blender. emove("Fruit Crush");
// Getränke entfernen, die einen Zuckerbrot, eine Kartoffel und einen Kürbiskuchen benötigen, um
Modi zu erstellen. fm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Alle Getränke entfernen
mods.cfm.Blender.remove();
```

## Getränke hinzufügen

Fügen Sie ein Mischgetränk hinzu.

## Derzeit können Sättigung und Lebensmittelwert nicht unabhängig voneinander festgelegt werden.

```zenscript
mods.cfm.Blender. ddDrink(@Nonnull finaler String-Name, @Nonnull finale IItemStack[] Zutaten, finale Intspeise, @Nonnull finale Inte[] Farbe);

// Fügen Sie ein Getränk namens "Wassermelonschnee" hinzu, das rosa gefärbt ist und 20 Lebensmittel und 20 Sättigung wiederherstellt, die 8 Melonenscheiben und 4 Schneebälle erfordern, um
Mods herzustellen. fm.Blender.addDrink("Wassermelonschnee", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```
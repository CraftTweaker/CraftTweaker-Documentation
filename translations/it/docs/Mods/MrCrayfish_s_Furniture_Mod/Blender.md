# Blender

Il frullatore combina oggetti insieme, risultando in una bevanda che ripristina cibo e saturazione.

## Bevande Di Vaniglia

- Frutta Frantumata (2x mela, 4x melone) per 4 alimenti.
- Succo vegetale (4x carota, 1x patata, 2x torta di zucca) per 6 alimenti.
- Biscotti e Crema Milkshake (2x Biscotto, 1x Secchio di Latte) per 4 cibi.
- Bevanda di energia (8x Redstone, 1x Fire Charge, 16x Sugar) per 8 alimenti.

## Rimozione Delle Bevande

## Rimuovere le bevande miscelate corrispondenti.

```zenscript
mods.cfm.Blender.remove(@Optional final String name, @Optional final IItemStack[] ingredienti, @Optional final Integer food, @Optional final int[] colore);

// Rimuovi bevanda chiamata "Fruit Crush"
mods.cfm.Blender. emove("Fruit Crush");
// Rimuovere le bevande che richiedono una carota, una patata e una torta di zucca per creare
mods. fm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Rimuovi tutte le bevande
mods.cfm.Blender.remove();
```

## Aggiungere Bevande

Aggiungi una bevanda miscelata.

## Attualmente, la saturazione e il valore degli alimenti non possono essere impostati in modo indipendente.

```zenscript
mods.cfm.Blender. ddDrink(@Nonnull nome finale String, @Nonnull final IItemStack[] ingredienti, final int food, @Nonnull final int[] colore);

// Aggiungi una bevanda chiamata "Neve anguria" che è rosa colorato e ripristina 20 cibo e 20 saturazione che richiedono 8 fette di melone e 4 palle di neve per creare
mods. fm.Blender.addDrink("Neve di anguria", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```
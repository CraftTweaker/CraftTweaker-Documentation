# Mélangeur

Le Blender combine des objets, ce qui donne une boisson qui restaure la nourriture et la saturation.

## Boissons à la vanille

- Broyeur de fruits (2x Pomme, 4x Melon) pour 4 aliments.
- Jus de légumes (4x carottes, 1x pommes de terre, 2x tarte à citrouille) pour 6 aliments.
- Biscuits et Milkshake à la crème (2x Cookie, 1x Seau de lait) pour 4 aliments.
- Boisson d'énergie (8x Pierre rouge, 1x Feu Charge, 16x Sugar) pour 8 aliments.

## Suppression des boissons

## Enlevez les boissons mélangées assorties.

```zenscript
mods.cfm.Blender.remove(@Nom de chaîne finale optionnelle, @Optional final IItemStack[] ingrédients, @Optional final Integer food, @Optional final int[] couleur);

// Enlever la boisson nommée "Fruit Crush"
mods.cfm.Blender. emove("Fruit Crush");
// Enlève les boissons qui nécessitent une carotte, une pomme de terre et une tarte à la citrouille pour créer
mods. fm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Supprime toutes les boisson
mods.cfm.Blender.remove();
```

## Ajout de boissons

Ajouter une boisson mélangée.

## Actuellement, la saturation et la valeur alimentaire ne peuvent pas être réglées de manière indépendante.

```zenscript
Blender mods.cfm.Blender. ddDrink(@Nonnull final String name, @Nonnull final IItemStack[] ingredients, final int food, @Nonnull final int[] colour);

// Ajoute une boisson nommée "Watermelon Snow" de couleur rose et restaure 20 aliments et 20 saturations nécessitant 8 tranches de melon et 4 boules de neige pour fabriquer
mods. fm.Blender.addDrink("Watermelon Snow", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```
# Registre d'articles

## Paquet
```zenscript
// Importe les méthodes ItemRegistry dans votre script
importez mods.terrafirmacraft.Enregistrement des éléments;
```

## Enregistrer la taille de l'élément
- Enregistrer la taille et le poids de l'article. Cela modifie la quantité que peut contenir une pile.
- Tailles [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- Poids [VERY_LIGHT, LIGHT, MEDIUM, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(IIngrédient, taille de chaîne, poids de chaîne);
```

## Enregistrer la chaleur de l'objet
- Enregistrez la capacité thermique de l'objet et si cet élément est falsifié (par exemple: peut être utilisé en enclume).
- La capacité thermique détermine la vitesse de refroidissement ou de chauffe d'un objet. Le fer forgé est de 0,35.
- La température de fonte est à la température à laquelle l'objet est fondu. Le fer forgé est 1535 Brillant Blanc tandis que le Bronze est 950 Orange. Pour une référence complète, cochez [Températures de chauffage](/Mods/Terrafirmacraft/HeatingTemperatures)
```zenscript
ItemRegistry.registerItemHeat(IIngredient input, float heatCapacity, float meltTemp, bool forgeable);
```

## Enregistrer un objet métallique
- Enregistrer un article en tant qu'article en métal. Notez que cela ajoute automatiquement la capacité de chauffage et de forgeage. Si vous ne pouvez pas Fondre est faux, cet objet ne supportera pas directement la sortie (comme le minerai de fer a besoin de fourneau de fleur/explosion)
- Les articles de lingot de métal enregistrés ne sont pas automatiquement enregistrés comme une entrée valide pour les outils (ex: le lingot d'acier d'autres mods enregistrés par la méthode registerMetalItem ne sera pas automatiquement utilisable en tête de pioche en acier TFC)
```zenscript
ItemRegistry.registerItemMetal(IIngredient input, String metal, int units, bool canMelt);
```

## Inscrire des aliments
- Enregistrez les statistiques d'aliments (Ne fonctionne pas sur les aliments TFC), cela prend la priorité sur les valeurs existantes. Réglage de Decay à 0 empêche la décomposition de se produire.
```zenscript
ItemRegistry.registerFood(IIngredient input, int hunger, float eau, float saturation, float cariay, float grain, float grain, float, float fruit, float viandes, float dairy);
```

## Enregistrer l'armure
- Enregistrer les statistiques d'armure
```zenscript
ItemRegistry.registerArmor(Entrée Ingrédient, écraseur flottant par effacementModificateur, float piercingModifier, float slashingModifier);
```

## Registre du carburant
- Inscrire un objet en tant que combustible pour la fosse, la forge ou la floraison
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int burnTicks, température flottante, bool forgeFuel, bool bloomeryFuel);
```

# Loom

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Tief;
```

## Addition

```zenscript
Loom.addRecipe(String RegistryName, IIngredient Eingabe, IItemStack Ausgabe, Int Schritte, String loomTexture);
```
- ist die Anzahl der Schritte, die benötigt werden, um das Rezept zu vervollständigen. Es ist die Häufigkeit, in der der Spieler auf den Webstuhl klicken muss, wobei jede Bewegung der Schleife einen Schritt voranschreitet. Innerhalb von TFC ist dies dieselbe wie die Anzahl der Artikel, die für das Rezept benötigt werden, aber es ist nicht erforderlich, dies zu sein.
- loomTexture ist ein Pfad (`Ressourcenposition`) zu einer Texturdatei zur Anzeige auf dem Webstuhl der Welt. Zum Beispiel bezieht "minecraft:textures/blocks/wool_colored_white.png" die Vanilletextur für weiße Wolle). Wenn Sie benutzerdefinierte Texturen verwenden, benötigen Sie eine Art Daten/Ressourcen-Laden (sprich: Ressourcen-Paket), damit diese Ihre Textur korrekt referenzieren können.

## Entfernen

```zenscript
Loom.removeRecipe(IItemStack Ausgabe);
Loom.removeRecipe(String RegistryName);
```

## Beispiel
```zenscript
Loom.addRecipe("burlap_cloth", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/burlap.png");
```
# Verrouillage OreDictionary

## Caractéristique:

Ce verrou ajoute la possibilité de verrouiller tous les objets qui sont sous une certaine balise de dictionnaire de minerai. Cela signifie que si vous verrouillez l'entrée de dictionnaire d'Ore de "oreIron", tout élément/bloc avec le tag "oreIron" sera verrouillé derrière les conditions définies. Ce type de verrou prend également en charge un paramètre [IData](/Vanilla/Data/IData/) qui signifie qu'il n'affecte que les choses sous la balise Ore-Dict SI elles ont une balise IDATA correspondante à celle fournie au verrou.

## Syntaxe :

    mods.compatskills.OreDictLock.addOreDictLock(IOreDictEntry entry, String... verrouillé);
    mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictEntry entry, balise IData, String... verrouillé);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, balise IData, "dim|1");
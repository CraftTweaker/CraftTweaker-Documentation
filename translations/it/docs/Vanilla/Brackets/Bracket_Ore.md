# Gestore Parentesi Del Dizionario Minerario

Il Gestore di parentesi del dizionario del dizionario del reo ti dà accesso ai dizionari del gioco.

Ore Dictionarys sono citati in Ore Dictionary Bracket Handler da così:

```zenscript
<ore:orename>
<ore:ingotIron>
```

Restituisce un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), finché nessun `*` è nella chiamata, altrimenti restituisce un `Lista<IOreDictEntry>` Se l'oreDictionary non è ancora nel gioco, creerà un nuovo e vuoto oreDictionary con il nome dato e restituirà quello. Si prega di fare riferimento al [Dizionario Minerario](/Vanilla/OreDict/IOreDictEntry/) Voce per ulteriori informazioni su cosa fare con loro.

# Ottenere tutti i Dizionari Ore registrati

È possibile utilizzare il seguente comando per visualizzare tutti i dizionari registrati nel registro CraftTweaker

    /ct oredict
    /crafttweaker oredict